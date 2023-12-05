import * as React from "react";
import { FunctionComponent } from "react";
import ContainerCardFormFilter from "./ContainerCardFormFilter";
import * as styles from "./MarketExplorerSection.module.css";

const MarketExplorerSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.exploreTheMarketsLikeItIsParent}>
        <b className={styles.exploreTheMarketsContainer}>
          <p className={styles.exploreTheMarkets}>Explore the Markets</p>
          <p className={styles.exploreTheMarkets}>
            <span>{`like it is your `}</span>
            <span className={styles.playground}>Playground.</span>
          </p>
        </b>
        <div className={styles.searchForYour}>
          Search for your favorite coins and stay ahead of the market
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
        <img className={styles.chartIcon} alt="" src="/chart.svg" />
        <img className={styles.groupChild} alt="" src="/vector-1173.svg" />
        <img className={styles.groupItem} alt="" src="/vector-1174.svg" />
        <div className={styles.frameGroup}>
          <ContainerCardFormFilter
            cryptoImageUrl="/group-626505.svg"
            cryptoSymbol="Bitcoin"
            cryptoPairImageUrl="BTC/USDT"
            dimension="/vector4.svg"
            price="$25,776.80"
            cryptoLogoImageUrl="https://coinmarketcap.com/currencies/bitcoin/#markets"
            labelText="_blank"
            financialValue="$8.5B"
            percentage="23.1%"
          />
          <ContainerCardFormFilter
            cryptoImageUrl="/group-6265051.svg"
            cryptoSymbol="Solana"
            cryptoPairImageUrl="SOL/USDT"
            dimension="/vector5.svg"
            price="$18.07"
            financialValue="$372.8M"
            percentage="02.1%"
            propHeight="33.9px"
            propTextDecoration="unset"
          />
          <ContainerCardFormFilter
            cryptoImageUrl="/group-6265052.svg"
            cryptoSymbol="Ethereum"
            cryptoPairImageUrl="ETH/USDT"
            dimension="/vector4.svg"
            price="$1,607.11"
            cryptoLogoImageUrl="https://coinmarketcap.com/currencies/ethereum/#markets"
            labelText="_blank"
            financialValue="$4.6B"
            percentage="12.1%"
            propHeight="28.3px"
            propTextDecoration="none"
          />
        </div>
        <img className={styles.textureIcon} alt="" src="/texture1@2x.png" />
      </div>
      <div className={styles.exploreMarketsWrapper}>
        <b className={styles.exploreMarkets}>Explore Markets</b>
      </div>
    </div>
  );
};

export default MarketExplorerSection;
