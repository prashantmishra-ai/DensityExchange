import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./TradeTogetherSection.module.css";

const TradeTogetherSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.tradeTogetherThriveTogetheParent}>
          <b className={styles.tradeTogetherThriveContainer}>
            <span>{`Trade Together. `}</span>
            <span className={styles.thriveTogether}>Thrive Together.</span>
          </b>
          <div className={styles.joinTheFunFilled}>
            Join the fun-filled community on our platform.
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.mnParent}>
          <b className={styles.b}>10,000+</b>
          <div className={styles.traders}>Traders</div>
        </div>
        <img className={styles.frameChild} alt="" src="/vector-11.svg" />
        <div className={styles.mnParent}>
          <b className={styles.b}>100Mn</b>
          <div className={styles.traders}>Daily Volume Traded</div>
        </div>
        <img className={styles.frameChild} alt="" src="/vector-11.svg" />
        <div className={styles.mnParent}>
          <b className={styles.b}>Daily</b>
          <div className={styles.traders}>Trade Analysis</div>
        </div>
        <img className={styles.frameChild} alt="" src="/vector-11.svg" />
        <div className={styles.mnParent}>
          <b className={styles.b}>Live</b>
          <div className={styles.traders}>Signals</div>
        </div>
      </div>
      <div className={styles.joinCommunityWrapper}>
        <b className={styles.joinCommunity}>Join community</b>
      </div>
    </div>
  );
};

export default TradeTogetherSection;
