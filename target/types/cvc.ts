export type Cvc = {
  "version": "0.1.0",
  "name": "cvc",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "voteAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
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
          "name": "voteAccountBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "vote",
      "accounts": [
        {
          "name": "voteAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "crunchOrSmooth",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "voteState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "crunchy",
            "type": "u64"
          },
          {
            "name": "smooth",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};

export const IDL: Cvc = {
  "version": "0.1.0",
  "name": "cvc",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "voteAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
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
          "name": "voteAccountBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "vote",
      "accounts": [
        {
          "name": "voteAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "crunchOrSmooth",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "voteState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "crunchy",
            "type": "u64"
          },
          {
            "name": "smooth",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
