export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  getBenefitFactor(expiresIn) {
    return expiresIn < 0 ? 2 : 1;
  }

  getDefaultBenefitDelta() {
    return -1;
  }

  getBenefitDelta(expiresIn) {
    const defaultDelta = this.getDefaultBenefitDelta();
    const factor = this.getBenefitFactor(expiresIn);

    return factor * defaultDelta;
  }

  getNextBenefit(benefit, delta) {
    const nextBenefit = benefit + delta;
    if (nextBenefit < 0) {
      return 0;
    }
    if (nextBenefit > 50) {
      return 50;
    }
    return nextBenefit;
  }

  getUpdatedBenefitValue(expiresIn, benefit) {
    const benefitDelta = this.getBenefitDelta(expiresIn);

    return this.getNextBenefit(benefit, benefitDelta);
  }

  getExpiresInDelta() {
    return -1;
  }

  getNextExpiresIn(expiresIn, delta) {
    return expiresIn + delta;
  }

  getUpdatedExpiresInValue(expiresIn) {
    const expiresInDelta = this.getExpiresInDelta();

    return this.getNextExpiresIn(expiresIn, expiresInDelta);
  }

  updateValues() {
    this.expiresIn = this.getUpdatedExpiresInValue(this.expiresIn);
    this.benefit = this.getUpdatedBenefitValue(this.expiresIn, this.benefit);
  }
}
