import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.topNav}>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <div className={styles.frameParent}>
        <div className={styles.careerParent}>
          <div className={styles.career}>Career</div>
          <div className={styles.career}>Blogs</div>
          <div className={styles.career}>Leaderboard</div>
          <div className={styles.career}>Fees</div>
        </div>
        <div className={styles.tradeNowWrapper}>
          <b className={styles.tradeNow}>Trade Now</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
