import {Fervex} from "./fervex";

describe("Fervex", () => {
  it.each([
    {expiresIn: 11, benefit: 0, expected: 1},
    {expiresIn: 10, benefit: 0, expected: 1},
    {expiresIn: 9, benefit: 0, expected: 2},
    {expiresIn: 5, benefit: 0, expected: 2},
    {expiresIn: 4, benefit: 0, expected: 3},
    {expiresIn: 0, benefit: 0, expected: 3},
  ])(
    "should increase benefit by $expected for expiresIn $expiresIn",
    ({expiresIn, benefit, expected}) => {
      expect(new Fervex().getUpdatedBenefitValue(expiresIn, benefit)).toEqual(
        expected
      );
    }
  );

  it("should strictly expire", () => {
    const expiresIn = -1;
    const benefit = 50;
    const expected = 0;
    expect(new Fervex().getUpdatedBenefitValue(expiresIn, benefit)).toEqual(
      expected
    );
  });
});
