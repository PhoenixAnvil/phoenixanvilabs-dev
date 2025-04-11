import React from "react";
import { Row, Col } from "react-bootstrap";
import HeroQuote from "../components/common/HeroQuote.tsx";
import Tagline from "../components/common/Tagline";

const Home: React.FC = () => {
  const quote = "All right, sweethearts, what are you waiting for? Breakfast in bed? Another glorious day in QA! A day in QA is like a day on the farm. Every meal's a banquet! Every paycheck a fortune! Every release a parade! I LOVE QA!";
  const source = "Adapted from Al Matthews as Sergeant Apone in Aliens";

  return (
      <div>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <HeroQuote quote={quote} source={source} />
            </Col>
          </Row>
          <Row>
              <Col xs={12} md={12} lg={12}>
                  <Tagline>Quality Addict / Aspiring Developer</Tagline>
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={12} lg={12}>
                  <Tagline>Call me, <strong><em>The Toolmaker</em></strong>.</Tagline>
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={12} lg={12}>
                  <Tagline>Welcome to PhoenixAnvil Labs, or just <strong><em>The Forge!</em></strong></Tagline>
              </Col>
          </Row>
      </div>
  )
};

export default Home;
