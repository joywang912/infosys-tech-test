import { isEqual } from "lodash";

/**
 * Create PIN with 4 digits use only [0-9]
 */
const getPin = () => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
};

/**
 * Validate PIN is unique in the list
 * @param pinNew
 * @param pinList
 */
export const valideUniquePin = (pinNew: Array<number>, pinList: number[][]) => {
  let valid: boolean = true;
  pinList.forEach((pin) => {
    if (isEqual(pin, pinNew)) {
      valid = false;
    }
  });
  return valid;
};

/**
 * Validate PIN does not have 2 consecutive same digits
 * @param pin
 */
export const validateNotTwoConsecutiveSame = (pin: Array<number>) => {
  let valid: boolean = true;
  pin.forEach((digit, idx) => {
    if (pin[idx + 1] === digit) {
      valid = false;
    }
  });
  return valid;
};

/**
 * Validate PIN does not contain 3 or more digits in sequence
 * @param pin
 */
export const validatePinNotInSequence = (pin: Array<number>) => {
  let valid: boolean = true;
  pin.forEach((digit, idx) => {
    if (pin[idx + 1] === digit + 1 && pin[idx + 2] === pin[idx + 1] + 1) {
      valid = false;
    } else if (
      pin[idx + 1] === digit - 1 &&
      pin[idx + 2] === pin[idx + 1] - 1
    ) {
      valid = false;
    }
  });
  return valid;
};

/**
 * Generate a list of 5 PINs
 */
export const getPinList = () => {
  let pinList: number[][] = [];
  Array.from({ length: 5 }, () => {
    let pinNew = getPin();
    while (
      !valideUniquePin(pinNew, pinList) ||
      !validateNotTwoConsecutiveSame(pinNew) ||
      !validatePinNotInSequence(pinNew)
    ) {
      pinNew = getPin();
    }
    return pinList.push(pinNew);
  });
  return pinList.map((el) => el.join(""));
};
