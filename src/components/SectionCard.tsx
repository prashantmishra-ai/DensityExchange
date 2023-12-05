import * as React from "react";
import { FunctionComponent } from "react";
import AccountRegistrationSection from "./AccountRegistrationSection";
import * as styles from "./SectionCard.module.css";

const SectionCard: FunctionComponent = () => {
  return (
    <div className={styles.derivatesMadeSimpleIn3EasParent}>
      <b className={styles.derivatesMadeSimpleContainer}>
        <p className={styles.derivatesMadeSimple}>Derivates made simple</p>
        <p className={styles.derivatesMadeSimple}>
          <span>{`in `}</span>
          <span className={styles.easy}>3 Easy</span>
          <span className={styles.steps}> Steps</span>
        </p>
      </b>
      <div className={styles.frameParent}>
        <AccountRegistrationSection
          imageDimensions="/group-626793.svg"
          imageDimensionsText="/group-1000003801.svg"
          ctaButtonText="Create an Account"
          ctaText={`Register & Complete your Verification in less than 2 minutes`}
        />
        <img className={styles.frameChild} alt="" src="/vector-5.svg" />
        <AccountRegistrationSection
          imageDimensions="/group-626794.svg"
          imageDimensionsText="/group-626789.svg"
          ctaButtonText="Deposit Funds"
          ctaText="Add funds quickly using a variety of payment methods"
          propWidth="1446px"
          propWidth1="107.1px"
          propHeight="100px"
        />
        <img className={styles.frameChild} alt="" src="/vector-6.svg" />
        <AccountRegistrationSection
          imageDimensions="/group-6267941.svg"
          imageDimensionsText="/group-1000003802.svg"
          ctaButtonText="Become a Trader"
          ctaText={`Choose Your Trading Pair & Trade Seamlessly`}
          propWidth="1442px"
          propWidth1="115.8px"
          propHeight="120px"
        />
      </div>
    </div>
  );
};

export default SectionCard;
