import { Route, Switch } from "wouter";
import { useEffect, useRef, useState, useCallback } from "react";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";
import SmoothScroll from "./components/SmoothScroll";
import { CurrencyProvider, useCurrency } from "./components/CurrencyContext";

// AED (Default) Imports
import HomePage from "./imports/HomePage";
import Pricing from "./imports/Pricing";
import OurTech from "./imports/OurTech";
import Demo from "./imports/Demo";
import OurStory from "./imports/OurStory";
import Contact from "./imports/Contact";
import Privacy from "./imports/Privacy";

// THB Imports
import HomePageTHB from "./imports/HomePageTHB";
import PricingTHB from "./imports/PricingTHB";
import OurTechTHB from "./imports/OurTechTHB";
// DemoTHB was not provided, assuming shared or same as AED for now, or fallback to default
import DemoTHB from "./imports/Demo";
import OurStoryTHB from "./imports/OurStoryTHB";
import ContactTHB from "./imports/ContactTHB";
// PrivacyTHB not provided, using default
import PrivacyTHB from "./imports/Privacy";

const DESIGN_WIDTH = 490;

function ScaledContainer({ children }: { children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    const newScale = window.innerWidth / DESIGN_WIDTH;
    setScale(newScale);
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  // Keep the outer container height in sync with scaled inner content
  useEffect(() => {
    if (!innerRef.current || !outerRef.current) return;
    const observer = new ResizeObserver(() => {
      if (innerRef.current && outerRef.current) {
        const innerHeight = innerRef.current.scrollHeight;
        outerRef.current.style.height = `${innerHeight * scale}px`;
      }
    });
    observer.observe(innerRef.current);
    // Also do an immediate sync
    const innerHeight = innerRef.current.scrollHeight;
    outerRef.current.style.height = `${innerHeight * scale}px`;
    return () => observer.disconnect();
  }, [scale]);

  return (
    <div ref={outerRef} className="w-full overflow-hidden">
      <div
        ref={innerRef}
        style={{
          width: `${DESIGN_WIDTH}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Content() {
  const { currency } = useCurrency();

  const isTHB = currency === 'THB';

  return (
    <Switch>
      <Route path="/">
        <PageWrapper>{isTHB ? <HomePageTHB /> : <HomePage />}</PageWrapper>
      </Route>
      <Route path="/pricing">
        <PageWrapper>{isTHB ? <PricingTHB /> : <Pricing />}</PageWrapper>
      </Route>
      <Route path="/ourtech">
        <PageWrapper>{isTHB ? <OurTechTHB /> : <OurTech />}</PageWrapper>
      </Route>
      <Route path="/demo">
        <PageWrapper>{isTHB ? <DemoTHB /> : <Demo />}</PageWrapper>
      </Route>
      <Route path="/story">
        <PageWrapper>{isTHB ? <OurStoryTHB /> : <OurStory />}</PageWrapper>
      </Route>
      <Route path="/contact">
        <PageWrapper>{isTHB ? <ContactTHB /> : <Contact />}</PageWrapper>
      </Route>
      <Route path="/privacy">
        <PageWrapper>{isTHB ? <PrivacyTHB /> : <Privacy />}</PageWrapper>
      </Route>
      <Route>
        <PageWrapper>{isTHB ? <HomePageTHB /> : <HomePage />}</PageWrapper>
      </Route>
    </Switch>
  );
}

export default function App() {
  return (
    <CurrencyProvider>
      <div className="min-h-screen w-full bg-[#f8f8f6] font-sans">
        <SmoothScroll>
          <ScaledContainer>
            <div className="relative w-full min-h-screen bg-[#f8f8f6]">
              <ScrollToTop />
              <Content />
            </div>
          </ScaledContainer>
        </SmoothScroll>
      </div>
    </CurrencyProvider>
  );
}
