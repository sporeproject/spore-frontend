import * as React from 'react';
import styled from 'styled-components';
import Blockie from './Blockie';
import { ellipseAddress, getChainData } from '../../utils/utilities';
import { transitions } from '../../utils/stylesConnect';

const SHeader = styled.div`
  margin-top: -1px;
  margin-bottom: 1px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  @media (max-width: 561px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

const SActiveAccount = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
  @media (max-width: 561px) {
    align-self: flex-end;
    margin-bottom: 10px;
  }
`;

const SActiveChain = styled(SActiveAccount)`
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  & p {
    margin: 0;
    padding: 0;
  }
  & p:nth-child(2) {
    font-weight: bold;
  }

  @media (max-width: 561px) {
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;

const SBlockie = styled(Blockie)`
  margin-right: 10px;
`;

interface IHeaderStyle {
  connected: boolean;
}

const SAddress = styled.p<IHeaderStyle>`
  transition: ${transitions.base};
  font-weight: bold;
  margin: ${({ connected }) => (connected ? '-2px auto 0.7em' : '0')};
`;

const SDisconnect = styled.div<IHeaderStyle>`
  transition: ${transitions.button};
  font-size: 12px;
  font-family: monospace;
  position: absolute;
  right: 0;
  top: 20px;
  opacity: 0.7;
  cursor: pointer;

  opacity: ${({ connected }) => (connected ? 1 : 0)};
  visibility: ${({ connected }) => (connected ? 'visible' : 'hidden')};
  pointer-events: ${({ connected }) => (connected ? 'auto' : 'none')};

  &:hover {
    transform: translateY(-1px);
    opacity: 0.5;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
  children: React.ReactElement;
}

const Header = (props: IHeaderProps) => {
  const { connected, address, chainId, killSession, children } = props;
  const chainData = chainId ? getChainData(chainId) : null;
  return (
    <>
      {connected && (
        <SHeader {...props}>
          {connected && chainData ? (
            <SActiveChain>
              <p>{`Connected to`}</p>
              <p>{chainData.name}</p>
            </SActiveChain>
          ) : null}
          {address && (
            <SActiveAccount>
              <SBlockie address={address} />
              <SAddress connected={connected}>
                {ellipseAddress(address)}
              </SAddress>
              <SDisconnect connected={connected} onClick={killSession}>
                {'Disconnect'}
              </SDisconnect>
            </SActiveAccount>
          )}
        </SHeader>
      )}
      <ButtonWrapper>{children}</ButtonWrapper>
    </>
  );
};

export default Header;
