import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

/**
 * USDT token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class USDT {
  public static MAINNET() {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x55d398326f99059fF775485246999027B3197955',
      decimals: 18,
      symbol: 'USDT',
      name: 'Tether USD',
    };
  }

  /**
   * Get USDT token info by chain id
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
