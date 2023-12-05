import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./SectionForm.module.css";

const SectionForm: FunctionComponent = () => {
  return (
    <div className={styles.landingPageInner}>
      <div className={styles.getStartedNowParent}>
        <b className={styles.getStartedNow}>Get started now.</b>
        <img className={styles.groupChild} alt="" src="/group-1000003804.svg" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.cta}>
            <b className={styles.startTrading}>Start Trading!</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
