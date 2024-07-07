import {Drug} from "./drug";

export class Dafalgan extends Drug {
  getBenefitDelta(expiresIn) {
    const defaultDelta = this.getDefaultBenefitDelta();
    const factor = this.getBenefitFactor(expiresIn);

    return factor * defaultDelta * 2;
  }
}
