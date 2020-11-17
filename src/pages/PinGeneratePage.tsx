import React, { useState } from "react";
import Input from "../components/Input";
import { Button, PrimaryButton } from "../components/Button";
import { getPinList } from "../utils/PinGenerator";

const PinGeneratePage = () => {
  const [pins, setPins] = useState<number[][]>([[], [], [], [], []]);

  const generatePins = () => {
    const newPins = getPinList();
    setPins(newPins);
  };
  return (
    <div>
      <div className="align-center">
        {pins.map((pin, idx) => {
          return <Input key={idx} readOnly size={4} value={pin.join("")} />;
        })}
      </div>
      <div className="row">
        <div className="col">
          <Button onClick={() => generatePins()}>Generate</Button>
        </div>
        <div className="col">
          <PrimaryButton>Save</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default PinGeneratePage;
