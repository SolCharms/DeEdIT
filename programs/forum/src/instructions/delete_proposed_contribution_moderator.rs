use anchor_lang::prelude::*;

use crate::state::{BigNote, Forum, ProposedContribution, ProposedContributionState, UserProfile};
use prog_common::{now_ts, close_account, TrySub, errors::ErrorCode};

#[derive(Accounts)]
#[instruction(bump_moderator_profile: u8, bump_user_profile: u8, bump_proposed_contribution: u8)]
pub struct DeleteProposedContributionModerator<'info> {

    // Forum
    #[account(mut)]
    pub forum: Box<Account<'info, Forum>>,

    pub moderator: Signer<'info>,

    // The moderator profile
    #[account(mut, seeds = [b"user_profile".as_ref(), forum.key().as_ref(), moderator.key().as_ref()],
              bump = bump_moderator_profile, has_one = forum, constraint = moderator_profile.profile_owner == moderator.key())]
    pub moderator_profile: Box<Account<'info, UserProfile>>,

    /// CHECK: Used for seed verification of user profile pda account
    pub profile_owner: AccountInfo<'info>,

    // The user profile
    #[account(mut, seeds = [b"user_profile".as_ref(), forum.key().as_ref(), profile_owner.key().as_ref()],
              bump = bump_user_profile, has_one = forum, has_one = profile_owner)]
    pub user_profile: Box<Account<'info, UserProfile>>,

    // Big Note PDA account
    #[account(mut, has_one = forum)]
    pub big_note: Box<Account<'info, BigNote>>,

    // Proposed Contribution PDA account and seed
    #[account(mut, seeds = [b"proposed_contribution".as_ref(), forum.key().as_ref(), user_profile.key().as_ref(), proposed_contribution_seed.key().as_ref()],
              bump = bump_proposed_contribution, has_one = big_note, has_one = user_profile, has_one = proposed_contribution_seed)]
    pub proposed_contribution: Box<Account<'info, ProposedContribution>>,

    /// CHECK: The seed address used for initialization of the Proposed Contribution PDA
    pub proposed_contribution_seed: AccountInfo<'info>,

    /// CHECK:
    #[account(mut)]
    pub receiver: AccountInfo<'info>,

    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<DeleteProposedContributionModerator>) -> Result<()> {

    let now_ts: u64 = now_ts()?;

    let proposed_contribution_rep = ctx.accounts.proposed_contribution.proposed_contribution_rep;
    let proposed_contribution_state = ctx.accounts.proposed_contribution.proposed_contribution_state;

    if !ctx.accounts.moderator_profile.is_moderator {
        return Err(error!(ErrorCode::ProfileIsNotModerator));
    }

    // Set the receiver of the lamports to be reclaimed from the rent of the accounts to be closed
    let receiver = &mut ctx.accounts.receiver;

    // Close the Proposed Contribution state account
    let proposed_contribution_account_info = &mut (*ctx.accounts.proposed_contribution).to_account_info();
    close_account(proposed_contribution_account_info, receiver)?;

    // Decrement forum proposed contribution count in forum's state
    let forum = &mut ctx.accounts.forum;
    forum.forum_counts.forum_proposed_contribution_count.try_sub_assign(1)?;

    // Decrement contributions proposed and reputation score in user profile account's state
    let user_profile = &mut ctx.accounts.user_profile;
    user_profile.big_notes_contributions_proposed.try_sub_assign(1)?;
    user_profile.reputation_score.try_sub_assign(proposed_contribution_rep)?;

    if proposed_contribution_state == ProposedContributionState::Accepted {
        let accepted_contribution_proposal_rep = ctx.accounts.proposed_contribution.accepted_contribution_proposal_rep;
        user_profile.big_notes_contributions_accepted.try_sub_assign(1)?;
        user_profile.reputation_score.try_sub_assign(accepted_contribution_proposal_rep)?;
    }

    // Update moderator profile's most recent engagement
    let moderator_profile = &mut ctx.accounts.moderator_profile;
    moderator_profile.most_recent_engagement_ts = now_ts;

    // Update big_note account's most recent engagement timestamp
    let big_note = &mut ctx.accounts.big_note;
    big_note.most_recent_engagement_ts = now_ts;

    msg!("Proposed Contribution PDA account with address {} has been closed by moderator profile with pubkey {}",
         ctx.accounts.proposed_contribution.key(), ctx.accounts.moderator_profile.key());
    Ok(())
}
