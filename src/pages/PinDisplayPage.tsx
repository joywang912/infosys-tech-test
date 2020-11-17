import React from "react";
import Input from "../components/Input";
import { DangerButton } from "../components/Button";

const PinDisplayPage = () => {
  return (
    <div>
      <Input readOnly size={4} />
      <DangerButton>Delete</DangerButton>
    </div>
  );
};

export default PinDisplayPage;
