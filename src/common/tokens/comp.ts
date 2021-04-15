import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

/**
 * COMP token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class COMP {
  public static MAINNET() {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
      decimals: 18,
      symbol: 'COMP',
      name: 'Compound',
    };
  }

  /**
   * Get COMP token info by chain id
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
