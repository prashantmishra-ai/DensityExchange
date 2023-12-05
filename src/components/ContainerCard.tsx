import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./ContainerCard.module.css";

const ContainerCard: FunctionComponent = () => {
  return (
    <div className={styles.vectorParent}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.groupInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.groupChild1} />
      <div className={styles.groupChild2} />
      <div className={styles.groupChild3} />
      <div className={styles.isNowHereForYouParent}>
        <div className={styles.isNowHereContainer}>
          <p className={styles.isNowHere}>{`Is now here, `}</p>
          <p className={styles.isNowHere}>for you.</p>
        </div>
        <img className={styles.groupIcon} alt="" src="/group-626832.svg" />
      </div>
    </div>
  );
};

export default ContainerCard;
