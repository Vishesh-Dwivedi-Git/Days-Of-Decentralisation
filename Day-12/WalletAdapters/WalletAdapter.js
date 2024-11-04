import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletProvider } from '@solana/wallet-adapter-react';

const wallets = [
  new PhantomWalletAdapter(),
];

// Wrap your application with the WalletProvider
<WalletProvider wallets={wallets}>
  {/* Your app components */}
</WalletProvider>
