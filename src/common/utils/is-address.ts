import { ethers } from 'ethers-bsc';

export function isAddress(address: string): boolean {
  return ethers.utils.isAddress(address);
}
