import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./ContainerCardFormFilter.module.css";

type ContainerCardFormFilterType = {
  cryptoImageUrl?: string;
  cryptoSymbol?: string;
  cryptoPairImageUrl?: string;
  dimension?: string;
  price?: string;
  cryptoLogoImageUrl: string;
  labelText?: string;
  financialValue?: string;
  percentage?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const ContainerCardFormFilter: FunctionComponent<
  ContainerCardFormFilterType
> = ({
  cryptoImageUrl,
  cryptoSymbol,
  cryptoPairImageUrl,
  dimension,
  price,
  cryptoLogoImageUrl,
  labelText,
  financialValue,
  percentage,
  propHeight,
  propTextDecoration,
}) => {
  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const aStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src={cryptoImageUrl} />
          <div className={styles.bitcoinParent}>
            <div className={styles.bitcoin}>{cryptoSymbol}</div>
            <div className={styles.btcusdt}>{cryptoPairImageUrl}</div>
          </div>
        </div>
        <img
          className={styles.vectorIcon}
          alt=""
          src={dimension}
          style={vectorIconStyle}
        />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.priceParent}>
          <div className={styles.price}>Price</div>
          <a
            className={styles.a}
            href={cryptoLogoImageUrl}
            target={labelText}
            style={aStyle}
          >
            {price}
          </a>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.volParent}>
            <div className={styles.price}>VOL</div>
            <div className={styles.b}>{financialValue}</div>
          </div>
          <div className={styles.volParent}>
            <div className={styles.price}>CHG</div>
            <div className={styles.div}>{percentage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
