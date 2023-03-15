import { useState } from "react";
import Input from "../Input";
import { GrPowerCycle } from "react-icons/gr";

const ConverterForm = () => {
  // Define state variables to hold the values of NEP and BUSD
  const [nep, setNep] = useState<string | undefined>();
  const [busd, setBusd] = useState<string | undefined>();

  // Handle changes to the NEP input field and convert the value to BUSD
  const handleNepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nepValue = e.target.value;
    setNep(nepValue);
    setBusd((Number(nepValue) * 3).toFixed(2));
  };

  // Handle changes to the BUSD input field and convert the value to NEP
  const handleBusdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const busdValue = e.target.value;
    setBusd(busdValue);
    setNep((Number(busdValue) / 3).toFixed(2));
  };

  return (
    <>
      <h1 className="text-center text-2xl pb-5">Crypto Converter</h1>
      <Input
        label="NEP"
        placeholder="0.00"
        onChange={(e) => handleNepChange(e)}
        type="string"
        value={nep?.toString() ?? ""}
      />
      <div className="flex justify-center">
        <GrPowerCycle color="grey" size={20} />
      </div>
      <Input
        label="BUSD"
        placeholder="0.00"
        onChange={(e) => handleBusdChange(e)}
        type="string"
        value={busd?.toString() ?? ""}
      />
    </>
  );
};

export default ConverterForm;
