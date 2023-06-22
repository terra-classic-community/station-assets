module.exports = {
  chainID: 'localterra',
  lcd: 'http://localhost:1317',
  gasAdjustment: 1.75,
  gasPrices: { uluna: 0.15 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'LocalTerra',
  icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
  explorer: {
    address: 'https://finder.terrarebels.net/localterra/address/{}',
    tx: 'https://finder.terrarebels.net/localterra/tx/{}',
    validator: 'https://finder.terrarebels.net/localterra/validator/{}',
    block: 'https://finder.terrarebels.net/localterra/block/{}',
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNA',
      name: 'Terra Luna',
      icon: process.env.CF_PAGES_URL + '/img/coins/Luna.svg',
      decimals: 6,
    },
  ],
}
