export const savePinList = (pinList: Array<string>) => ({
  type: "SAVE",
  pinList,
});

export const deletePinList = (pinList: Array<string>) => ({
  type: "DELETE",
  pinList,
});

export const savePinName = (name: string, pinList: Array<string>) => ({
  type: "SAVE_NAME",
  name,
  pinList,
});
