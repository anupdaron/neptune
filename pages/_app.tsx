import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Import required packages from Web3 React and Ethers.js
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

// Function to create a Web3Provider object from a provider
function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default function App({ Component, pageProps }: AppProps) {
  // Wrap app in Web3ReactProvider and pass in getLibrary function
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
