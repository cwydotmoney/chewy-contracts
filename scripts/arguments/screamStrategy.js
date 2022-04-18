const SOLAR_DISTRIBUTOR = "0x0329867a8c457e9F75e25b0685011291CD30904F"
const SOLAR_ROUTER = "0xaa30ef758139ae4a7f798112902bf6d65612045f"
const SOLAR = "0x6bD193Ee6D2104F14F94E2cA6efefae561A4334B";

const TREASURY = "0x9E7e642DEA4a7C95F70CA3B6f1d15A416097517A";
const KEEPER = "0x821294D7F966167722c988e4865Ea1F61b2f4dD7";
const wMOVR = "0x98878B06940aE243284CA214f92Bb71a2b032B8A";
const OWNER = "0x821294D7F966167722c988e4865Ea1F61b2f4dD7";
const SWAPPER = "0x9785478135BaFe3dCafe4BBa4C8311674D4E826E";

// Tokens
const DAI = "0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844";
const USDC = "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d";

const shouldVerifyOnEtherscan = true;

const want = "0xfb29918d393AaAa7dD118B51A8b7fCf862F5f336";

module.exports = [
  want,
  8,
  SOLAR_DISTRIBUTOR,
  SWAPPER,
  "0xa3aeba6aB6e2598F819e8a410ccB67A2F8c55b0D",
  SOLAR_ROUTER,
  TREASURY,
  KEEPER,
  TREASURY,
  [SOLAR, wMOVR],
  [SOLAR, USDC]
];
