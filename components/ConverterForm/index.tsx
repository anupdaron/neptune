import { useState } from "react";
import Card from "../Card";
import Input from "../Input";
import { GrPowerCycle } from "react-icons/gr";

type Props = {};

const ConverterForm = (props: Props) => {
  const [nep, setNep] = useState<string | undefined>();
  const [busd, setBusd] = useState<string | undefined>();

  const handleNepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nepValue = e.target.value;
    setNep(e.target.value);
    setBusd((Number(nepValue) * 3).toFixed(2));
  };

  const handleBusdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const busdValue = e.target.value;
    setBusd(e.target.value);
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
