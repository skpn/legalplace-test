import {HerbalTea} from "./herbalTea";

describe("HerbalTea", () => {
  it.each([
    {expiresIn: 2, benefit: 0, expected: 1},
    {expiresIn: 0, benefit: 0, expected: 1},
  ])("should increase benefit by 1", ({expiresIn, benefit, expected}) => {
    expect(new HerbalTea().getUpdatedBenefitValue(expiresIn, benefit)).toEqual(
      expected
    );
  });

  it.each([{expiresIn: -1, benefit: 0, expected: 2}])(
    "should increase benefit by 2 after expiry date",
    ({expiresIn, benefit, expected}) => {
      expect(
        new HerbalTea().getUpdatedBenefitValue(expiresIn, benefit)
      ).toEqual(expected);
    }
  );

  it.each([
    {expiresIn: 1, benefit: 50, expected: 50},
    {expiresIn: -1, benefit: 49, expected: 50},
  ])(
    "should not increase benefit above 50",
    ({expiresIn, benefit, expected}) => {
      expect(
        new HerbalTea().getUpdatedBenefitValue(expiresIn, benefit)
      ).toEqual(expected);
    }
  );
});
