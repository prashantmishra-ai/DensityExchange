import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./SectionCardForm.module.css";

const SectionCardForm: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.startSmallEarnBigParent}>
        <b className={styles.startSmallEarn}>Start Small. Earn Big.</b>
        <div className={styles.deposityAMinimum}>
          Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
          relationship manager
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <img className={styles.icon} alt="" src="/25-2.svg" />
          <div className={styles.depositBonusParent}>
            <b className={styles.depositBonus}>
              <p className={styles.deposit}>Deposit</p>
              <p className={styles.deposit}>Bonus.</p>
            </b>
            <div className={styles.ourAssetsLiquidity}>
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </div>
          </div>
          <img className={styles.textureIcon} alt="" src="/texture3@2x.png" />
          <img className={styles.frameIcon} alt="" src="/frame4.svg" />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.dedicatedRelationshipManagerParent}>
            <b className={styles.dedicatedRelationshipManagerContainer}>
              <p className={styles.deposit}>Dedicated</p>
              <p className={styles.deposit}>Relationship Manager.</p>
            </b>
            <div className={styles.ourAssetsLiquidity}>
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </div>
          </div>
          <img className={styles.manager1Icon} alt="" src="/manager-1.svg" />
          <img className={styles.textureIcon1} alt="" src="/texture4@2x.png" />
          <img className={styles.frameIcon} alt="" src="/frame4.svg" />
        </div>
      </div>
    </div>
  );
};

export default SectionCardForm;
