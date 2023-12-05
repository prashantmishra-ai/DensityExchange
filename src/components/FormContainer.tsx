import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./FormContainer.module.css";

const FormContainer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.footerChild} alt="" src="/group-626657.svg" />
      <div className={styles.groupParent}>
        <div className={styles.feesParent}>
          <div className={styles.fees}>Fees</div>
          <div className={styles.blog}>Blog</div>
          <div className={styles.leaderboard}>Leaderboard</div>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.careers}>Careers</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
        <div
          className={styles.lremIpsumOd}
        >{`Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. `}</div>
      </div>
      <img className={styles.footerItem} alt="" src="/group-2007.svg" />
    </div>
  );
};

export default FormContainer;
