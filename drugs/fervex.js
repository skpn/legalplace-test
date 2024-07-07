import {Drug} from "./drug";

export class Fervex extends Drug {
  getBenefitFactor(expiresIn) {
    if (expiresIn < 5) {
      return 3;
    }

    if (expiresIn < 10) {
      return 2;
    }

    return 1;
  }

  getDefaultBenefitDelta() {
    return 1;
  }

  isStrictlyExpired(expiresIn) {
    return expiresIn < 0;
  }

  getUpdatedBenefitValue(expiresIn, benefit) {
    if (this.isStrictlyExpired(expiresIn)) {
      return 0;
    }

    const benefitDelta = this.getBenefitDelta(expiresIn);

    return this.getNextBenefit(benefit, benefitDelta);
  }
}
