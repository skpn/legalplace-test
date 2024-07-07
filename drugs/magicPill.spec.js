import {MagicPill} from "./magicPill";

describe("MagicPill", () => {
  it.each([
    {expiresIn: 1, expected: 1},
    {expiresIn: 0, expected: 0},
    {expiresIn: -1, expected: -1},
  ])("should should not modify expiresIn", ({expiresIn, expected}) => {
    expect(new MagicPill().getUpdatedExpiresInValue(expiresIn)).toEqual(
      expected
    );
  });

  it.each([
    {expiresIn: 1, benefit: 1, expected: 1},
    {expiresIn: 0, benefit: 1, expected: 1},
    {expiresIn: -1, benefit: 1, expected: 1},
  ])("should not modify benefit", ({expiresIn, benefit, expected}) => {
    expect(new MagicPill().getUpdatedBenefitValue(expiresIn, benefit)).toEqual(
      expected
    );
  });
});
