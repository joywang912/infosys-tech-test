import React from "react";
import Input from "../components/Input";
import { DangerButton } from "../components/Button";
import { connect } from "react-redux";
import { deletePinList, savePinName } from "../actions";

interface Props {
  pinsCollection: { name: string; pinList: Array<string> }[];
  deletePinList: (pinList: Array<string>) => void;
  savePinName: (name: string, pinList: Array<string>) => void;
}
const PinDisplayPage = (props: Props) => {
  const onDelete = (pinList: Array<string>) => {
    props.deletePinList(pinList);
  };

  if (!props.pinsCollection || !props.pinsCollection.length) {
    return <div>There's no saved PINs</div>;
  }

  return (
    <div>
      {props.pinsCollection.map((pinObj, idx) => {
        return (
          <div key={idx} className="row">
            <div className="col">
              <Input
                value={pinObj.name}
                onChange={(e) =>
                  props.savePinName(e.target.value, pinObj.pinList)
                }
              />
            </div>
            {pinObj.pinList.map((pin) => {
              return (
                <div key={pin} className="col">
                  <Input readOnly size={4} value={pin} />
                </div>
              );
            })}

            <div className="col">
              <DangerButton onClick={() => onDelete(pinObj.pinList)}>
                Delete
              </DangerButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: { name: string; pinList: Array<string> }[]) => {
  return {
    pinsCollection: state,
  };
};

export default connect(mapStateToProps, { deletePinList, savePinName })(
  PinDisplayPage
);
