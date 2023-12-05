import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./DynamicComponent.module.css";

const DynamicComponent: FunctionComponent = () => {
  return (
    <div className={styles.landingPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.mnParent}>
          <b className={styles.b}>00%</b>
          <div className={styles.conversionFee}>{`Conversion Fee `}</div>
        </div>
        <img className={styles.frameChild} alt="" src="/vector-1.svg" />
        <div className={styles.mnParent}>
          <b className={styles.b}>500 Mn+</b>
          <div className={styles.conversionFee}>Lifetime Volume Traded</div>
        </div>
        <img className={styles.frameChild} alt="" src="/vector-2.svg" />
        <div className={styles.mnParent}>
          <b className={styles.b}>250+</b>
          <div className={styles.conversionFee}>Total Tradable Pairs</div>
        </div>
        <img className={styles.frameChild} alt="" src="/vector-1.svg" />
        <div className={styles.mnParent}>
          <b className={styles.b}>15,000+</b>
          <div className={styles.conversionFee}>Traders</div>
        </div>
      </div>
    </div>
  );
};

export default DynamicComponent;
