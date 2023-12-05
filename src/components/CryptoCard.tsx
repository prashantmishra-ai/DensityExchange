import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./CryptoCard.module.css";

const CryptoCard: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.groupParent}>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/vector-1176.svg" />
          <div className={styles.groupContainer}>
            <img
              className={styles.frameChild}
              alt=""
              src="/group-1000003828.svg"
            />
            <div className={styles.sell}>Sell</div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameChild}
              alt=""
              src="/group-1000003828.svg"
            />
            <div className={styles.sell}>Sell</div>
          </div>
          <div className={styles.groupParent1}>
            <img
              className={styles.frameInner}
              alt=""
              src="/group-1000003828.svg"
            />
            <div className={styles.sell}>Sell</div>
          </div>
          <div className={styles.groupParent2}>
            <img
              className={styles.frameChild}
              alt=""
              src="/group-1000003829.svg"
            />
            <div className={styles.sell}>Buy</div>
          </div>
          <div className={styles.groupParent3}>
            <img
              className={styles.frameChild}
              alt=""
              src="/group-1000003829.svg"
            />
            <div className={styles.sell}>Buy</div>
          </div>
        </div>
        <div className={styles.btcusdt}>BTCUSDT</div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector-1178.svg" />
      <div className={styles.groupParent4}>
        <div className={styles.vectorGroup}>
          <img className={styles.groupItem} alt="" src="/vector-1177.svg" />
          <div className={styles.groupParent5}>
            <img
              className={styles.frameChild}
              alt=""
              src="/group-1000003829.svg"
            />
            <div className={styles.sell}>Buy</div>
          </div>
          <div className={styles.groupParent6}>
            <img
              className={styles.frameChild3}
              alt=""
              src="/group-1000003828.svg"
            />
            <div className={styles.sell}>Sell</div>
          </div>
          <div className={styles.groupParent7}>
            <img
              className={styles.frameChild}
              alt=""
              src="/group-1000003828.svg"
            />
            <div className={styles.sell}>Sell</div>
          </div>
          <div className={styles.groupParent8}>
            <img
              className={styles.frameChild3}
              alt=""
              src="/group-1000003829.svg"
            />
            <div className={styles.sell}>Buy</div>
          </div>
          <div className={styles.groupParent9}>
            <img
              className={styles.frameChild}
              alt=""
              src="/group-1000003829.svg"
            />
            <div className={styles.sell}>Buy</div>
          </div>
        </div>
        <div className={styles.nifty}>nifty</div>
      </div>
    </div>
  );
};

export default CryptoCard;
