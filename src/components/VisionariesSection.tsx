import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./VisionariesSection.module.css";

const VisionariesSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.meetTheVisionariesBehindDeParent}>
          <b className={styles.meetTheVisionariesContainer}>
            <span>{`Meet the `}</span>
            <span className={styles.visionaries}>Visionaries</span>
            <span> behind Density.</span>
          </b>
          <div className={styles.noComplexityOf}>
            No Complexity of Trading Fee, generate volume and win
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon} alt="" src="/frame5.svg" />
          <b className={styles.aakashNeerajMittal}>Aakash Neeraj Mittal</b>
          <div className={styles.ceoDensity}>CEO, Density</div>
          <img className={styles.textureIcon} alt="" src="/texture7@2x.png" />
          <img className={styles.image95Icon} alt="" src="/image-95@2x.png" />
          <img
            className={styles.uillinkedinIcon}
            alt=""
            src="/uillinkedin.svg"
          />
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon} alt="" src="/frame5.svg" />
          <b className={styles.aakashNeerajMittal}>
            <p className={styles.bhupendra}>{`Bhupendra `}</p>
            <p className={styles.bhupendra}>Bule</p>
          </b>
          <div className={styles.ceoDensity}>CTO, Density</div>
          <img className={styles.textureIcon} alt="" src="/texture7@2x.png" />
          <img className={styles.image94Icon} alt="" src="/image-94@2x.png" />
          <img
            className={styles.uillinkedinIcon}
            alt=""
            src="/uillinkedin.svg"
          />
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon} alt="" src="/frame5.svg" />
          <b className={styles.aakashNeerajMittal}>
            <p className={styles.bhupendra}>Deepak</p>
            <p className={styles.bhupendra}>Vasman</p>
          </b>
          <div className={styles.ceoDensity}>CBO, Density</div>
          <img className={styles.textureIcon} alt="" src="/texture7@2x.png" />
          <img className={styles.image96Icon} alt="" src="/image-96@2x.png" />
          <img
            className={styles.uillinkedinIcon}
            alt=""
            src="/uillinkedin.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionariesSection;
