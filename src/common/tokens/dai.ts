import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

/**
 * DAI token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class DAI {
  public static MAINNET() {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
      decimals: 18,
      symbol: 'DAI',
      name: 'Dai Stablecoin',
    };
  }

  /**
   * Get DAI token info by chain id
   * @param chainId The chain id
   */
  public static token(chainId: ChainId | number) {
    switch (chainId) {
      case ChainId.MAINNET:
        return this.MAINNET();
      default:
        throw new UniswapError(
          `${chainId} is not allowed`,
          ErrorCodes.tokenChainIdContractDoesNotExist
        );
    }
  }
}
