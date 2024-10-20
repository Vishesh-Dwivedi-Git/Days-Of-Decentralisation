import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet } from 'wagmi/chains';

// Setup TanStack Query client
const queryClient = new QueryClient();

// Setup wagmi client
const { provider, webSocketProvider } = configureChains([mainnet], [publicProvider()]);
const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        {/* Your app content */}
        <MyComponent />
      </WagmiConfig>
    </QueryClientProvider>
  );
}

export default App;
