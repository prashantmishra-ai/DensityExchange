import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./EarnMoneySection.module.css";

const EarnMoneySection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-1000003819.svg" />
        <div className={styles.earnMoneyTheEasyWayParent}>
          <b className={styles.earnMoneyTheContainer}>
            <span>{`Earn Money. `}</span>
            <span className={styles.theEasyWay}>The Easy Way.</span>
          </b>
          <div className={styles.noComplexityOf}>
            No Complexity of Trading Fee, generate volume and win
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon} alt="" src="/frame5.svg" />
          <b className={styles.shareYourYour}>Share your your referral link</b>
          <img className={styles.frameItem} alt="" src="/group-626834.svg" />
          <img className={styles.textureIcon} alt="" src="/texture6@2x.png" />
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon} alt="" src="/frame5.svg" />
          <b className={styles.inviteFriendsTo}>
            Invite Friends to Trade on Density
          </b>
          <img
            className={styles.frameInner}
            alt=""
            src="/group-1000003822.svg"
          />
          <img className={styles.textureIcon} alt="" src="/texture6@2x.png" />
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon} alt="" src="/frame5.svg" />
          <b className={styles.shareYourYour}>
            <p className={styles.trade}>{`Trade `}</p>
            <p className={styles.trade}>and Earn</p>
          </b>
          <img className={styles.groupIcon} alt="" src="/group-181459681.svg" />
          <img className={styles.textureIcon} alt="" src="/texture6@2x.png" />
        </div>
      </div>
      <div className={styles.startEarningNowWrapper}>
        <b className={styles.startEarningNow}>start earning now</b>
      </div>
    </div>
  );
};

export default EarnMoneySection;
