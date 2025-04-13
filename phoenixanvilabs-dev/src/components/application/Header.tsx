import React from "react";
// import styles from "./Header.module.css";
import Logo from "../../assets/PhoenixAnvilLabsLogo.png";
import HeadShot from "../../assets/SocialProfile1.jpg";
import {Row, Col} from "react-bootstrap";
import Image from "../common/Image";
import Name from "../common/Name";
import Email from "../common/Email";
import Tagline from "../common/Tagline";

const Header: React.FC = () => {
    return (
        <Row className="align-items-center">
            <Col xs={12} md={2} lg={3}>
                <Image src={Logo} alt="PhoenixAnvil Labs logo" width={300}/>
            </Col>
            <Col xs={12} md={2} lg={3}>
                <Image src={HeadShot} alt="Head shot of Jason Alan Smith" width={300}/>
            </Col>
            <Col xs={12} md={8} lg={6}>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <Name/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <Email/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <Tagline>Software QA rebel in the trenches since 1999.</Tagline>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <Tagline>QA is more than just a profession; it's a brotherhood.</Tagline>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Header;
