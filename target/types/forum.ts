export type Forum = {
  "version": "0.1.0",
  "name": "forum",
  "instructions": [
    {
      "name": "initForum",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "forumManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "forumAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpForumAuth",
          "type": "u8"
        },
        {
          "name": "forumFees",
          "type": {
            "defined": "ForumFees"
          }
        },
        {
          "name": "forumConstants",
          "type": {
            "defined": "ForumConstants"
          }
        },
        {
          "name": "reputationMatrix",
          "type": {
            "defined": "ReputationMatrix"
          }
        }
      ]
    },
    {
      "name": "updateForumParams",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newForumFees",
          "type": {
            "defined": "ForumFees"
          }
        },
        {
          "name": "newForumConstants",
          "type": {
            "defined": "ForumConstants"
          }
        },
        {
          "name": "newReputationMatrix",
          "type": {
            "defined": "ReputationMatrix"
          }
        }
      ]
    },
    {
      "name": "payoutFromTreasury",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpForumTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeForum",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpForumTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createUserProfile",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editUserProfile",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftPfpTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteUserProfile",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createAboutMe",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "aboutMe",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editAboutMe",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "aboutMe",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAboutMe",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteAboutMe",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "aboutMe",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAboutMe",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteUserProfileAndAboutMe",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "aboutMe",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAboutMe",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "askQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "tags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "contentDataUrl",
          "type": "string"
        },
        {
          "name": "bountyAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "editQuestionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteQuestionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        }
      ]
    },
    {
      "name": "supplementQuestionBounty",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "supplementor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "supplementorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpSupplementorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        },
        {
          "name": "supplementalBountyAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "refundQuestionBountySupplementorModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "supplementor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "supplementorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpSupplementorProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "acceptAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerProfileOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerUserProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        },
        {
          "name": "bumpAnswerUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAnswer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "answerQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAnswer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editAnswerModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAnswer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAnswer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteAnswerModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAnswer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "leaveCommentOnQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnQuestionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnQuestionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "leaveCommentOnAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnAnswerModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnAnswerModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createBigNote",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bigNoteType",
          "type": {
            "defined": "BigNoteType"
          }
        },
        {
          "name": "tags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "contentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "editBigNoteOpenContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "editor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "editorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpEditorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "editBigNoteCreatorCurated",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "editBigNoteModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteBigNoteModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        }
      ]
    },
    {
      "name": "supplementBigNoteBounty",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "supplementor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "supplementorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpSupplementorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        },
        {
          "name": "supplementalBountyAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "refundBigNoteBountySupplementorModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "supplementor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "supplementorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpSupplementorProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "acceptProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProfileOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalUserProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        },
        {
          "name": "bumpProposalUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "rejectProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposalProfileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposalUserProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpProposalUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "applyForBigNoteVerification",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "verificationApplication",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "verificationFeePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteBigNoteVerificationApplication",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "verificationApplication",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "verificationFeePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpVerificationApplication",
          "type": "u8"
        },
        {
          "name": "bumpVerificationFeePda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteBigNoteVerificationApplicationModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "verificationApplication",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "verificationFeePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpVerificationApplication",
          "type": "u8"
        },
        {
          "name": "bumpVerificationFeePda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "acceptBigNoteVerificationApplication",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "verificationApplication",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "verificationFeePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpVerificationApplication",
          "type": "u8"
        },
        {
          "name": "bumpVerificationFeePda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "rejectBigNoteVerificationApplication",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "verificationApplication",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "verificationFeePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpVerificationApplication",
          "type": "u8"
        },
        {
          "name": "bumpVerificationFeePda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "proposeContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editProposedContributionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteProposedContributionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "leaveCommentOnBigNote",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnBigNote",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnBigNoteModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnBigNote",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnBigNoteModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "leaveCommentOnProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnProposedContributionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnProposedContributionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createChallenge",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "tags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "contentDataUrl",
          "type": "string"
        },
        {
          "name": "challengeExpiresTs",
          "type": "u64"
        },
        {
          "name": "reputation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editChallenge",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        },
        {
          "name": "newChallengeExpiresTs",
          "type": "u64"
        },
        {
          "name": "newReputation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteChallenge",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createSubmission",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editSubmission",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editSubmissionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteSubmission",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteSubmissionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "evaluateSubmission",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        },
        {
          "name": "submissionState",
          "type": {
            "defined": "SubmissionState"
          }
        }
      ]
    },
    {
      "name": "closeAccount",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "accountToClose",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "aboutMe",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "aboutMeCreatedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentUpdateTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "answer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "question",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "answerSeed",
            "type": "publicKey"
          },
          {
            "name": "answerPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "answerRep",
            "type": "u64"
          },
          {
            "name": "acceptedAnswer",
            "type": "bool"
          },
          {
            "name": "acceptedAnswerRep",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bigNoteVerificationApplication",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bigNote",
            "type": "publicKey"
          },
          {
            "name": "verificationFeePda",
            "type": "publicKey"
          },
          {
            "name": "verificationFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bigNote",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "forum",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "bigNoteSeed",
            "type": "publicKey"
          },
          {
            "name": "bigNoteCreatedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "bountyAmount",
            "type": "u64"
          },
          {
            "name": "bountyContributions",
            "type": {
              "vec": {
                "defined": "BountyContribution"
              }
            }
          },
          {
            "name": "bigNoteType",
            "type": {
              "defined": "BigNoteType"
            }
          },
          {
            "name": "verificationState",
            "type": {
              "defined": "BigNoteVerificationState"
            }
          },
          {
            "name": "tags",
            "type": {
              "vec": {
                "defined": "Tags"
              }
            }
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "contentDataUrl",
            "type": "string"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "bigNoteCreationRep",
            "type": "u64"
          },
          {
            "name": "bigNoteVerificationRep",
            "type": "u64"
          },
          {
            "name": "bountyAwarded",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "challenge",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "forum",
            "type": "publicKey"
          },
          {
            "name": "challengeSeed",
            "type": "publicKey"
          },
          {
            "name": "challengePostedTs",
            "type": "u64"
          },
          {
            "name": "challengeExpiresTs",
            "type": "u64"
          },
          {
            "name": "tags",
            "type": {
              "vec": {
                "defined": "Tags"
              }
            }
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "contentDataUrl",
            "type": "string"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "reputation",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "comment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "commentedOn",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "commentSeed",
            "type": "publicKey"
          },
          {
            "name": "commentPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "commentRep",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "forum",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "forumManager",
            "type": "publicKey"
          },
          {
            "name": "forumAuthority",
            "type": "publicKey"
          },
          {
            "name": "forumAuthoritySeed",
            "type": "publicKey"
          },
          {
            "name": "forumAuthorityBumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "forumTreasury",
            "type": "publicKey"
          },
          {
            "name": "forumFees",
            "type": {
              "defined": "ForumFees"
            }
          },
          {
            "name": "forumConstants",
            "type": {
              "defined": "ForumConstants"
            }
          },
          {
            "name": "forumCounts",
            "type": {
              "defined": "ForumCounts"
            }
          },
          {
            "name": "reputationMatrix",
            "type": {
              "defined": "ReputationMatrix"
            }
          }
        ]
      }
    },
    {
      "name": "proposedContribution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bigNote",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "proposedContributionSeed",
            "type": "publicKey"
          },
          {
            "name": "proposedContributionPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "proposedContributionRep",
            "type": "u64"
          },
          {
            "name": "proposedContributionState",
            "type": {
              "defined": "ProposedContributionState"
            }
          },
          {
            "name": "acceptedContributionProposalRep",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "question",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "forum",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "questionSeed",
            "type": "publicKey"
          },
          {
            "name": "questionPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "bountyAmount",
            "type": "u64"
          },
          {
            "name": "bountyContributions",
            "type": {
              "vec": {
                "defined": "BountyContribution"
              }
            }
          },
          {
            "name": "tags",
            "type": {
              "vec": {
                "defined": "Tags"
              }
            }
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "contentDataUrl",
            "type": "string"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "questionRep",
            "type": "u64"
          },
          {
            "name": "bountyAwarded",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "submission",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "submissionPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "submissionState",
            "type": {
              "defined": "SubmissionState"
            }
          }
        ]
      }
    },
    {
      "name": "userProfile",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "profileOwner",
            "type": "publicKey"
          },
          {
            "name": "forum",
            "type": "publicKey"
          },
          {
            "name": "profileCreatedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "bigNotesCreated",
            "type": "u64"
          },
          {
            "name": "bigNotesVerified",
            "type": "u64"
          },
          {
            "name": "bigNotesContributionsProposed",
            "type": "u64"
          },
          {
            "name": "bigNotesContributionsAccepted",
            "type": "u64"
          },
          {
            "name": "challengesSubmitted",
            "type": "u64"
          },
          {
            "name": "challengesCompleted",
            "type": "u64"
          },
          {
            "name": "questionsAsked",
            "type": "u64"
          },
          {
            "name": "questionsAnswered",
            "type": "u64"
          },
          {
            "name": "answersAccepted",
            "type": "u64"
          },
          {
            "name": "commentsAdded",
            "type": "u64"
          },
          {
            "name": "totalBountyContributed",
            "type": "u64"
          },
          {
            "name": "totalBountyEarned",
            "type": "u64"
          },
          {
            "name": "reputationScore",
            "type": "u64"
          },
          {
            "name": "nftPfpTokenMint",
            "type": "publicKey"
          },
          {
            "name": "hasAboutMe",
            "type": "bool"
          },
          {
            "name": "hasHadAboutMe",
            "type": "bool"
          },
          {
            "name": "isModerator",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "BountyContribution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bountyContributor",
            "type": "publicKey"
          },
          {
            "name": "bountyAmount",
            "type": "u64"
          },
          {
            "name": "forumBountyMinimum",
            "type": "u64"
          },
          {
            "name": "bountyContributionRep",
            "type": "u64"
          },
          {
            "name": "bountyContributionState",
            "type": {
              "defined": "BountyContributionState"
            }
          }
        ]
      }
    },
    {
      "name": "ForumConstants",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxTagsLength",
            "type": "u64"
          },
          {
            "name": "maxTitleLength",
            "type": "u64"
          },
          {
            "name": "maxUrlLength",
            "type": "u64"
          },
          {
            "name": "minInactivityPeriod",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ForumCounts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "forumProfileCount",
            "type": "u64"
          },
          {
            "name": "forumQuestionCount",
            "type": "u64"
          },
          {
            "name": "forumAnswerCount",
            "type": "u64"
          },
          {
            "name": "forumCommentCount",
            "type": "u64"
          },
          {
            "name": "forumBigNotesCount",
            "type": "u64"
          },
          {
            "name": "forumProposedContributionCount",
            "type": "u64"
          },
          {
            "name": "forumChallengeCount",
            "type": "u64"
          },
          {
            "name": "forumSubmissionCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ForumFees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "forumProfileFee",
            "type": "u64"
          },
          {
            "name": "forumQuestionFee",
            "type": "u64"
          },
          {
            "name": "forumBigNotesSubmissionFee",
            "type": "u64"
          },
          {
            "name": "forumBigNotesSolicitationFee",
            "type": "u64"
          },
          {
            "name": "forumBigNotesVerificationFee",
            "type": "u64"
          },
          {
            "name": "forumChallengeSubmissionFee",
            "type": "u64"
          },
          {
            "name": "forumQuestionBountyMinimum",
            "type": "u64"
          },
          {
            "name": "forumBigNotesBountyMinimum",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ReputationMatrix",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "aboutMeRep",
            "type": "u64"
          },
          {
            "name": "questionRep",
            "type": "u64"
          },
          {
            "name": "answerRep",
            "type": "u64"
          },
          {
            "name": "commentRep",
            "type": "u64"
          },
          {
            "name": "acceptedAnswerRep",
            "type": "u64"
          },
          {
            "name": "createBigNotesRep",
            "type": "u64"
          },
          {
            "name": "bigNotesVerificationRep",
            "type": "u64"
          },
          {
            "name": "proposedBigNotesContributionRep",
            "type": "u64"
          },
          {
            "name": "acceptedBigNotesContributionProposalRep",
            "type": "u64"
          },
          {
            "name": "bountyContributionRep",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "BigNoteType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "OpenContribution"
          },
          {
            "name": "CreatorCurated"
          }
        ]
      }
    },
    {
      "name": "BigNoteVerificationState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unverified"
          },
          {
            "name": "AppliedForVerification"
          },
          {
            "name": "Verified"
          }
        ]
      }
    },
    {
      "name": "BountyContributionState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Available"
          },
          {
            "name": "Awarded"
          },
          {
            "name": "Refunded"
          }
        ]
      }
    },
    {
      "name": "ProposedContributionState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Accepted"
          },
          {
            "name": "Rejected"
          },
          {
            "name": "Pending"
          }
        ]
      }
    },
    {
      "name": "SubmissionState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Completed"
          },
          {
            "name": "Rejected"
          },
          {
            "name": "Pending"
          }
        ]
      }
    },
    {
      "name": "Tags",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "DaosAndGovernance"
          },
          {
            "name": "DataAndAnalytics"
          },
          {
            "name": "DeFi"
          },
          {
            "name": "Development"
          },
          {
            "name": "Gaming"
          },
          {
            "name": "Mobile"
          },
          {
            "name": "Nfts"
          },
          {
            "name": "Payments"
          },
          {
            "name": "ToolsAndInfrastructure"
          },
          {
            "name": "Trading"
          }
        ]
      }
    }
  ]
};

export const IDL: Forum = {
  "version": "0.1.0",
  "name": "forum",
  "instructions": [
    {
      "name": "initForum",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "forumManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "forumAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpForumAuth",
          "type": "u8"
        },
        {
          "name": "forumFees",
          "type": {
            "defined": "ForumFees"
          }
        },
        {
          "name": "forumConstants",
          "type": {
            "defined": "ForumConstants"
          }
        },
        {
          "name": "reputationMatrix",
          "type": {
            "defined": "ReputationMatrix"
          }
        }
      ]
    },
    {
      "name": "updateForumParams",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newForumFees",
          "type": {
            "defined": "ForumFees"
          }
        },
        {
          "name": "newForumConstants",
          "type": {
            "defined": "ForumConstants"
          }
        },
        {
          "name": "newReputationMatrix",
          "type": {
            "defined": "ReputationMatrix"
          }
        }
      ]
    },
    {
      "name": "payoutFromTreasury",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpForumTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeForum",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpForumTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createUserProfile",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editUserProfile",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftPfpTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteUserProfile",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createAboutMe",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "aboutMe",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editAboutMe",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "aboutMe",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAboutMe",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteAboutMe",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "aboutMe",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAboutMe",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteUserProfileAndAboutMe",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "aboutMe",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAboutMe",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "askQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "tags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "contentDataUrl",
          "type": "string"
        },
        {
          "name": "bountyAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "editQuestionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteQuestionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        }
      ]
    },
    {
      "name": "supplementQuestionBounty",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "supplementor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "supplementorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpSupplementorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        },
        {
          "name": "supplementalBountyAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "refundQuestionBountySupplementorModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "supplementor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "supplementorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpSupplementorProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "acceptAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "questionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerProfileOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerUserProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpQuestion",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        },
        {
          "name": "bumpAnswerUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAnswer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "answerQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAnswer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editAnswerModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAnswer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAnswer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteAnswerModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answerSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpAnswer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "leaveCommentOnQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnQuestionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnQuestion",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnQuestionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "leaveCommentOnAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnAnswerModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnAnswer",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnAnswerModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "question",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "answer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createBigNote",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bigNoteType",
          "type": {
            "defined": "BigNoteType"
          }
        },
        {
          "name": "tags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "contentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "editBigNoteOpenContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "editor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "editorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpEditorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "editBigNoteCreatorCurated",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "editBigNoteModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteBigNoteModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        }
      ]
    },
    {
      "name": "supplementBigNoteBounty",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "supplementor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "supplementorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpSupplementorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        },
        {
          "name": "supplementalBountyAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "refundBigNoteBountySupplementorModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "supplementor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "supplementorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpSupplementorProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "acceptProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bountyPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProfileOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalUserProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpBountyPda",
          "type": "u8"
        },
        {
          "name": "bumpProposalUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "rejectProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposalProfileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposalUserProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpProposalUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "applyForBigNoteVerification",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "verificationApplication",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "verificationFeePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteBigNoteVerificationApplication",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "verificationApplication",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "verificationFeePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpVerificationApplication",
          "type": "u8"
        },
        {
          "name": "bumpVerificationFeePda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteBigNoteVerificationApplicationModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "verificationApplication",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "verificationFeePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpVerificationApplication",
          "type": "u8"
        },
        {
          "name": "bumpVerificationFeePda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "acceptBigNoteVerificationApplication",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "verificationApplication",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "verificationFeePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpVerificationApplication",
          "type": "u8"
        },
        {
          "name": "bumpVerificationFeePda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "rejectBigNoteVerificationApplication",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNoteSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "verificationApplication",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "verificationFeePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpBigNote",
          "type": "u8"
        },
        {
          "name": "bumpVerificationApplication",
          "type": "u8"
        },
        {
          "name": "bumpVerificationFeePda",
          "type": "u8"
        }
      ]
    },
    {
      "name": "proposeContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editProposedContributionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteProposedContributionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContributionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpProposedContribution",
          "type": "u8"
        }
      ]
    },
    {
      "name": "leaveCommentOnBigNote",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnBigNote",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnBigNoteModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnBigNote",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnBigNoteModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "leaveCommentOnProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editCommentOnProposedContributionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnProposedContribution",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteCommentOnProposedContributionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bigNote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposedContribution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "commentSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpComment",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createChallenge",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "tags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "contentDataUrl",
          "type": "string"
        },
        {
          "name": "challengeExpiresTs",
          "type": "u64"
        },
        {
          "name": "reputation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editChallenge",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        },
        {
          "name": "newChallengeExpiresTs",
          "type": "u64"
        },
        {
          "name": "newReputation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteChallenge",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createSubmission",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forumTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editSubmission",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editSubmissionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteSubmission",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteSubmissionModerator",
      "accounts": [
        {
          "name": "forum",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "evaluateSubmission",
      "accounts": [
        {
          "name": "forum",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        },
        {
          "name": "submissionState",
          "type": {
            "defined": "SubmissionState"
          }
        }
      ]
    },
    {
      "name": "closeAccount",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "accountToClose",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "aboutMe",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "aboutMeCreatedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentUpdateTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "answer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "question",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "answerSeed",
            "type": "publicKey"
          },
          {
            "name": "answerPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "answerRep",
            "type": "u64"
          },
          {
            "name": "acceptedAnswer",
            "type": "bool"
          },
          {
            "name": "acceptedAnswerRep",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bigNoteVerificationApplication",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bigNote",
            "type": "publicKey"
          },
          {
            "name": "verificationFeePda",
            "type": "publicKey"
          },
          {
            "name": "verificationFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bigNote",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "forum",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "bigNoteSeed",
            "type": "publicKey"
          },
          {
            "name": "bigNoteCreatedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "bountyAmount",
            "type": "u64"
          },
          {
            "name": "bountyContributions",
            "type": {
              "vec": {
                "defined": "BountyContribution"
              }
            }
          },
          {
            "name": "bigNoteType",
            "type": {
              "defined": "BigNoteType"
            }
          },
          {
            "name": "verificationState",
            "type": {
              "defined": "BigNoteVerificationState"
            }
          },
          {
            "name": "tags",
            "type": {
              "vec": {
                "defined": "Tags"
              }
            }
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "contentDataUrl",
            "type": "string"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "bigNoteCreationRep",
            "type": "u64"
          },
          {
            "name": "bigNoteVerificationRep",
            "type": "u64"
          },
          {
            "name": "bountyAwarded",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "challenge",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "forum",
            "type": "publicKey"
          },
          {
            "name": "challengeSeed",
            "type": "publicKey"
          },
          {
            "name": "challengePostedTs",
            "type": "u64"
          },
          {
            "name": "challengeExpiresTs",
            "type": "u64"
          },
          {
            "name": "tags",
            "type": {
              "vec": {
                "defined": "Tags"
              }
            }
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "contentDataUrl",
            "type": "string"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "reputation",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "comment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "commentedOn",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "commentSeed",
            "type": "publicKey"
          },
          {
            "name": "commentPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "commentRep",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "forum",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "forumManager",
            "type": "publicKey"
          },
          {
            "name": "forumAuthority",
            "type": "publicKey"
          },
          {
            "name": "forumAuthoritySeed",
            "type": "publicKey"
          },
          {
            "name": "forumAuthorityBumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "forumTreasury",
            "type": "publicKey"
          },
          {
            "name": "forumFees",
            "type": {
              "defined": "ForumFees"
            }
          },
          {
            "name": "forumConstants",
            "type": {
              "defined": "ForumConstants"
            }
          },
          {
            "name": "forumCounts",
            "type": {
              "defined": "ForumCounts"
            }
          },
          {
            "name": "reputationMatrix",
            "type": {
              "defined": "ReputationMatrix"
            }
          }
        ]
      }
    },
    {
      "name": "proposedContribution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bigNote",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "proposedContributionSeed",
            "type": "publicKey"
          },
          {
            "name": "proposedContributionPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "proposedContributionRep",
            "type": "u64"
          },
          {
            "name": "proposedContributionState",
            "type": {
              "defined": "ProposedContributionState"
            }
          },
          {
            "name": "acceptedContributionProposalRep",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "question",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "forum",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "questionSeed",
            "type": "publicKey"
          },
          {
            "name": "questionPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "bountyAmount",
            "type": "u64"
          },
          {
            "name": "bountyContributions",
            "type": {
              "vec": {
                "defined": "BountyContribution"
              }
            }
          },
          {
            "name": "tags",
            "type": {
              "vec": {
                "defined": "Tags"
              }
            }
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "contentDataUrl",
            "type": "string"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "questionRep",
            "type": "u64"
          },
          {
            "name": "bountyAwarded",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "submission",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "submissionPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "submissionState",
            "type": {
              "defined": "SubmissionState"
            }
          }
        ]
      }
    },
    {
      "name": "userProfile",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "profileOwner",
            "type": "publicKey"
          },
          {
            "name": "forum",
            "type": "publicKey"
          },
          {
            "name": "profileCreatedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "bigNotesCreated",
            "type": "u64"
          },
          {
            "name": "bigNotesVerified",
            "type": "u64"
          },
          {
            "name": "bigNotesContributionsProposed",
            "type": "u64"
          },
          {
            "name": "bigNotesContributionsAccepted",
            "type": "u64"
          },
          {
            "name": "challengesSubmitted",
            "type": "u64"
          },
          {
            "name": "challengesCompleted",
            "type": "u64"
          },
          {
            "name": "questionsAsked",
            "type": "u64"
          },
          {
            "name": "questionsAnswered",
            "type": "u64"
          },
          {
            "name": "answersAccepted",
            "type": "u64"
          },
          {
            "name": "commentsAdded",
            "type": "u64"
          },
          {
            "name": "totalBountyContributed",
            "type": "u64"
          },
          {
            "name": "totalBountyEarned",
            "type": "u64"
          },
          {
            "name": "reputationScore",
            "type": "u64"
          },
          {
            "name": "nftPfpTokenMint",
            "type": "publicKey"
          },
          {
            "name": "hasAboutMe",
            "type": "bool"
          },
          {
            "name": "hasHadAboutMe",
            "type": "bool"
          },
          {
            "name": "isModerator",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "BountyContribution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bountyContributor",
            "type": "publicKey"
          },
          {
            "name": "bountyAmount",
            "type": "u64"
          },
          {
            "name": "forumBountyMinimum",
            "type": "u64"
          },
          {
            "name": "bountyContributionRep",
            "type": "u64"
          },
          {
            "name": "bountyContributionState",
            "type": {
              "defined": "BountyContributionState"
            }
          }
        ]
      }
    },
    {
      "name": "ForumConstants",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxTagsLength",
            "type": "u64"
          },
          {
            "name": "maxTitleLength",
            "type": "u64"
          },
          {
            "name": "maxUrlLength",
            "type": "u64"
          },
          {
            "name": "minInactivityPeriod",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ForumCounts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "forumProfileCount",
            "type": "u64"
          },
          {
            "name": "forumQuestionCount",
            "type": "u64"
          },
          {
            "name": "forumAnswerCount",
            "type": "u64"
          },
          {
            "name": "forumCommentCount",
            "type": "u64"
          },
          {
            "name": "forumBigNotesCount",
            "type": "u64"
          },
          {
            "name": "forumProposedContributionCount",
            "type": "u64"
          },
          {
            "name": "forumChallengeCount",
            "type": "u64"
          },
          {
            "name": "forumSubmissionCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ForumFees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "forumProfileFee",
            "type": "u64"
          },
          {
            "name": "forumQuestionFee",
            "type": "u64"
          },
          {
            "name": "forumBigNotesSubmissionFee",
            "type": "u64"
          },
          {
            "name": "forumBigNotesSolicitationFee",
            "type": "u64"
          },
          {
            "name": "forumBigNotesVerificationFee",
            "type": "u64"
          },
          {
            "name": "forumChallengeSubmissionFee",
            "type": "u64"
          },
          {
            "name": "forumQuestionBountyMinimum",
            "type": "u64"
          },
          {
            "name": "forumBigNotesBountyMinimum",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ReputationMatrix",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "aboutMeRep",
            "type": "u64"
          },
          {
            "name": "questionRep",
            "type": "u64"
          },
          {
            "name": "answerRep",
            "type": "u64"
          },
          {
            "name": "commentRep",
            "type": "u64"
          },
          {
            "name": "acceptedAnswerRep",
            "type": "u64"
          },
          {
            "name": "createBigNotesRep",
            "type": "u64"
          },
          {
            "name": "bigNotesVerificationRep",
            "type": "u64"
          },
          {
            "name": "proposedBigNotesContributionRep",
            "type": "u64"
          },
          {
            "name": "acceptedBigNotesContributionProposalRep",
            "type": "u64"
          },
          {
            "name": "bountyContributionRep",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "BigNoteType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "OpenContribution"
          },
          {
            "name": "CreatorCurated"
          }
        ]
      }
    },
    {
      "name": "BigNoteVerificationState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unverified"
          },
          {
            "name": "AppliedForVerification"
          },
          {
            "name": "Verified"
          }
        ]
      }
    },
    {
      "name": "BountyContributionState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Available"
          },
          {
            "name": "Awarded"
          },
          {
            "name": "Refunded"
          }
        ]
      }
    },
    {
      "name": "ProposedContributionState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Accepted"
          },
          {
            "name": "Rejected"
          },
          {
            "name": "Pending"
          }
        ]
      }
    },
    {
      "name": "SubmissionState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Completed"
          },
          {
            "name": "Rejected"
          },
          {
            "name": "Pending"
          }
        ]
      }
    },
    {
      "name": "Tags",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "DaosAndGovernance"
          },
          {
            "name": "DataAndAnalytics"
          },
          {
            "name": "DeFi"
          },
          {
            "name": "Development"
          },
          {
            "name": "Gaming"
          },
          {
            "name": "Mobile"
          },
          {
            "name": "Nfts"
          },
          {
            "name": "Payments"
          },
          {
            "name": "ToolsAndInfrastructure"
          },
          {
            "name": "Trading"
          }
        ]
      }
    }
  ]
};
