import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';
import Column from '../../components/Connect/Column';
import Wrapper from '../../components/Connect/Wrapper';
import Header from '../../components/Connect/Header';
import Loader from '../../components/Connect/Loader';
import Web3Modal from 'web3modal';
import ConnectButton from '../../components/Connect/ConnectButton';
import Modal from '../../components/Connect/Modal';
import ModalResult from '../../components/Connect/ModalResult';
import { fonts } from '../../utils/stylesConnect';
import { getChainData } from '../../utils/utilities';
// @ts-ignore
import WalletConnectProvider from '@walletconnect/web3-provider';
// @ts-ignore

const SLayout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;

const SContent = styled(Wrapper)`
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

const SContainer = styled.div`
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
`;

const SLanding = styled(Column)`
  height: 600px;
`;

const SModalContainer = styled.div`
  width: 100%;
  position: relative;
  word-wrap: break-word;
`;

const SModalTitle = styled.div`
  margin: 1em 0;
  font-size: 20px;
  font-weight: 700;
`;

const SModalParagraph = styled.p`
  margin-top: 30px;
`;

// @ts-ignore
const SBalances = styled(SLanding)`
  height: 100%;
  & h3 {
    padding-top: 30px;
  }
`;

const STestButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const STestButton = styled.button`
  border-radius: 8px;
  font-size: ${fonts.size.medium};
  height: 44px;
  width: 100%;
  max-width: 175px;
  margin: 12px;
`;

function initWeb3(provider: any) {
  const web3: any = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}

export default function Connect() {
  const [fetching, setFetching] = useState(false);
  const [address, setAddress] = useState('');
  const [web3, setWeb3] = useState<any>({});
  const [provider, setProvider] = useState(null);
  const [connected, setConnected] = useState(false);
  const [chainId, setChainId] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [pendingRequest, setPendingRequest] = useState(false);
  const [result, setResult] = useState(null);
  const [networkId, setNetworkId] = useState(0);

  const getProviderOptions = () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: '3dd9be7637c24ef6938fad45f832b2ce',
          rpc: {
            56: 'https://bsc-dataseed.binance.org/',
            43114: 'https://bsc-dataseed.binance.org/',
          },
        },
      },
    };
    return providerOptions;
  };

  const getNetwork = () => getChainData(chainId).network;

  const resetApp = async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();
    setWeb3(null);
    setProvider(null);
    setAddress('');
    setChainId(1);
    setNetworkId(56);
    setConnected(false);
  };

  const subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return;
    }
    provider.on('close', () => resetApp());
    provider.on('accountsChanged', async (accounts: string[]) => {
      setAddress(accounts[0]);
    });
    provider.on('chainChanged', async (chainId: number) => {
      if (!web3) return;
      setNetworkId(chainId);
      setChainId(chainId);
    });

    provider.on('networkChanged', async (networkId: number) => {
      if (!web3) return;
      setChainId(networkId);
      setNetworkId(networkId);
    });
  };

  const onConnect = async () => {
    const provider = await web3Modal.connect();
    await subscribeProvider(provider);
    const web3: any = initWeb3(provider);
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    const networkId = await web3.eth.net.getId();
    const chainId = await web3.eth.chainId();

    setWeb3(web3);
    setProvider(provider);
    setAddress(address);
    setChainId(chainId);
    setNetworkId(networkId);
    setConnected(true);
  };

  const web3Modal: Web3Modal = new Web3Modal({
    network: getNetwork(),
    cacheProvider: true,
    providerOptions: getProviderOptions(),
  });

  useEffect(() => {
    onConnect();
  }, []);

  return (
    <SLayout>
      <Column maxWidth={1000} spanHeight>
        <Header
          connected={connected}
          address={address}
          chainId={chainId}
          killSession={resetApp}
        />
        <SContent>
          <SLanding center>
            <h3>{`Test Web3Modal`}</h3>
            <ConnectButton onClick={onConnect} />
          </SLanding>
          {/*fetching ? (
            <Column center>
              <SContainer>
                <Loader />
              </SContainer>
            </Column>
          ) : !!assets && !!assets.length ? (
            <SBalances>
              <h3>Actions</h3>
              <Column center>
                <STestButtonContainer>
                  <STestButton left onClick={this.testSendTransaction}>
                    {ETH_SEND_TRANSACTION}
                  </STestButton>

                  <STestButton left onClick={this.testSignMessage}>
                    {ETH_SIGN}
                  </STestButton>

                  <STestButton left onClick={this.testSignPersonalMessage}>
                    {PERSONAL_SIGN}
                  </STestButton>
                  <STestButton
                    left
                    onClick={() => this.testContractCall(DAI_BALANCE_OF)}>
                    {DAI_BALANCE_OF}
                  </STestButton>

                  <STestButton
                    left
                    onClick={() => this.testContractCall(DAI_TRANSFER)}>
                    {DAI_TRANSFER}
                  </STestButton>

                  <STestButton left onClick={this.testOpenBox}>
                    {BOX_GET_PROFILE}
                  </STestButton>
                </STestButtonContainer>
              </Column>
              <h3>Balances</h3>
              <AccountAssets chainId={chainId} assets={assets} />{' '}
            </SBalances>
          ) : (
            <SLanding center>
              <h3>{`Test Web3Modal`}</h3>
              <ConnectButton onClick={this.onConnect} />
            </SLanding>
          )*/}
        </SContent>
      </Column>
      <Modal
        show={showModal}
        toggleModal={() => {
          setShowModal((prev) => !prev);
        }}>
        {pendingRequest ? (
          <SModalContainer>
            <SModalTitle>{'Pending Call Request'}</SModalTitle>
            <SContainer>
              <Loader />
              <SModalParagraph>
                {'Approve or reject request using your wallet'}
              </SModalParagraph>
            </SContainer>
          </SModalContainer>
        ) : result ? (
          <SModalContainer>
            <SModalTitle>{'Call Request Approved'}</SModalTitle>
            <ModalResult>{result}</ModalResult>
          </SModalContainer>
        ) : (
          <SModalContainer>
            <SModalTitle>{'Call Request Rejected'}</SModalTitle>
          </SModalContainer>
        )}
      </Modal>
    </SLayout>
  );
}
