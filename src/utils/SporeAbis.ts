//Contract 0x6e7...
export const AVAX_SPORE_ABI = [{ "type": "constructor", "stateMutability": "nonpayable", "inputs": [] }, { "type": "event", "name": "Approval", "inputs": [{ "type": "address", "name": "owner", "internalType": "address", "indexed": true }, { "type": "address", "name": "spender", "internalType": "address", "indexed": true }, { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "type": "address", "name": "previousOwner", "internalType": "address", "indexed": true }, { "type": "address", "name": "newOwner", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "Transfer", "inputs": [{ "type": "address", "name": "from", "internalType": "address", "indexed": true }, { "type": "address", "name": "to", "internalType": "address", "indexed": true }, { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "allowTradeAt", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "allowance", "inputs": [{ "type": "address", "name": "owner", "internalType": "address" }, { "type": "address", "name": "spender", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "approve", "inputs": [{ "type": "address", "name": "spender", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "balanceOf", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint8", "name": "", "internalType": "uint8" }], "name": "decimals", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "decreaseAllowance", "inputs": [{ "type": "address", "name": "spender", "internalType": "address" }, { "type": "uint256", "name": "subtractedValue", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "enableFairLaunch", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "excludeAccount", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "includeAccount", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "increaseAllowance", "inputs": [{ "type": "address", "name": "spender", "internalType": "address" }, { "type": "uint256", "name": "addedValue", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "isExcluded", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "string", "name": "", "internalType": "string" }], "name": "name", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "owner", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "reflect", "inputs": [{ "type": "uint256", "name": "tAmount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "reflectionFromToken", "inputs": [{ "type": "uint256", "name": "tAmount", "internalType": "uint256" }, { "type": "bool", "name": "deductTransferFee", "internalType": "bool" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "renounceOwnership", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "string", "name": "", "internalType": "string" }], "name": "symbol", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "tokenFromReflection", "inputs": [{ "type": "uint256", "name": "rAmount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "totalFees", "inputs": [] }, { "type": "function", "stateMutability": "pure", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "totalSupply", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "transfer", "inputs": [{ "type": "address", "name": "recipient", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "transferFrom", "inputs": [{ "type": "address", "name": "sender", "internalType": "address" }, { "type": "address", "name": "recipient", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "transferOwnership", "inputs": [{ "type": "address", "name": "newOwner", "internalType": "address" }] }];
//Contract 0x33A3
export const BSC_SPORE_ABI = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "burned", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "updateAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

//Contract 0x1aF...
export const AVAX_BRIDGE_ABI = [{ "type": "constructor", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "_token", "internalType": "address" }, { "type": "uint256", "name": "_fees", "internalType": "uint256" }] }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "type": "address", "name": "previousOwner", "internalType": "address", "indexed": true }, { "type": "address", "name": "newOwner", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "Transfer", "inputs": [{ "type": "address", "name": "from", "internalType": "address", "indexed": false }, { "type": "address", "name": "to", "internalType": "address", "indexed": false }, { "type": "uint256", "name": "amount", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "date", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "nonce", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "percent", "internalType": "uint256", "indexed": false }, { "type": "uint8", "name": "step", "internalType": "enum BridgeSporeAVAX.Step", "indexed": true }], "anonymous": false }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "admin", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "balance", "inputs": [] }, { "type": "function", "stateMutability": "payable", "outputs": [], "name": "burn", "inputs": [{ "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "changeFees", "inputs": [{ "type": "uint256", "name": "newFees", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "fees", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "mint", "inputs": [{ "type": "address", "name": "to", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }, { "type": "uint256", "name": "otherChainNonce", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "mintAndSwapForAVAX", "inputs": [{ "type": "address", "name": "to", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }, { "type": "uint256", "name": "otherChainNonce", "internalType": "uint256" }, { "type": "uint256", "name": "percentSold", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "nonce", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "owner", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "pangoRouter", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "processedNonces", "inputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "renounceOwnership", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "spore", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "contract IERC20" }], "name": "token", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "transferOwnership", "inputs": [{ "type": "address", "name": "newOwner", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "wavax", "inputs": [] }];
//Contract 0x638...
export const BSC_BRIDGE_ABI = [{ "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_fees", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "date", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "percent", "type": "uint256" }, { "indexed": true, "internalType": "enum BridgeSporeBSC.Step", "name": "step", "type": "uint8" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "percent", "type": "uint256" }], "name": "burnAndSwap", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newFees", "type": "uint256" }], "name": "changeFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "fees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "otherChainNonce", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "nonce", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "processedNonces", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IToken", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

export const GOVERNOR_ALPHA_ABI = [{"type":"constructor","stateMutability":"nonpayable","payable":false,"inputs":[{"type":"address","name":"timelock_","internalType":"address"},{"type":"address","name":"png_","internalType":"address"},{"type":"address","name":"guardian_","internalType":"address"}]},{"type":"event","name":"ProposalCanceled","inputs":[{"type":"uint256","name":"id","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"ProposalCreated","inputs":[{"type":"uint256","name":"id","internalType":"uint256","indexed":false},{"type":"address","name":"proposer","internalType":"address","indexed":false},{"type":"address[]","name":"targets","internalType":"address[]","indexed":false},{"type":"uint256[]","name":"values","internalType":"uint256[]","indexed":false},{"type":"string[]","name":"signatures","internalType":"string[]","indexed":false},{"type":"bytes[]","name":"calldatas","internalType":"bytes[]","indexed":false},{"type":"uint256","name":"startTime","internalType":"uint256","indexed":false},{"type":"uint256","name":"endTime","internalType":"uint256","indexed":false},{"type":"string","name":"description","internalType":"string","indexed":false}],"anonymous":false},{"type":"event","name":"ProposalExecuted","inputs":[{"type":"uint256","name":"id","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"ProposalQueued","inputs":[{"type":"uint256","name":"id","internalType":"uint256","indexed":false},{"type":"uint256","name":"eta","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"StartBlockSet","inputs":[{"type":"uint256","name":"proposalId","internalType":"uint256","indexed":false},{"type":"uint256","name":"startBlock","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"VoteCast","inputs":[{"type":"address","name":"voter","internalType":"address","indexed":false},{"type":"uint256","name":"proposalId","internalType":"uint256","indexed":false},{"type":"bool","name":"support","internalType":"bool","indexed":false},{"type":"uint256","name":"votes","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"BALLOT_TYPEHASH","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"DOMAIN_TYPEHASH","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"__abdicate","inputs":[],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"__acceptAdmin","inputs":[],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"__executeSetTimelockPendingAdmin","inputs":[{"type":"address","name":"newPendingAdmin","internalType":"address"},{"type":"uint256","name":"eta","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"__queueSetTimelockPendingAdmin","inputs":[{"type":"address","name":"newPendingAdmin","internalType":"address"},{"type":"uint256","name":"eta","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"cancel","inputs":[{"type":"uint256","name":"proposalId","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"castVote","inputs":[{"type":"uint256","name":"proposalId","internalType":"uint256"},{"type":"bool","name":"support","internalType":"bool"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"castVoteBySig","inputs":[{"type":"uint256","name":"proposalId","internalType":"uint256"},{"type":"bool","name":"support","internalType":"bool"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}],"constant":false},{"type":"function","stateMutability":"payable","payable":true,"outputs":[],"name":"execute","inputs":[{"type":"uint256","name":"proposalId","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address[]","name":"targets","internalType":"address[]"},{"type":"uint256[]","name":"values","internalType":"uint256[]"},{"type":"string[]","name":"signatures","internalType":"string[]"},{"type":"bytes[]","name":"calldatas","internalType":"bytes[]"}],"name":"getActions","inputs":[{"type":"uint256","name":"proposalId","internalType":"uint256"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"tuple","name":"","internalType":"struct GovernorAlpha.Receipt","components":[{"type":"bool","name":"hasVoted","internalType":"bool"},{"type":"bool","name":"support","internalType":"bool"},{"type":"uint96","name":"votes","internalType":"uint96"}]}],"name":"getReceipt","inputs":[{"type":"uint256","name":"proposalId","internalType":"uint256"},{"type":"address","name":"voter","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"guardian","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"latestProposalIds","inputs":[{"type":"address","name":"","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"contract PngInterface"}],"name":"png","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"proposalCount","inputs":[],"constant":true},{"type":"function","stateMutability":"pure","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"proposalMaxOperations","inputs":[],"constant":true},{"type":"function","stateMutability":"pure","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"proposalThreshold","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"id","internalType":"uint256"},{"type":"address","name":"proposer","internalType":"address"},{"type":"uint256","name":"eta","internalType":"uint256"},{"type":"uint256","name":"startTime","internalType":"uint256"},{"type":"uint256","name":"endTime","internalType":"uint256"},{"type":"uint256","name":"startBlock","internalType":"uint256"},{"type":"uint256","name":"forVotes","internalType":"uint256"},{"type":"uint256","name":"againstVotes","internalType":"uint256"},{"type":"bool","name":"canceled","internalType":"bool"},{"type":"bool","name":"executed","internalType":"bool"}],"name":"proposals","inputs":[{"type":"uint256","name":"","internalType":"uint256"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"propose","inputs":[{"type":"address[]","name":"targets","internalType":"address[]"},{"type":"uint256[]","name":"values","internalType":"uint256[]"},{"type":"string[]","name":"signatures","internalType":"string[]"},{"type":"bytes[]","name":"calldatas","internalType":"bytes[]"},{"type":"string","name":"description","internalType":"string"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"queue","inputs":[{"type":"uint256","name":"proposalId","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint8","name":"","internalType":"enum GovernorAlpha.ProposalState"}],"name":"state","inputs":[{"type":"uint256","name":"proposalId","internalType":"uint256"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"contract TimelockInterface"}],"name":"timelock","inputs":[],"constant":true},{"type":"function","stateMutability":"pure","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"votingDelay","inputs":[],"constant":true},{"type":"function","stateMutability":"pure","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"votingPeriod","inputs":[],"constant":true}];

export const SPORE_FAIRY_ABI = [
    {
      type: 'constructor',
      stateMutability: 'nonpayable',
      inputs: [
        { type: 'address', name: 'contrak', internalType: 'contract IERC20' }
      ]
    },
    {
      type: 'event',
      name: 'Deposit',
      inputs: [
        {
          type: 'address',
          name: 'user',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'uint256',
          name: 'pid',
          internalType: 'uint256',
          indexed: false
        },
        {
          type: 'uint256',
          name: 'amount',
          internalType: 'uint256',
          indexed: false
        }
      ],
      anonymous: false
    },
    {
      type: 'event',
      name: 'OwnershipTransferred',
      inputs: [
        {
          type: 'address',
          name: 'previousOwner',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'address',
          name: 'newOwner',
          internalType: 'address',
          indexed: true
        }
      ],
      anonymous: false
    },
    {
      type: 'event',
      name: 'Withdraw',
      inputs: [
        {
          type: 'address',
          name: 'user',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'uint256',
          name: 'pid',
          internalType: 'uint256',
          indexed: false
        },
        {
          type: 'uint256',
          name: 'amount',
          internalType: 'uint256',
          indexed: false
        }
      ],
      anonymous: false
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
      name: 'balance',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'contract IERC20' }],
      name: 'contractaddress',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'deposit',
      inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }]
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'get',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'address' }],
      name: 'owner',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'renounceOwnership',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'transferOwnership',
      inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }]
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'update',
      inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }]
    }
  ];


//Contract 0x9BA
export const SPORE_MARKET_ABI = [{
    inputs: [{
        internalType: "contract IERC20",
        name: "contrak",
        type: "address"
    }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
},
{
    anonymous: false,
    inputs: [
        {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
        },
        {
            indexed: true,
            internalType: "address",
            name: "approved",
            type: "address"
        },
        {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }
    ],
    name: "Approval",
    type: "event"
},
{
    anonymous: false,
    inputs: [
        {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
        },
        {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address"
        },
        {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool"
        }
    ],
    name: "ApprovalForAll",
    type: "event"
},
{
    inputs: [
        {
            internalType: "address",
            name: "to",
            type: "address"
        },
        {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    anonymous: false,
    inputs: [
        {
            indexed: false,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        },
        {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }
    ],
    name: "Bought",
    type: "event"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256"
        }
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "id",
            type: "uint256"
        }
    ],
    name: "cancelTokenSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    anonymous: false,
    inputs: [
        {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address"
        },
        {
            indexed: false,
            internalType: "uint256",
            name: "pid",
            type: "uint256"
        },
        {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }
    ],
    name: "Deposit",
    type: "event"
},
{
    anonymous: false,
    inputs: [
        {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256"
        },
        {
            indexed: false,
            internalType: "uint256",
            name: "price",
            type: "uint256"
        }
    ],
    name: "ForSale",
    type: "event"
},
{
    anonymous: false,
    inputs: [
        {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address"
        },
        {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address"
        }
    ],
    name: "OwnershipTransferred",
    type: "event"
},
{
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "from",
            type: "address"
        },
        {
            internalType: "address",
            name: "to",
            type: "address"
        },
        {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "from",
            type: "address"
        },
        {
            internalType: "address",
            name: "to",
            type: "address"
        },
        {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        },
        {
            internalType: "bytes",
            name: "_data",
            type: "bytes"
        }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "operator",
            type: "address"
        },
        {
            internalType: "bool",
            name: "approved",
            type: "bool"
        }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "id",
            type: "uint256"
        },
        {
            internalType: "uint256",
            name: "setPrice",
            type: "uint256"
        }
    ],
    name: "setTokenPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    inputs: [],
    name: "startFairDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    anonymous: false,
    inputs: [
        {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address"
        },
        {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address"
        },
        {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }
    ],
    name: "Transfer",
    type: "event"
},
{
    inputs: [
        {
            internalType: "address",
            name: "from",
            type: "address"
        },
        {
            internalType: "address",
            name: "to",
            type: "address"
        },
        {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "newOwner",
            type: "address"
        }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
},
{
    anonymous: false,
    inputs: [
        {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address"
        },
        {
            indexed: false,
            internalType: "uint256",
            name: "pid",
            type: "uint256"
        },
        {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }
    ],
    name: "Withdraw",
    type: "event"
},
{
    inputs: [],
    name: "allowTradeAt",
    outputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "owner",
            type: "address"
        }
    ],
    name: "balanceOf",
    outputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [],
    name: "baseURI",
    outputs: [
        {
            internalType: "string",
            name: "",
            type: "string"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256"
        }
    ],
    name: "Bazaar",
    outputs: [
        {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        },
        {
            internalType: "uint256",
            name: "price",
            type: "uint256"
        },
        {
            internalType: "enum ERC721.TokenState",
            name: "state",
            type: "uint8"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [],
    name: "burnFee",
    outputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [],
    name: "calculateFee",
    outputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [],
    name: "contractaddress",
    outputs: [
        {
            internalType: "contract IERC20",
            name: "",
            type: "address"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }
    ],
    name: "getApproved",
    outputs: [
        {
            internalType: "address",
            name: "",
            type: "address"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [],
    name: "hasTimelockStarted",
    outputs: [
        {
            internalType: "bool",
            name: "",
            type: "bool"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "owner",
            type: "address"
        },
        {
            internalType: "address",
            name: "operator",
            type: "address"
        }
    ],
    name: "isApprovedForAll",
    outputs: [
        {
            internalType: "bool",
            name: "",
            type: "bool"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [],
    name: "name",
    outputs: [
        {
            internalType: "string",
            name: "",
            type: "string"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [],
    name: "owner",
    outputs: [
        {
            internalType: "address",
            name: "",
            type: "address"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }
    ],
    name: "ownerOf",
    outputs: [
        {
            internalType: "address",
            name: "",
            type: "address"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [
        {
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4"
        }
    ],
    name: "supportsInterface",
    outputs: [
        {
            internalType: "bool",
            name: "",
            type: "bool"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [],
    name: "symbol",
    outputs: [
        {
            internalType: "string",
            name: "",
            type: "string"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "index",
            type: "uint256"
        }
    ],
    name: "tokenByIndex",
    outputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "owner",
            type: "address"
        },
        {
            internalType: "uint256",
            name: "index",
            type: "uint256"
        }
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "_owner",
            type: "address"
        }
    ],
    name: "tokensOfOwner",
    outputs: [
        {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }
    ],
    name: "tokenURI",
    outputs: [
        {
            internalType: "string",
            name: "",
            type: "string"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [],
    name: "totalCharacters",
    outputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256"
        }
    ],
    stateMutability: "view",
    type: "function"
},
{
    inputs: [],
    name: "totalSupply",
    outputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256"
        }
    ],
    stateMutability: "view",
    type: "function"
}
]

//Contract png
export const AVAX_PNG_ABI = [{"type":"constructor","stateMutability":"nonpayable","payable":false,"inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"DelegateChanged","inputs":[{"type":"address","name":"delegator","internalType":"address","indexed":true},{"type":"address","name":"fromDelegate","internalType":"address","indexed":true},{"type":"address","name":"toDelegate","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"DelegateVotesChanged","inputs":[{"type":"address","name":"delegate","internalType":"address","indexed":true},{"type":"uint256","name":"previousBalance","internalType":"uint256","indexed":false},{"type":"uint256","name":"newBalance","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"DELEGATION_TYPEHASH","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"DOMAIN_TYPEHASH","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"PERMIT_TYPEHASH","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"rawAmount","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint32","name":"fromBlock","internalType":"uint32"},{"type":"uint96","name":"votes","internalType":"uint96"}],"name":"checkpoints","inputs":[{"type":"address","name":"","internalType":"address"},{"type":"uint32","name":"","internalType":"uint32"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"delegate","inputs":[{"type":"address","name":"delegatee","internalType":"address"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"delegateBySig","inputs":[{"type":"address","name":"delegatee","internalType":"address"},{"type":"uint256","name":"nonce","internalType":"uint256"},{"type":"uint256","name":"expiry","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"delegates","inputs":[{"type":"address","name":"","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint96","name":"","internalType":"uint96"}],"name":"getCurrentVotes","inputs":[{"type":"address","name":"account","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint96","name":"","internalType":"uint96"}],"name":"getPriorVotes","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"uint256","name":"blockNumber","internalType":"uint256"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nonces","inputs":[{"type":"address","name":"","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint32","name":"","internalType":"uint32"}],"name":"numCheckpoints","inputs":[{"type":"address","name":"","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"permit","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"rawAmount","internalType":"uint256"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"dst","internalType":"address"},{"type":"uint256","name":"rawAmount","internalType":"uint256"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"src","internalType":"address"},{"type":"address","name":"dst","internalType":"address"},{"type":"uint256","name":"rawAmount","internalType":"uint256"}],"constant":false}]



