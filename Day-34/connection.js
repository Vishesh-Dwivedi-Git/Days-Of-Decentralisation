import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';

function WalletConnection() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  return (
    <div>
      {isConnected ? (
        <>
          <p>Connected to {address}</p>
          <p>Balance: {balance?.formatted} ETH</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      ) : (
        <button onClick={() => connect(connectors[0])}>Connect Wallet</button>
      )}
    </div>
  );
}
