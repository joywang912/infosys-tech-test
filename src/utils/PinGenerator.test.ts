import {
  valideUniquePin,
  validateNotTwoConsecutiveSame,
  validatePinNotInSequence,
  getPinList,
} from "./PinGenerator";

it("test length of pin list", () => {
  expect(getPinList()).toHaveLength(5);
  expect(getPinList()[0]).toHaveLength(4);
  expect(getPinList()[4]).toHaveLength(4);
});

it("validate pin is unique in the list", () => {
  expect(
    valideUniquePin(
      [1, 2, 3, 4],
      [
        [4, 3, 2, 1],
        [1, 2, 3, 4],
      ]
    )
  ).toEqual(false);
});

it("validate pin without 2 consecutive same digits", () => {
  expect(validateNotTwoConsecutiveSame([1, 1, 3, 5])).toEqual(false);
  expect(validateNotTwoConsecutiveSame([3, 5, 3, 5])).toEqual(true);
  expect(validateNotTwoConsecutiveSame([3, 5, 1, 1])).toEqual(false);
});

it("validate pin without 3 consecutive digits in sequence", () => {
  expect(validatePinNotInSequence([1, 2, 3, 5])).toEqual(false);
  expect(validatePinNotInSequence([1, 3, 3, 5])).toEqual(true);
  expect(validatePinNotInSequence([5, 3, 2, 1])).toEqual(false);
});
