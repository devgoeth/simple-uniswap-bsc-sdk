import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

/**
 * USDC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class USDC {
  public static MAINNET() {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Coin',
    };
  }

  /**
   * Get USDC token info by chain id
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
