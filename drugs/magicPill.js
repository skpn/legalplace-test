import {Drug} from "./drug";

export class MagicPill extends Drug {
  getDefaultBenefitDelta() {
    return 0;
  }

  getExpiresInDelta() {
    return 0;
  }
}
