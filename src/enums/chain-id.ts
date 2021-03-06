export enum ChainId {
  MAINNET = 56,
  ROPSTEN = 97,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
}

export const ChainNames = new Map<number, string>([
  [ChainId.MAINNET, 'mainnet'],
  [ChainId.ROPSTEN, 'ropsten'],
  [ChainId.RINKEBY, 'rinkeby'],
  [ChainId.GÖRLI, 'görli'],
  [ChainId.KOVAN, 'kovan'],
]);
