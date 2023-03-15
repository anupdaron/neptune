import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ConverterForm from "@/components/ConverterForm";
import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@/lib/connector";
import { formatEther } from "@ethersproject/units";

import Modal from "@/components/Modal";
import { Web3Provider } from "@ethersproject/providers";
import AccountInfo from "@/components/AccountInfo";
import Image from "next/image";

type Props = {};

const Home = (props: Props) => {
  const context = useWeb3React<Web3Provider>();
  const [balance, setBalance] = useState<string | null>(null);
  const { account, library, chainId, activate, deactivate } = context;
  const [open, setOpen] = useState(false);

  const getBalance = async () => {
    if (library && account) {
      console.log(account);

      const balance = await library.getBalance(account);
      return formatEther(balance);
    }
    return null;
  };
  useEffect(() => {
    const handleAccount = async () => {
      const balance = await getBalance();
      setBalance(balance);
    };
    handleAccount();
  }, [account]);

  const handleConnect = () => {
    activate(injected);
  };

  const handleDisconnect = () => {
    deactivate();
  };

  const handleWalletModal = async () => {
    setOpen(true);
  };
  return (
    <div className="flex flex-col gap-20 justify-center items-center h-screen">
      {open && (
        <Modal handleClose={() => setOpen(false)} header="Wallet Details">
          {account && chainId ? (
            <>
              <AccountInfo
                account={account}
                balance={balance}
                chainId={chainId}
              />
              <Button variant="danger" onClick={handleDisconnect}>
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
      <div>
        <Image
          src={"/logo/neptune-mutual-inverse-full.svg"}
          width={300}
          height={100}
          alt={"Neptune Mutual Logo"}
        />
      </div>
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
