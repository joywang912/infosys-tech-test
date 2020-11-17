import React, { useState } from "react";
import Input from "../components/Input";
import { Button, PrimaryButton } from "../components/Button";
import { getPinList } from "../utils/PinGenerator";
import { connect } from "react-redux";
import { savePinList } from "../actions";

interface Props {
  savePinList: (pins: Array<string>) => void;
}

const PinGeneratePage = (props: Props) => {
  const [pins, setPins] = useState<Array<string>>(["", "", "", "", ""]);

  const onGenerate = () => {
    const newPins = getPinList();
    setPins(newPins);
  };

  const onSave = () => {
    props.savePinList(pins);
  };
  return (
    <div>
      <div className="align-center">
        {pins.map((pin, idx) => {
          return <Input key={idx} readOnly size={4} value={pin} />;
        })}
      </div>
      <div className="row">
        <div className="col">
          <Button onClick={onGenerate}>Generate</Button>
        </div>
        <div className="col">
          <PrimaryButton onClick={onSave}>Save</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { savePinList })(PinGeneratePage);
