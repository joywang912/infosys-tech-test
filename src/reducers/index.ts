import { isEqual, find, filter } from "lodash";

const reducer = (
  state: { name: string; pinList: Array<string> }[] = [],
  action: { type: string; pinList: Array<string>; name: string }
) => {
  switch (action.type) {
    case "SAVE":
      if (find(state, (pinObj) => isEqual(pinObj.pinList, action.pinList)))
        return state;
      return [...state, { name: "", pinList: action.pinList }];
    case "DELETE":
      return filter(
        state,
        (pinObj) => !isEqual(pinObj.pinList, action.pinList)
      );
    case "SAVE_NAME":
      return state.map((pinObj) => {
        if (isEqual(pinObj.pinList, action.pinList)) {
          return { name: action.name, pinList: pinObj.pinList };
        }
        return pinObj;
      });
    default:
      return state;
  }
};

export default reducer;
