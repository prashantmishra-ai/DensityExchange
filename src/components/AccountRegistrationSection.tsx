import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./AccountRegistrationSection.module.css";

type AccountRegistrationSectionType = {
  imageDimensions?: string;
  imageDimensionsText?: string;
  ctaButtonText?: string;
  ctaText?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const AccountRegistrationSection: FunctionComponent<
  AccountRegistrationSectionType
> = ({
  imageDimensions,
  imageDimensionsText,
  ctaButtonText,
  ctaText,
  propWidth,
  propWidth1,
  propHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  return (
    <div className={styles.groupParent} style={frameDivStyle}>
      <img className={styles.frameChild} alt="" src={imageDimensions} />
      <div className={styles.groupContainer}>
        <img
          className={styles.frameItem}
          alt=""
          src={imageDimensionsText}
          style={groupIconStyle}
        />
        <div className={styles.frameParent}>
          <div className={styles.createAnAccountParent}>
            <div className={styles.createAnAccount}>{ctaButtonText}</div>
            <div className={styles.registerComplete}>{ctaText}</div>
          </div>
          <div className={styles.tradeNowWrapper}>
            <b className={styles.tradeNow}>Trade Now</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountRegistrationSection;
