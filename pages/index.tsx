import Button from "@/components/Button";
import Card from "@/components/Card";
import ConverterForm from "@/components/ConverterForm";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <ConverterForm />
        <div className="text-center">
          <Button transparent>Check wallet details</Button>
        </div>
      </Card>
    </div>
  );
};

export default Home;
