import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./TradeHeroContainer.module.css";

const TradeHeroContainer: FunctionComponent = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.groupParent}>
        <div className={styles.itsTimeToTradeTheFutureParent}>
          <b className={styles.itsTimeToContainer}>
            <p className={styles.itsTimeTo}>It’s time to trade,</p>
            <p className={styles.itsTimeTo}>
              <span>{`the `}</span>
              <span className={styles.future}>future.</span>
            </p>
          </b>
          <b className={styles.future1}>future.</b>
        </div>
        <div className={styles.derivatesMadeSimple}>Derivates made simple!</div>
        <div className={styles.tradeBtcEth}>
          Trade BTC, ETH Futures with 125x leverage and earn rewards.
        </div>
      </div>
      <div className={styles.iphone14ProSpaceBlackMockParent}>
        <div className={styles.iphone14ProSpaceBlackMock}>
          <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
          <img className={styles.mainIcon} alt="" src="/main@2x.png" />
          <img
            className={styles.iphone14ProSpaceBlackMock1}
            alt=""
            src="/iphone-14-pro-space-black-mockup-label@2x.png"
          />
        </div>
        <div className={styles.iphone14ProSpaceBlackMock2}>
          <img className={styles.shadowIcon1} alt="" src="/shadow1@2x.png" />
          <img className={styles.mainIcon1} alt="" src="/main1@2x.png" />
          <img
            className={styles.iphone14ProSpaceBlackMock3}
            alt=""
            src="/iphone-14-pro-space-black-mockup-label1@2x.png"
          />
        </div>
        <div className={styles.iphone14ProSpaceBlackMock4}>
          <img className={styles.shadowIcon2} alt="" src="/shadow2@2x.png" />
          <img className={styles.mainIcon2} alt="" src="/main2@2x.png" />
          <img
            className={styles.iphone14ProSpaceBlackMock5}
            alt=""
            src="/iphone-14-pro-space-black-mockup-label2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TradeHeroContainer;
