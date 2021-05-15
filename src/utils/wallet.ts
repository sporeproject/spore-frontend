import { ethers } from 'ethers';
import { AVAX_SPORE_ABI, BSC_SPORE_ABI } from './SporeAbis';
import { ContractAddesses } from './addresses';

const win = window as any

export const getAccount = async () => {
    const accounts = await win.web3.eth.getAccounts()
    return accounts[0]
}

export const approveContract = async (tokenAddress: string, tokenABI: any, toApproveAddress: string, amount: ethers.BigNumber) => {
    const contract = new win.web3.eth.Contract(
        tokenABI,
        tokenAddress
    )
    const account = await getAccount()
    try {
        await contract.methods
            .approve(toApproveAddress, amount)
            .send({ from: account, gasPrice: 225000000000 })
    } catch (error) {
        alert(error)
    }
}

export const getSporesInWallet = async (isOnAvax: boolean) => {

    let SporeContract = undefined
    if (isOnAvax) {
        SporeContract = new win.web3.eth.Contract(
            AVAX_SPORE_ABI,
            ContractAddesses.AVAX_SPORE_MAINNET
        );
    }
    else {
        SporeContract = new win.web3.eth.Contract(
            BSC_SPORE_ABI,
            ContractAddesses.BSC_SPORE_MAINNET
        );

    }
    var account = await win.web3.eth.getAccounts();
    account = account[0];
    try {
        var spores = await SporeContract.methods.balanceOf(account).call();
        console.log(spores)
        return spores
    } catch (error) {
        console.log(error);
        return 0
    }
}