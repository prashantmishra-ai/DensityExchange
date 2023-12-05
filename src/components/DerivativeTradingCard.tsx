import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./DerivativeTradingCard.module.css";

const DerivativeTradingCard: FunctionComponent = () => {
  return (
    <div className={styles.vectorParent}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.groupParent}>
        <img className={styles.groupInner} alt="" src="/group-18145968.svg" />
        <div className={styles.futureOfDerivativeContainer}>
          <p className={styles.futureOf}>{`Future of `}</p>
          <p className={styles.futureOf}>{`Derivative `}</p>
          <p className={styles.futureOf}>Trading.</p>
        </div>
      </div>
    </div>
  );
};

export default DerivativeTradingCard;
