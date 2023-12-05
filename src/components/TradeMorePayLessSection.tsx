import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./TradeMorePayLessSection.module.css";

const TradeMorePayLessSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.tradeMorePayLessParent}>
        <b className={styles.tradeMorePayContainer}>
          <span>{`Trade More. `}</span>
          <span className={styles.payLess}>Pay Less.</span>
        </b>
        <div className={styles.ourLowFees}>
          Our low Fees Supercharge Your Profits
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon} alt="" src="/frame1.svg" />
          <div className={styles.parent1}>
            <b className={styles.b}>0.07</b>
            <div className={styles.takerFees}>Taker Fees</div>
          </div>
          <div className={styles.parent2}>
            <b className={styles.b}>0.025</b>
            <div className={styles.takerFees}>Maker Fees</div>
          </div>
          <img className={styles.image92Icon} alt="" src="/image-92@2x.png" />
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
          <div className={styles.parent3}>
            <b className={styles.b}>0.04</b>
            <div className={styles.takerFees1}>Taker Fees</div>
          </div>
          <div className={styles.parent4}>
            <b className={styles.b}>0.02</b>
            <div className={styles.takerFees1}>Maker Fees</div>
          </div>
          <div className={styles.frameWrapper}>
            <img className={styles.frameIcon2} alt="" src="/frame3.svg" />
          </div>
          <img className={styles.textureIcon} alt="" src="/texture@2x.png" />
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon} alt="" src="/frame1.svg" />
          <div className={styles.parent1}>
            <b className={styles.b}>0.05</b>
            <div className={styles.takerFees}>Taker Fees</div>
          </div>
          <div className={styles.parent2}>
            <b className={styles.b}>0.02</b>
            <div className={styles.takerFees}>Maker Fees</div>
          </div>
          <img className={styles.image93Icon} alt="" src="/image-93@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default TradeMorePayLessSection;
