import {Dafalgan} from "./dafalgan";
import {Drug} from "./drug";

describe("Fervex", () => {
  it.each([1, 0, -1])(
    "should decrease benefit by twice as much as a classic drug",
    (expiresIn) => {
      const otherDrugDefaultBenefitDelta = new Drug().getBenefitDelta(
        expiresIn
      );
      const expected = otherDrugDefaultBenefitDelta * 2;
      expect(new Dafalgan().getBenefitDelta(expiresIn)).toEqual(expected);
    }
  );
});
