import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./Container.module.css";

const Container: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.sameStrategiesWrapper}>
        <b className={styles.sameStrategies}>
          <p className={styles.same}>Same</p>
          <p className={styles.same}>Strategies</p>
        </b>
      </div>
      <img className={styles.frameChild} alt="" src="/vector-11.svg" />
      <div className={styles.sameStrategiesWrapper}>
        <b className={styles.sameStrategies}>
          <p className={styles.same}>Same</p>
          <p className={styles.same}>Indicators</p>
        </b>
      </div>
      <img className={styles.frameChild} alt="" src="/vector-11.svg" />
      <div className={styles.sameStrategiesWrapper}>
        <b className={styles.sameStrategies}>
          <p className={styles.same}>Better</p>
          <p className={styles.same}>Leverage</p>
        </b>
      </div>
      <img className={styles.frameChild} alt="" src="/vector-11.svg" />
      <div className={styles.sameStrategiesWrapper}>
        <b className={styles.sameStrategies}>
          <p className={styles.same}>24x7</p>
          <p className={styles.same}>Trading</p>
        </b>
      </div>
    </div>
  );
};

export default Container;
