import { JsonFragment } from '@ethersproject/abi';

export class ContractContext {
  /**
   * The uniswap router address
   */
  public static routerAddress = '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F';

  /**
   * The uniswap factory address
   */
  public static factoryAddress = '0xBCfCcbde45cE874adCB698cC183deBcF17952812';

  /**
   * The uniswap pair address
   */
  public static pairAddress = '0xBCfCcbde45cE874adCB698cC183deBcF17952812';

  /**
   * Uniswap v2 router
   */
  public static routerAbi: JsonFragment[] = require('../ABI/uniswap-router-v2.json');

  /**
   * Uniswap v2 factory
   */
  public static factoryAbi: JsonFragment[] = require('../ABI/uniswap-factory-v2.json');

  /**
   * Uniswap v2 pair
   */
  public static pairAbi: JsonFragment[] = require('../ABI/uniswap-pair-v2.json');

  /**
   * Uniswap v2 exact  pair
   */
  public static exactpPairAbi: JsonFragment[] = require('../ABI/uniswap-exact-pair-v2.json');
  /**
   * ERC20 abi
   */
  public static erc20Abi: JsonFragment[] = require('../ABI/erc-20-abi.json');

}

export declare type CustomContractContext = {
  routerAddress: string;
  factoryAddress: string;
  pairAddress: string;
};
