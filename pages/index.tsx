// Importing necessary dependencies and components
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ConverterForm from "@/components/ConverterForm";
import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@/lib/connector";
import { formatEther } from "@ethersproject/units";
import { censorAddress } from "@/lib/censorAddress";
import Modal from "@/components/Modal";
import { Web3Provider } from "@ethersproject/providers";
import AccountInfo from "@/components/AccountInfo";
import Image from "next/image";

// Defining the Home component
const Home = () => {
  // Getting context from Web3React
  const context = useWeb3React<Web3Provider>();

  // Setting initial state for balance and wallet modal
  const [balance, setBalance] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Extracting account, library and chainId from context
  const { account, library, chainId, activate, deactivate } = context;

  // Function to get balance for the connected account
  const getBalance = async () => {
    if (library && account) {
      const balance = await library.getBalance(account);
      return formatEther(balance);
    }
    return null;
  };

  // useEffect to fetch account balance whenever account changes
  useEffect(() => {
    const handleAccount = async () => {
      const balance = await getBalance();
      setBalance(balance);
    };
    handleAccount();
  }, [account]);

  // Function to handle connect wallet button click
  const handleConnect = () => {
    activate(injected);
  };

  // Function to handle disconnect wallet button click
  const handleDisconnect = () => {
    deactivate();
  };

  // Function to handle wallet modal
  const handleWalletModal = async () => {
    setOpen(true);
  };

  return (
    // Home page layout
    <div className="flex flex-col gap-20 justify-center items-center h-screen">
      {/* Wallet modal */}
      {open && (
        <Modal handleClose={() => setOpen(false)} header="Wallet Details">
          {account && chainId ? (
            <>
              <AccountInfo
                account={censorAddress(account)}
                balance={balance}
                chainId={chainId}
              />
              <Button variant="danger" full onClick={handleDisconnect}>
                Disconnect Wallet
              </Button>
            </>
          ) : (
            <div className="py-6">
              <h3 className="mb-10">
                You are not connected to your wallet. Please connect to view
                your details.
              </h3>
              <div className="flex gap-5">
                <Button full onClick={handleConnect}>
                  connect
                </Button>
                <Button full variant="danger" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </Modal>
      )}

      {/* Logo */}
      <div>
        <Image
          src={"/logo/neptune-mutual-inverse-full.svg"}
          width={300}
          height={100}
          alt={"Neptune Mutual Logo"}
        />
      </div>

      {/* Card component containing converter form and check wallet details button */}
      <Card>
        <ConverterForm />
        <div className="text-center">
          <Button onClick={() => handleWalletModal()}>
            Check wallet details
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Home;
