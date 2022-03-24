export const moonbeamPools = [
  {
    id: 'moonbeam-bifi-maxi',
    logo: 'single-assets/BIFI.png',
    name: 'BIFI Maxi',
    token: 'BIFI',
    tokenDescription: 'Beefy.Finance',
    tokenAddress: '0x595c8481c48894771CE8FaDE54ac6Bf59093F9E8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooMoonbeamBIFI',
    earnedTokenAddress: '0xd1bAb603eee03fA99A378d90d5d83186fEB81aA9',
    earnContractAddress: '0xd1bAb603eee03fA99A378d90d5d83186fEB81aA9',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BIFI',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beefy.Finance',
    assets: ['BIFI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Maxi',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://app.beamswap.io/exchange/swap?inputCurrency=0xacc15dc74880c9944775448304b263d191c6077f&outputCurrency=0x595c8481c48894771CE8FaDE54ac6Bf59093F9E8',
    createdAt: 1644700692,
  },
  {
    id: 'stellaswap-stella-wglmr',
    name: 'STELLA-GLMR LP',
    token: 'STELLA-GLMR LP',
    tokenDescription: 'Stellaswap',
    tokenAddress: '0x7F5Ac0FC127bcf1eAf54E3cd01b00300a0861a62',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooStellaswapSTELLA-GLMR',
    earnedTokenAddress: '0x515989A9Add6Bb3Ab78b59a2AE30E398E740886F',
    earnContractAddress: '0x515989A9Add6Bb3Ab78b59a2AE30E398E740886F',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'stellaswap-stella-wglmr',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Stellaswap',
    assets: ['STELLA', 'GLMR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.stellaswap.com/exchange/add/0x0E358838ce72d5e61E0018a2ffaC4bEC5F4c88d2/ETH',
    buyTokenUrl: 'https://app.stellaswap.com/exchange/swap',
    createdAt: 1647368211,
  },
  {
    id: 'stellaswap-stella-usdc',
    name: 'STELLA-USDC LP',
    token: 'STELLA-USDC LP',
    tokenDescription: 'Stellaswap',
    tokenAddress: '0x81e11a9374033d11Cc7e7485A7192AE37D0795D6',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooStellaswapSTELLA-USDC',
    earnedTokenAddress: '0xfb47EC2f215D579cc4Cb0B19ec21AD58749518ad',
    earnContractAddress: '0xfb47EC2f215D579cc4Cb0B19ec21AD58749518ad',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'stellaswap-stella-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Stellaswap',
    assets: ['STELLA', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.stellaswap.com/exchange/add/0x0E358838ce72d5e61E0018a2ffaC4bEC5F4c88d2/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
    buyTokenUrl: 'https://app.stellaswap.com/exchange/swap',
    createdAt: 1647368211,
  },
  {
    id: 'stellaswap-usdc-wglmr',
    name: 'USDC-GLMR LP',
    token: 'USDC-GLMR LP',
    tokenDescription: 'Stellaswap',
    tokenAddress: '0x555B74dAFC4Ef3A5A1640041e3244460Dc7610d1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooStellaswapUSDC-GLMR',
    earnedTokenAddress: '0x28C88367CC1E52A397dE5e1Ec3c4F163083ee607',
    earnContractAddress: '0x28C88367CC1E52A397dE5e1Ec3c4F163083ee607',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'stellaswap-usdc-wglmr',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Stellaswap',
    assets: ['USDC', 'GLMR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.stellaswap.com/exchange/add/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b/ETH',
    buyTokenUrl: 'https://app.stellaswap.com/exchange/swap',
    createdAt: 1647368211,
  },
  {
    id: 'stellaswap-usdc-usdt',
    name: 'USDC-USDT LP',
    token: 'USDC-USDT LP',
    tokenDescription: 'Stellaswap',
    tokenAddress: '0x8BC3CceeF43392B315dDD92ba30b435F79b66b9e',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooStellaswapUSDC-USDT',
    earnedTokenAddress: '0x1a93dB99B91c944CBC01093DE7F13779ca2c6ED6',
    earnContractAddress: '0x1a93dB99B91c944CBC01093DE7F13779ca2c6ED6',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'stellaswap-usdc-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Stellaswap',
    assets: ['USDC', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.stellaswap.com/exchange/add/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b/0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73',
    buyTokenUrl: 'https://app.stellaswap.com/exchange/swap',
    createdAt: 1647530983,
  },
  {
    id: 'stellaswap-usdc-bnb',
    name: 'USDC-BNB LP',
    token: 'USDC-BNB LP',
    tokenDescription: 'Stellaswap',
    tokenAddress: '0xAc2657ba28768FE5F09052f07A9B7ea867A4608f',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooStellaswapUSDC-BNB',
    earnedTokenAddress: '0xA2e36EB5FecF7A567996214D6f1C9973dF59d93d',
    earnContractAddress: '0xA2e36EB5FecF7A567996214D6f1C9973dF59d93d',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'stellaswap-usdc-bnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Stellaswap',
    assets: ['USDC', 'BNB'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.stellaswap.com/exchange/add/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b/0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055',
    buyTokenUrl: 'https://app.stellaswap.com/exchange/swap',
    createdAt: 1647530983,
  },
  {
    id: 'stellaswap-busd-wglmr',
    name: 'BUSD-GLMR LP',
    token: 'BUSD-GLMR LP',
    tokenDescription: 'Stellaswap',
    tokenAddress: '0x367c36dAE9ba198A4FEe295c22bC98cB72f77Fe1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooStellaswapBUSD-GLMR',
    earnedTokenAddress: '0x3543c002c913Bc90e69C689b945f8D2A042f1dA0',
    earnContractAddress: '0x3543c002c913Bc90e69C689b945f8D2A042f1dA0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'stellaswap-busd-wglmr',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Stellaswap',
    assets: ['BUSD', 'GLMR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.stellaswap.com/exchange/add/0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F/0xAcc15dC74880C9944775448304B263D191c6077F',
    buyTokenUrl: 'https://app.stellaswap.com/exchange/swap',
    createdAt: 1647530983,
  },
  {
    id: 'solarflare-ust-wglmr',
    name: 'UST-GLMR LP',
    token: 'UST-GLMR SLP',
    tokenDescription: 'Solarflare',
    tokenAddress: '0xa2844004Ce6336007f09D6Bf959B5602ABbf19fb',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSolarflareUST-GLMR',
    earnedTokenAddress: '0x9D55cAEE108aBdd4C47E42088C97ecA43510E969',
    earnContractAddress: '0x9D55cAEE108aBdd4C47E42088C97ecA43510E969',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'solarflare-ust-wglmr',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Solarflare',
    assets: ['UST', 'GLMR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.solarflare.io/exchange/add/0x085416975fe14C2A731a97eC38B9bF8135231F62/0xAcc15dC74880C9944775448304B263D191c6077F',
    buyTokenUrl:
      'https://app.solarflare.io/exchange/swap?inputCurrency=0x085416975fe14C2A731a97eC38B9bF8135231F62&outputCurrency=0xAcc15dC74880C9944775448304B263D191c6077F',
    createdAt: 1646427456,
  },
  {
    id: 'solarflare-luna-flare',
    name: 'LUNA-FLARE LP',
    token: 'LUNA-FLARE SLP',
    tokenDescription: 'Solarflare',
    tokenAddress: '0xAc69fa960b5fcc90559BF39284C00946e7d8Eb78',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSolarflareLUNA-FLARE',
    earnedTokenAddress: '0x9584e368355D4634f1bdD7b0e7B08fFEa38ED0b0',
    earnContractAddress: '0x9584e368355D4634f1bdD7b0e7B08fFEa38ED0b0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'solarflare-luna-flare',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Solarflare',
    assets: ['LUNA', 'FLARE'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.solarflare.io/exchange/add/0xE3e43888fa7803cDC7BEA478aB327cF1A0dc11a7/0x31DAB3430f3081dfF3Ccd80F17AD98583437B213',
    buyTokenUrl:
      'https://app.solarflare.io/exchange/swap?inputCurrency=0x31DAB3430f3081dfF3Ccd80F17AD98583437B213&outputCurrency=0xE3e43888fa7803cDC7BEA478aB327cF1A0dc11a7',
    createdAt: 1646426436,
  },
  {
    id: 'solarflare-wglmr-flare',
    name: 'FLARE-GLMR LP',
    token: 'FLARE-GLMR SLP',
    tokenDescription: 'Solarflare',
    tokenAddress: '0x26A2abD79583155EA5d34443b62399879D42748A',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSolarflareFLARE-GLMR',
    earnedTokenAddress: '0x37A8b016EF27fBCF73F73Fb9Dc1C09C47A5d7E48',
    earnContractAddress: '0x37A8b016EF27fBCF73F73Fb9Dc1C09C47A5d7E48',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'solarflare-wglmr-flare',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Solarflare',
    assets: ['FLARE', 'GLMR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.solarflare.io/exchange/add/0xE3e43888fa7803cDC7BEA478aB327cF1A0dc11a7/0xAcc15dC74880C9944775448304B263D191c6077F',
    buyTokenUrl:
      'https://app.solarflare.io/exchange/swap?inputCurrency=0xAcc15dC74880C9944775448304B263D191c6077F&outputCurrency=0xE3e43888fa7803cDC7BEA478aB327cF1A0dc11a7',
    createdAt: 1646421834,
  },
  {
    id: 'solarflare-usdc-wglmr',
    name: 'USDC-GLMR LP',
    token: 'USDC-GLMR SLP',
    tokenDescription: 'Solarflare',
    tokenAddress: '0xAb89eD43D10c7CE0f4D6F21616556AeCb71b9c5f',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSolarflareUSDC-GLMR',
    earnedTokenAddress: '0xf26607237355D7c6183ea66EC908729E9c6eEB6b',
    earnContractAddress: '0xf26607237355D7c6183ea66EC908729E9c6eEB6b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'solarflare-usdc-wglmr',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Solarflare',
    assets: ['USDCs', 'GLMR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.solarflare.io/exchange/add/0x595c8481c48894771CE8FaDE54ac6Bf59093F9E8/0xAcc15dC74880C9944775448304B263D191c6077F',
    buyTokenUrl:
      'https://app.solarflare.io/exchange/swap?inputCurrency=0xAcc15dC74880C9944775448304B263D191c6077F&outputCurrency=0x595c8481c48894771CE8FaDE54ac6Bf59093F9E8',
    createdAt: 1646424684,
  },
  {
    id: 'beamswap-bifi-wglmr',
    name: 'BIFI-GLMR LP',
    token: 'BIFI-GLMR TLP',
    tokenDescription: 'Beamswap',
    tokenAddress: '0x321e45B7134b5Ed52129027F1743c8E71DA0A339',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooBeamBIFI-GLMR',
    earnedTokenAddress: '0x2Ba77eE40995d8FedD5212E4776aE5eBfFde7a47',
    earnContractAddress: '0x2Ba77eE40995d8FedD5212E4776aE5eBfFde7a47',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'beamswap-bifi-wglmr',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beamswap',
    assets: ['BIFI', 'GLMR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.beamswap.io/exchange/add/0x595c8481c48894771CE8FaDE54ac6Bf59093F9E8/0xacc15dc74880c9944775448304b263d191c6077f3',
    buyTokenUrl:
      'https://app.beamswap.io/exchange/swap?inputCurrency=0x595c8481c48894771CE8FaDE54ac6Bf59093F9E8&outputCurrency=0xacc15dc74880c9944775448304b263d191c6077f',
    createdAt: 1644704004,
  },
  {
    id: 'beamswap-usdc-ftm',
    name: 'FTM-USDC LP',
    token: 'FTM-USDC TLP',
    tokenDescription: 'Beamswap',
    tokenAddress: '0xA135de8E019447DA28f15eb480AEa0a242af5335',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooBeamFTM-USDC',
    earnedTokenAddress: '0x05CC7F3AaD0Cecbf926D2F4A534F55C19035718e',
    earnContractAddress: '0x05CC7F3AaD0Cecbf926D2F4A534F55C19035718e',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'beamswap-usdc-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beamswap',
    assets: ['FTM', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.beamswap.io/exchange/add/0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b/0xC19281F22A075E0F10351cd5D6Ea9f0AC63d4327',
    buyTokenUrl:
      'https://app.beamswap.io/exchange/swap?inputCurrency=0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b&outputCurrency=0xC19281F22A075E0F10351cd5D6Ea9f0AC63d4327',
    createdAt: 1644703824,
  },
  {
    id: 'beamswap-usdc-wglmr',
    name: 'USDC-GLMR LP',
    token: 'USDC-GLMR TLP',
    tokenDescription: 'Beamswap',
    tokenAddress: '0xb929914B89584b4081C7966AC6287636F7EfD053',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooBeamUSDC-GLMR',
    earnedTokenAddress: '0xC96b496F78d1a45D9cec6d628a75614ed230D6D4',
    earnContractAddress: '0xC96b496F78d1a45D9cec6d628a75614ed230D6D4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'beamswap-usdc-wglmr',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beamswap',
    assets: ['USDC', 'GLMR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.beamswap.io/exchange/add/0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b/0xacc15dc74880c9944775448304b263d191c6077f3',
    buyTokenUrl:
      'https://app.beamswap.io/exchange/swap?inputCurrency=0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b&outputCurrency=0xacc15dc74880c9944775448304b263d191c6077f',
    createdAt: 1644598122,
  },
  {
    id: 'beamswap-dai-usdc',
    name: 'USDC-DAI LP',
    token: 'USDC-DAI TLP',
    tokenDescription: 'Beamswap',
    tokenAddress: '0x7EF9491774a81f6dB7Bb759Fe2F645c334dCf5b1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooBeamUSDC-DAI',
    earnedTokenAddress: '0x149f3dDeB5FF9bE7342D07C35D6dA19Df3F790af',
    earnContractAddress: '0x149f3dDeB5FF9bE7342D07C35D6dA19Df3F790af',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'beamswap-dai-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beamswap',
    assets: ['USDC', 'DAI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.beamswap.io/exchange/add/0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b/0x765277EebeCA2e31912C9946eAe1021199B39C61',
    buyTokenUrl:
      'https://app.beamswap.io/exchange/swap?inputCurrency=0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b&outputCurrency=0x765277EebeCA2e31912C9946eAe1021199B39C61',
    createdAt: 1644598824,
  },
  {
    id: 'beamswap-wglmr-glint',
    name: 'GLINT-GLMR LP',
    token: 'GLINT-GLMR TLP',
    tokenDescription: 'Beamswap',
    tokenAddress: '0x99588867e817023162F4d4829995299054a5fC57',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooBeamGLINT-GLMR',
    earnedTokenAddress: '0x011A0aDc7663334f73Aa6da3db9c9951d0CbB8CF',
    earnContractAddress: '0x011A0aDc7663334f73Aa6da3db9c9951d0CbB8CF',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'beamswap-wglmr-glint',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beamswap',
    assets: ['GLINT', 'GLMR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.beamswap.io/exchange/add/0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b/0x765277EebeCA2e31912C9946eAe1021199B39C61',
    buyTokenUrl:
      'https://app.beamswap.io/exchange/swap?inputCurrency=0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b&outputCurrency=0x765277EebeCA2e31912C9946eAe1021199B39C61',
    createdAt: 1644599100,
  },
  {
    id: 'beamswap-busd-bnb',
    name: 'BUSD-BNB LP',
    token: 'BUSD-BNB TLP',
    tokenDescription: 'Beamswap',
    tokenAddress: '0x34A1F4AB3548A92C6B32cd778Eed310FcD9A340D',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooBeamBUSD-BNB',
    earnedTokenAddress: '0x452bE05439d83D3A6A510F11a4Ba1F1909d1cA6d',
    earnContractAddress: '0x452bE05439d83D3A6A510F11a4Ba1F1909d1cA6d',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'beamswap-busd-bnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beamswap',
    assets: ['BUSD', 'BNB'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.beamswap.io/exchange/add/0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055/0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F',
    buyTokenUrl:
      'https://app.beamswap.io/exchange/swap?inputCurrency=0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055&outputCurrency=0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F',
    createdAt: 1644599646,
  },
  {
    id: 'beamswap-usdc-busd',
    name: 'USDC-BUSD LP',
    token: 'USDC-BUSD TLP',
    tokenDescription: 'Beamswap',
    tokenAddress: '0xa0799832FB2b9F18Acf44B92FbbEDCfD6442DD5e',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooBeamUSDC-BUSD',
    earnedTokenAddress: '0x3DD36E64784FDAEe7BD202c78322a0d8EB1BB32b',
    earnContractAddress: '0x3DD36E64784FDAEe7BD202c78322a0d8EB1BB32b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'beamswap-usdc-busd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beamswap',
    assets: ['USDC', 'BUSD'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.beamswap.io/exchange/add/0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
    buyTokenUrl:
      'https://app.beamswap.io/exchange/swap?inputCurrency=0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F&outputCurrency=0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
    createdAt: 1644599298,
  },
  {
    id: 'beamswap-usdc-eth',
    name: 'USDC-ETH LP',
    token: 'USDC-ETH TLP',
    tokenDescription: 'Beamswap',
    tokenAddress: '0x6BA3071760d46040FB4dc7B627C9f68efAca3000',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooBeamUSDC-ETH',
    earnedTokenAddress: '0x93E0573029Bd4452d2D4BAF7725ecf8e5B0b5Dd7',
    earnContractAddress: '0x93E0573029Bd4452d2D4BAF7725ecf8e5B0b5Dd7',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'beamswap-usdc-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beamswap',
    assets: ['USDC', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.beamswap.io/exchange/add/0xfA9343C3897324496A05fC75abeD6bAC29f8A40f/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
    buyTokenUrl:
      'https://app.beamswap.io/exchange/swap?inputCurrency=0xfA9343C3897324496A05fC75abeD6bAC29f8A40f&outputCurrency=0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
    createdAt: 1644599832,
  },
  {
    id: 'beamswap-usdc-usdt',
    name: 'USDC-USDT LP',
    token: 'USDC-USDT TLP',
    tokenDescription: 'Beamswap',
    tokenAddress: '0xA35B2c07Cb123EA5E1B9c7530d0812e7e03eC3c1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooBeamUSDC-USDT',
    earnedTokenAddress: '0x830806F4d629a2aC60a93F594D86dD9684D0c65D',
    earnContractAddress: '0x830806F4d629a2aC60a93F594D86dD9684D0c65D',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'beamswap-usdc-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beamswap',
    assets: ['USDC', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.beamswap.io/exchange/add/0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
    buyTokenUrl:
      'https://app.beamswap.io/exchange/swap?inputCurrency=0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73&outputCurrency=0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
    createdAt: 1644600000,
  },
];
