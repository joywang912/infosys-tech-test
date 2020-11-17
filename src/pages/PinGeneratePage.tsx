import React from "react";
import Input from "../components/Input";
import { Button, PrimaryButton } from "../components/Button";

const PinGeneratePage = () => {
  return (
    <div>
      <div>
        <Input readOnly size={4} />
      </div>
      <Button>Generate</Button>
      <PrimaryButton>Save</PrimaryButton>
    </div>
  );
};

export default PinGeneratePage;
