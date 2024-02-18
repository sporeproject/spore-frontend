import { AVAX_SPORE_ABI, BSC_SPORE_ABI } from './SporeAbis';
import { ContractAddesses } from './addresses';

const win = window as any;

export const getAccount = async () => {
  const accounts = await win.web3.eth.getAccounts();
  return accounts[0];
};

export const getSporesInWallet = async (isOnAvax: boolean) => {
  let SporeContract = undefined;
  if (isOnAvax) {
    SporeContract = new win.web3.eth.Contract(
      AVAX_SPORE_ABI,
      ContractAddesses.AVAX_SPORE_MAINNET
    );
  } else {
    SporeContract = new win.web3.eth.Contract(
      BSC_SPORE_ABI,
      ContractAddesses.BSC_SPORE_MAINNET
    );
  }
  var account = await win.web3.eth.getAccounts();
  account = account[0];
  try {
    var spores = await SporeContract.methods.balanceOf(account).call();
    console.log(spores);
    return spores;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
