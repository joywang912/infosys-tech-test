import React from "react";
import Input from "../components/Input";
import { DangerButton } from "../components/Button";

const PinDisplayPage = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Input readOnly size={4} />
        </div>
        <div className="col">
          <DangerButton>Delete</DangerButton>
        </div>
      </div>
    </div>
  );
};

export default PinDisplayPage;
