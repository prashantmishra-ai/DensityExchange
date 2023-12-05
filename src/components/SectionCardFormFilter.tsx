import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./SectionCardFormFilter.module.css";

const SectionCardFormFilter: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.dontTakeOurWordForItParent}>
        <b className={styles.dontTakeOur}>Don’t take our word for it.</b>
        <div className={styles.hearItFrom}>
          Hear it from our expert community of traders who have made insane
          amounts in a short amount of time
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.asSomeoneWhosAlwaysLookinParent}>
          <div className={styles.asSomeoneWhos}>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density’s crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </div>
          <b className={styles.prakashJamatia}>
            <p className={styles.prakash}>Prakash</p>
            <p className={styles.prakash}>Jamatia.</p>
          </b>
          <div className={styles.founderTradeshala}>Founder, Tradeshala</div>
          <img className={styles.textureIcon} alt="" src="/texture5@2x.png" />
          <img className={styles.frameIcon} alt="" src="/frame4.svg" />
          <img
            className={styles.unsplashieebwgy6laIcon}
            alt=""
            src="/unsplashieebwgy-6la@2x.png"
          />
          <img
            className={styles.frameChild}
            alt=""
            src="/group-1000003818.svg"
          />
        </div>
        <div className={styles.asSomeoneWhosAlwaysLookinParent}>
          <div className={styles.asSomeoneWhos}>
            I'm not a seasoned trader, but this website has made it easy for me
            to get started with crypto futures trading. Their KYC was very fast
            and the educational resources were really helpful.
          </div>
          <b className={styles.prakashJamatia}>
            <p className={styles.prakash}>Shambhavi</p>
            <p className={styles.prakash}>Nayak.</p>
          </b>
          <div className={styles.founderTradeshala}>Commodity Trader</div>
          <img className={styles.textureIcon} alt="" src="/texture5@2x.png" />
          <img className={styles.frameIcon} alt="" src="/frame4.svg" />
          <img
            className={styles.unsplasho5nbw8gtnmcIcon}
            alt=""
            src="/unsplasho5nbw8gtnmc@2x.png"
          />
          <img
            className={styles.frameChild}
            alt=""
            src="/group-1000003818.svg"
          />
        </div>
        <div className={styles.asSomeoneWhosAlwaysLookinParent}>
          <div className={styles.asSomeoneWhos}>
            I've been using this platform for a few months now and it's been a
            great experience. I was delighted to see all the major crypto coins
            listed on Density Exchange.
          </div>
          <b className={styles.prakashJamatia}>
            <p className={styles.prakash}>Arjun</p>
            <p className={styles.prakash}>Naik.</p>
          </b>
          <div className={styles.founderTradeshala}>Equity Trader</div>
          <img className={styles.textureIcon} alt="" src="/texture5@2x.png" />
          <img className={styles.frameIcon} alt="" src="/frame4.svg" />
          <img
            className={styles.frameChild}
            alt=""
            src="/group-1000003818.svg"
          />
          <img
            className={styles.unsplashzhvm3xiohoeIcon}
            alt=""
            src="/unsplashzhvm3xiohoe@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionCardFormFilter;
