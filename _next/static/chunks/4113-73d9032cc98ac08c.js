"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4113], {
    61965: function (e, t) {
      t.Z = [{
        inputs: [{
          internalType: "address",
          name: "authority",
          type: "address"
        }, {
          internalType: "address",
          name: "weth",
          type: "address"
        }],
        stateMutability: "nonpayable",
        type: "constructor"
      }, {
        inputs: [],
        name: "AlreadyClaimed",
        type: "error"
      }, {
        inputs: [],
        name: "AlreadyDeposited",
        type: "error"
      }, {
        inputs: [],
        name: "AlreadyFinalised",
        type: "error"
      }, {
        inputs: [],
        name: "AlreadyInitialized",
        type: "error"
      }, {
        inputs: [],
        name: "AlreadySet",
        type: "error"
      }, {
        inputs: [],
        name: "DepositTooSmall",
        type: "error"
      }, {
        inputs: [],
        name: "IncorrectWithdrawalCredentials",
        type: "error"
      }, {
        inputs: [],
        name: "IndexExceedsQueueLength",
        type: "error"
      }, {
        inputs: [],
        name: "InvalidPendingMevEthShareVault",
        type: "error"
      }, {
        inputs: [],
        name: "InvalidPendingStakingModule",
        type: "error"
      }, {
        inputs: [],
        name: "InvalidSender",
        type: "error"
      }, {
        inputs: [],
        name: "NoAdmin",
        type: "error"
      }, {
        inputs: [],
        name: "NotEnoughEth",
        type: "error"
      }, {
        inputs: [],
        name: "NotFinalised",
        type: "error"
      }, {
        inputs: [],
        name: "PrematureMevEthShareVaultUpdateFinalization",
        type: "error"
      }, {
        inputs: [],
        name: "PrematureStakingModuleUpdateFinalization",
        type: "error"
      }, {
        inputs: [],
        name: "SandwichProtection",
        type: "error"
      }, {
        inputs: [],
        name: "StakingPaused",
        type: "error"
      }, {
        inputs: [],
        name: "TransferExceedsAllowance",
        type: "error"
      }, {
        inputs: [],
        name: "UnAuthorizedCaller",
        type: "error"
      }, {
        inputs: [],
        name: "Unauthorized",
        type: "error"
      }, {
        inputs: [],
        name: "WithdrawTooSmall",
        type: "error"
      }, {
        inputs: [],
        name: "WrongDepositAmount",
        type: "error"
      }, {
        inputs: [],
        name: "WrongWithdrawAmount",
        type: "error"
      }, {
        inputs: [],
        name: "ZeroAddress",
        type: "error"
      }, {
        inputs: [],
        name: "ZeroValue",
        type: "error"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "newAdmin",
          type: "address"
        }],
        name: "AdminAdded",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "oldAdmin",
          type: "address"
        }],
        name: "AdminDeleted",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "owner",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "spender",
          type: "address"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }],
        name: "Approval",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "redeemer",
          type: "address"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "creamAmount",
          type: "uint256"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "mevEthAmount",
          type: "uint256"
        }],
        name: "CreamRedeemed",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "caller",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "owner",
          type: "address"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        name: "Deposit",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "mevEthShareVault",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "stakingModule",
          type: "address"
        }],
        name: "MevEthInitialized",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "oldVault",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "newVault",
          type: "address"
        }],
        name: "MevEthShareVaultUpdateCanceled",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "oldVault",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "pendingVault",
          type: "address"
        }, {
          indexed: !0,
          internalType: "uint64",
          name: "eligibleForFinalization",
          type: "uint64"
        }],
        name: "MevEthShareVaultUpdateCommitted",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "oldVault",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "newVault",
          type: "address"
        }],
        name: "MevEthShareVaultUpdateFinalized",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "newOperator",
          type: "address"
        }],
        name: "OperatorAdded",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "oldOperator",
          type: "address"
        }],
        name: "OperatorDeleted",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !1,
          internalType: "address",
          name: "sender",
          type: "address"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }],
        name: "Rewards",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "oldModule",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "pendingModule",
          type: "address"
        }],
        name: "StakingModuleUpdateCanceled",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "oldModule",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "pendingModule",
          type: "address"
        }, {
          indexed: !0,
          internalType: "uint64",
          name: "eligibleForFinalization",
          type: "uint64"
        }],
        name: "StakingModuleUpdateCommitted",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "oldModule",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "newModule",
          type: "address"
        }],
        name: "StakingModuleUpdateFinalized",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [],
        name: "StakingPaused",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [],
        name: "StakingUnpaused",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "from",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "to",
          type: "address"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }],
        name: "Transfer",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "stakingModule",
          type: "address"
        }, {
          components: [{
            internalType: "address",
            name: "operator",
            type: "address"
          }, {
            internalType: "bytes",
            name: "pubkey",
            type: "bytes"
          }, {
            internalType: "bytes32",
            name: "withdrawal_credentials",
            type: "bytes32"
          }, {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          }, {
            internalType: "bytes32",
            name: "deposit_data_root",
            type: "bytes32"
          }],
          indexed: !1,
          internalType: "struct IStakingModule.ValidatorData",
          name: "newValidator",
          type: "tuple"
        }],
        name: "ValidatorCreated",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !1,
          internalType: "address",
          name: "sender",
          type: "address"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }],
        name: "ValidatorWithdraw",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "caller",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "receiver",
          type: "address"
        }, {
          indexed: !0,
          internalType: "address",
          name: "owner",
          type: "address"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        name: "Withdraw",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "recipient",
          type: "address"
        }, {
          indexed: !0,
          internalType: "uint256",
          name: "withdrawalId",
          type: "uint256"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }],
        name: "WithdrawalQueueClosed",
        type: "event"
      }, {
        anonymous: !1,
        inputs: [{
          indexed: !0,
          internalType: "address",
          name: "recipient",
          type: "address"
        }, {
          indexed: !0,
          internalType: "uint256",
          name: "withdrawalId",
          type: "uint256"
        }, {
          indexed: !1,
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }],
        name: "WithdrawalQueueOpened",
        type: "event"
      }, {
        inputs: [],
        name: "CREAM_TO_MEV_ETH_PERCENT",
        outputs: [{
          internalType: "uint256",
          name: "",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [{
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "MIN_DEPOSIT",
        outputs: [{
          internalType: "uint128",
          name: "",
          type: "uint128"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "MIN_WITHDRAWAL",
        outputs: [{
          internalType: "uint128",
          name: "",
          type: "uint128"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "WETH9",
        outputs: [{
          internalType: "contract WETH",
          name: "",
          type: "address"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "newAdmin",
          type: "address"
        }],
        name: "addAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "newOperator",
          type: "address"
        }],
        name: "addOperator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "",
          type: "address"
        }],
        name: "admins",
        outputs: [{
          internalType: "bool",
          name: "",
          type: "bool"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "",
          type: "address"
        }, {
          internalType: "address",
          name: "",
          type: "address"
        }],
        name: "allowance",
        outputs: [{
          internalType: "uint256",
          name: "",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "spender",
          type: "address"
        }, {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }],
        name: "approve",
        outputs: [{
          internalType: "bool",
          name: "",
          type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "asset",
        outputs: [{
          internalType: "address",
          name: "assetTokenAddress",
          type: "address"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "",
          type: "address"
        }],
        name: "balanceOf",
        outputs: [{
          internalType: "uint256",
          name: "",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "calculateNeededEtherBuffer",
        outputs: [{
          internalType: "uint256",
          name: "",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "cancelUpdateMevEthShareVault",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "cancelUpdateStakingModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "withdrawalId",
          type: "uint256"
        }],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "newMevEthShareVault",
          type: "address"
        }],
        name: "commitUpdateMevEthShareVault",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "contract IStakingModule",
          name: "newModule",
          type: "address"
        }],
        name: "commitUpdateStakingModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        name: "convertToAssets",
        outputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }],
        name: "convertToShares",
        outputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "creamToken",
        outputs: [{
          internalType: "address",
          name: "",
          type: "address"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          components: [{
            internalType: "address",
            name: "operator",
            type: "address"
          }, {
            internalType: "bytes",
            name: "pubkey",
            type: "bytes"
          }, {
            internalType: "bytes32",
            name: "withdrawal_credentials",
            type: "bytes32"
          }, {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          }, {
            internalType: "bytes32",
            name: "deposit_data_root",
            type: "bytes32"
          }],
          internalType: "struct IStakingModule.ValidatorData",
          name: "newData",
          type: "tuple"
        }, {
          internalType: "bytes32",
          name: "latestDepositRoot",
          type: "bytes32"
        }],
        name: "createValidator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "decimals",
        outputs: [{
          internalType: "uint8",
          name: "",
          type: "uint8"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "oldAdmin",
          type: "address"
        }],
        name: "deleteAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "oldOperator",
          type: "address"
        }],
        name: "deleteOperator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }, {
          internalType: "address",
          name: "receiver",
          type: "address"
        }],
        name: "deposit",
        outputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        stateMutability: "payable",
        type: "function"
      }, {
        inputs: [],
        name: "finalizeUpdateMevEthShareVault",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "finalizeUpdateStakingModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "fraction",
        outputs: [{
          internalType: "uint128",
          name: "elastic",
          type: "uint128"
        }, {
          internalType: "uint128",
          name: "base",
          type: "uint128"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "grantRewards",
        outputs: [],
        stateMutability: "payable",
        type: "function"
      }, {
        inputs: [],
        name: "grantValidatorWithdraw",
        outputs: [],
        stateMutability: "payable",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "initialShareVault",
          type: "address"
        }, {
          internalType: "address",
          name: "initialStakingModule",
          type: "address"
        }],
        name: "init",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "initialized",
        outputs: [{
          internalType: "bool",
          name: "",
          type: "bool"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "",
          type: "address"
        }],
        name: "maxDeposit",
        outputs: [{
          internalType: "uint256",
          name: "maxAssets",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "",
          type: "address"
        }],
        name: "maxMint",
        outputs: [{
          internalType: "uint256",
          name: "maxShares",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "owner",
          type: "address"
        }],
        name: "maxRedeem",
        outputs: [{
          internalType: "uint256",
          name: "maxShares",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "owner",
          type: "address"
        }],
        name: "maxWithdraw",
        outputs: [{
          internalType: "uint256",
          name: "maxAssets",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "mevEthShareVault",
        outputs: [{
          internalType: "address",
          name: "",
          type: "address"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }, {
          internalType: "address",
          name: "receiver",
          type: "address"
        }],
        name: "mint",
        outputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }],
        stateMutability: "payable",
        type: "function"
      }, {
        inputs: [],
        name: "name",
        outputs: [{
          internalType: "string",
          name: "",
          type: "string"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "",
          type: "address"
        }],
        name: "nonces",
        outputs: [{
          internalType: "uint256",
          name: "",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "",
          type: "address"
        }],
        name: "operators",
        outputs: [{
          internalType: "bool",
          name: "",
          type: "bool"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "pauseStaking",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "pendingMevEthShareVault",
        outputs: [{
          internalType: "address",
          name: "",
          type: "address"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "pendingMevEthShareVaultCommittedTimestamp",
        outputs: [{
          internalType: "uint64",
          name: "",
          type: "uint64"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "pendingStakingModule",
        outputs: [{
          internalType: "contract IStakingModule",
          name: "",
          type: "address"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "pendingStakingModuleCommittedTimestamp",
        outputs: [{
          internalType: "uint64",
          name: "",
          type: "uint64"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "owner",
          type: "address"
        }, {
          internalType: "address",
          name: "spender",
          type: "address"
        }, {
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }, {
          internalType: "uint256",
          name: "deadline",
          type: "uint256"
        }, {
          internalType: "uint8",
          name: "v",
          type: "uint8"
        }, {
          internalType: "bytes32",
          name: "r",
          type: "bytes32"
        }, {
          internalType: "bytes32",
          name: "s",
          type: "bytes32"
        }],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }],
        name: "previewDeposit",
        outputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        name: "previewMint",
        outputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        name: "previewRedeem",
        outputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }],
        name: "previewWithdraw",
        outputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "newRequestsFinalisedUntil",
          type: "uint256"
        }],
        name: "processWithdrawalQueue",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "queueLength",
        outputs: [{
          internalType: "uint256",
          name: "",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }, {
          internalType: "address",
          name: "receiver",
          type: "address"
        }, {
          internalType: "address",
          name: "owner",
          type: "address"
        }],
        name: "redeem",
        outputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "creamAmount",
          type: "uint256"
        }],
        name: "redeemCream",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "requestsFinalisedUntil",
        outputs: [{
          internalType: "uint256",
          name: "",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint128",
          name: "newMinimum",
          type: "uint128"
        }],
        name: "setMinWithdrawal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "stakingModule",
        outputs: [{
          internalType: "contract IStakingModule",
          name: "",
          type: "address"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "stakingPaused",
        outputs: [{
          internalType: "bool",
          name: "",
          type: "bool"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "symbol",
        outputs: [{
          internalType: "string",
          name: "",
          type: "string"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "totalAssets",
        outputs: [{
          internalType: "uint256",
          name: "totalManagedAssets",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [],
        name: "totalSupply",
        outputs: [{
          internalType: "uint256",
          name: "",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "to",
          type: "address"
        }, {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }],
        name: "transfer",
        outputs: [{
          internalType: "bool",
          name: "",
          type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "address",
          name: "from",
          type: "address"
        }, {
          internalType: "address",
          name: "to",
          type: "address"
        }, {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }],
        name: "transferFrom",
        outputs: [{
          internalType: "bool",
          name: "",
          type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "unpauseStaking",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }, {
          internalType: "address",
          name: "receiver",
          type: "address"
        }, {
          internalType: "address",
          name: "owner",
          type: "address"
        }],
        name: "withdraw",
        outputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "assets",
          type: "uint256"
        }, {
          internalType: "address",
          name: "receiver",
          type: "address"
        }, {
          internalType: "address",
          name: "owner",
          type: "address"
        }],
        name: "withdrawQueue",
        outputs: [{
          internalType: "uint256",
          name: "shares",
          type: "uint256"
        }],
        stateMutability: "nonpayable",
        type: "function"
      }, {
        inputs: [],
        name: "withdrawalAmountQueued",
        outputs: [{
          internalType: "uint256",
          name: "",
          type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        inputs: [{
          internalType: "uint256",
          name: "ticketNumber",
          type: "uint256"
        }],
        name: "withdrawalQueue",
        outputs: [{
          internalType: "bool",
          name: "claimed",
          type: "bool"
        }, {
          internalType: "address",
          name: "receiver",
          type: "address"
        }, {
          internalType: "uint128",
          name: "amount",
          type: "uint128"
        }, {
          internalType: "uint128",
          name: "accumulatedAmount",
          type: "uint128"
        }],
        stateMutability: "view",
        type: "function"
      }, {
        stateMutability: "payable",
        type: "receive"
      }]
    },
    4113: function (e, t, n) {
      n.d(t, {
        V: function () {
          return c
        }
      });
      var a = n(85893),
        i = n(51232),
        s = n(43120),
        p = n(64487),
        r = n(41664),
        u = n.n(r),
        d = n(67294),
        o = n(11876),
        y = n(51192),
        l = n(39625),
        m = n(69077),
        T = n(61965);
      n(3121);
      let c = e => {
          let {
            width: t,
            questions: n
          } = e;
          return (0, a.jsxs)("div", {
            style: {
              width: t,
              marginTop: "20px"
            },
            children: [(0, a.jsx)("h1", {
              children: ""
            }), (0, a.jsx)(o.UQ, {
              allowZeroExpanded: !0,
              children: n.map((e, t) => (0, a.jsxs)(o.Qd, {
                children: [(0, a.jsx)(o.Ol, {
                  children: (0, a.jsx)(o.on, {
                    children: e.title
                  })
                }), (0, a.jsx)(o.Mt, {
                  children: e.answer
                })]
              }))
            })]
          })
        },
        b = y.ZP.div.withConfig({
          componentId: "sc-d1f332ee-0"
        })
      `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 72px;
  padding-bottom: 80px;
`, h = y.ZP.div.withConfig({
        componentId: "sc-d1f332ee-1"
      })
      `
  font-weight: 600;
  font-size: 54px;
  line-height: 1.3;

  text-align: center;

  ${s.O.whiteShine}

  @media ${s.U.mobileL} {
    font-size: 48px;
  }
  @media ${s.U.mobileM} {
    font-size: 42px;
  }
  @media ${s.U.mobileS} {
    font-size: 32px;
  }
`, w = y.ZP.div.withConfig({
        componentId: "sc-d1f332ee-2"
      })
      `
  max-width: 364px;

  font-weight: 400;
  font-size: 19px;
  line-height: 1.5;
  text-align: center;

  ${s.O.grayShine}

  @media ${s.U.mobileL} {
    max-width: unset;
    padding: 0 16px;
    font-size: 18px;
  }
  @media ${s.U.mobileM} {
    font-size: 16px;
  }
  @media ${s.U.mobileS} {
    font-size: 14px;
  }
`, f = (0, y.ZP)(u()).withConfig({
        componentId: "sc-d1f332ee-3"
      })
      `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 4px 12px 4px rgba(255, 255, 255, 0.25);

  padding: 16px 32px;

  &:hover {
    cursor: pointer;
    transform: scale(0.975);
  }
  transition: transform 0.225s ease-in-out;

  margin-top: 32px;
  margin-bottom: 24px;

  @media ${s.U.mobileL} {
    margin-top: 24px;
    margin-bottom: 16px;
  }

  @media ${s.U.mobileM} {
    margin-top: 20px;
    margin-bottom: 12px;
  }
`, v = y.ZP.div.withConfig({
        componentId: "sc-d1f332ee-4"
      })
      `
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #000000;
`;
      t.Z = function () {
        let [e, t] = (0, d.useState)("0"), {
          data: n,
          error: s
        } = (0, m.do)({
          address: i.W7,
          abi: T.Z,
          functionName: "totalAssets"
        });
        return (0, d.useEffect)(() => {
          try {
            if (n) {
              let e = (0, l.d)(n);
              n && t(parseFloat(e.toString()).toFixed(0))
            }
          } catch (e) {
            (0, p.Tb)(Error("Failed to format totalAssets"), {})
          }
        }, [n]), (0, a.jsxs)(b, {
          children: [(0, a.jsxs)(h, {
            children: ["Join the mevETH revolution today", (0, a.jsx)("br", {})]
          }), (0, a.jsx)(f, {
            href: "/stake",
            children: (0, a.jsx)(v, {
              children: "mint mevETH"
            })
          }), (0, a.jsx)(c, {
            width: "600px",
            questions: [{
              title: "What is mevETH?",
              answer: `mevETH is an Ethereum Liquid Staking Token (LST)
                built on top of the ERC-4626 Vault Token standard.
                This means there is no rebasing involved, and no need for a 
                wrapped version of the token to be used within DeFi protocols 
                like Curve or Balancer. Simplified, mevETH provides you shares 
                to the tokens vault, which essentially grows in ETH from rewards.`
            }, {
              title: "How does mevETH accrue rewards?",
              answer: `mevETH stakes the ETH in the protocol into ETH validators, 
              and captures rewards from the validators. There is a 10% fee for 
              staking with EthanMev Protocol, which goes to the protocol. Additionally,
               EthanMev Protocol will be capturing rewards through various avenues 
               involving EthanMev, and drive that to mevETH. Over time, mevETH will 
               grow proportionally with the ETH it has garnished from validator 
               rewards, and the future planned mechanisms to capture EthanMev.`
            }, {
              title: "What is ERC-4626?",
              answer: `ERC-4626 is a standard to optimize and unify 
              the technical parameters of yield-bearing vaults. 
              It provides a standard API for tokenized yield-bearing vaults 
              that represent shares of a single underlying ERC-20 token. 
              ERC-4626 also outlines an optional extension for tokenized vaults 
              utilizing ERC-20, offering basic 
              functionality for depositing, withdrawing tokens and reading balances.`
            }, {
              title: "Do I need to wrap mevETH?",
              answer: `No. As mevETH is a non-rebasing token thanks to the ERC-4626 vault 
              standard, which provides shares to the underlying in the vault, the amount 
              of mevETH will not change unless you deposit or withdraw mevETH. As the 
              vault grows, your shares proportional to the vault will grow in terms of ETH`
            }, {
              title: "What is EthanMev Protocol’s Staking Fee?",
              answer: "EthanMev Protocol applies a 10% fee on staking rewards, which goes to the protocol."
            }, {
              title: "Where can I use mevETH?",
              answer: `mevETH can be used to LP with pools on Curve and Balancer. 
              Those LPs can additionally be 
              staked in Protocols like Convex, Yearn, and Aura.`
            }, {
              title: "How do I skim rewards, withdraw, or exit mevETH?",
              answer: "All of this can be done on the Redemptions page."
            }, {
              title: "How do I know I am getting the best rate for mevETH?",
              answer: `Thanks to mevRouter, it is designed to consider minting price vs. 
              swap price from available LP pools. If it’s more efficient to swap ETH to 
              mevETH, it will utilize the LP pools. If not, it will directly mint mevETH. 
              It may also fulfill orders through both swapping and minting combined. 
              Additionally, mevRouter will also help prevent getting sandwiched to 
              ensure you the best rate when swapping mevETH.`
            }]
          })]
        })
      }
    }
  }
]);
//# sourceMappingURL=4113-73d9032cc98ac08c.js.map