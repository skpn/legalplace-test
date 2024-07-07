import {Drug} from "./drug";

describe("Drug", () => {
  it.each([
    {expiresIn: 1, expected: 0},
    {expiresIn: 0, expected: -1},
    {expiresIn: -1, expected: -2},
  ])("should decrease expiresIn by 1", ({expiresIn, expected}) => {
    expect(new Drug().getUpdatedExpiresInValue(expiresIn)).toEqual(expected);
  });

  it.each([
    {expiresIn: 2, benefit: 2, expected: 1},
    {expiresIn: 0, benefit: 2, expected: 1},
  ])("should decrease benefit by 1", ({expiresIn, benefit, expected}) => {
    expect(new Drug().getUpdatedBenefitValue(expiresIn, benefit)).toEqual(
      expected
    );
  });

  it("should decrease benefit by 2 after expiry date", () => {
    const expiresIn = -1;
    const benefit = 2;
    const expected = 0;
    expect(new Drug().getUpdatedBenefitValue(expiresIn, benefit)).toEqual(
      expected
    );
  });

  it.each([
    {expiresIn: 1, benefit: 0, expected: 0},
    {expiresIn: -1, benefit: 1, expected: 0},
  ])(
    "should not decrease benefit beneath 0",
    ({expiresIn, benefit, expected}) => {
      expect(new Drug().getUpdatedBenefitValue(expiresIn, benefit)).toEqual(
        expected
      );
    }
  );
});
