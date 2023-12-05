import * as React from "react";
import { FunctionComponent } from "react";
import Header from "../components/Header";
import TradeHeroContainer from "../components/TradeHeroContainer";
import DynamicComponent from "../components/DynamicComponent";
import DerivativeTradingCard from "../components/DerivativeTradingCard";
import ContainerCard from "../components/ContainerCard";
import TradeMorePayLessSection from "../components/TradeMorePayLessSection";
import MarketExplorerSection from "../components/MarketExplorerSection";
import Container from "../components/Container";
import CryptoCard from "../components/CryptoCard";
import SectionCardForm from "../components/SectionCardForm";
import SectionCard from "../components/SectionCard";
import SectionCard1 from "../components/SectionCard1";
import SectionCardFormFilter from "../components/SectionCardFormFilter";
import EarnMoneySection from "../components/EarnMoneySection";
import TradeTogetherSection from "../components/TradeTogetherSection";
import VisionariesSection from "../components/VisionariesSection";
import SectionForm from "../components/SectionForm";
import FormContainer from "../components/FormContainer";
import * as styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <TradeHeroContainer />
      <DynamicComponent />
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <img
            className={styles.groupChild}
            alt=""
            src="/group-1000003808.svg"
          />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.groupDiv}>
            <img
              className={styles.groupIcon}
              alt=""
              src="/group-18145967.svg"
            />
            <div className={styles.oneAppEndlessContainer}>
              <p className={styles.oneApp}>One App.</p>
              <p className={styles.oneApp}>{`Endless `}</p>
              <p className={styles.oneApp}>Possibilities</p>
            </div>
          </div>
        </div>
        <DerivativeTradingCard />
        <ContainerCard />
      </div>
      <TradeMorePayLessSection />
      <MarketExplorerSection />
      <div className={styles.frameParent}>
        <div className={styles.unlockNewFrontiersParent}>
          <b className={styles.unlockNewFrontiersContainer}>
            <span>Unlock</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.newFrontiers}>New Frontiers.</span>
          </b>
          <div className={styles.areYouA}>
            Are you a stock trader looking for new opportunities to make money?
            We got you covered!
          </div>
        </div>
        <Container />
        <div className={styles.frameGroup}>
          <CryptoCard />
          <img className={styles.textureIcon} alt="" src="/texture2@2x.png" />
        </div>
      </div>
      <SectionCardForm />
      <SectionCard />
      <SectionCard1 />
      <SectionCardFormFilter />
      <EarnMoneySection />
      <TradeTogetherSection />
      <VisionariesSection />
      <SectionForm />
      <FormContainer />
    </div>
  );
};

export default LandingPage;
