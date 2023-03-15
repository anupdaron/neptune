import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ConverterForm from "@/components/ConverterForm";
import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@/lib/connector";
import { ethers } from "ethers";
import Modal from "@/components/Modal";

type Props = {};

const Home = (props: Props) => {
  const { account, library, chainId } = useWeb3React();
  const [open, setOpen] = useState(false);

  const getBalance = async () => {
    if (library && account) {
      console.log(account);

      const balance = await library.getBalance(account);
      return ethers.formatEther(balance);
    }
    return null;
  };

  const handleConnect = () => {
    injected.activate();
    console.log(account, library, chainId);
  };

  const handleDisconnect = () => {
    injected.deactivate();
  };

  const handleWalletConnect = async () => {
    setOpen(true);
    console.log(open);
    const balance = await getBalance();
    console.log(account, library, chainId);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {open && (
        <Modal handleClose={() => setOpen(false)} header="Wallet Details">
          {}
          <button onClick={handleConnect}>connect</button>
        </Modal>
      )}

      <Card>
        <ConverterForm />
        <div className="text-center">
          <Button onClick={() => handleWalletConnect()} transparent>
            Check wallet details
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Home;
