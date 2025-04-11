import React from "react";
import styles from "./Mission.module.css";
import { Row, Col } from "react-bootstrap";

const Mission: React.FC = () => {
    return (
        <Row>
            <Col xs={12} sm={12} md={12}>
                <h1>Jason's Mission</h1>
                <span className={styles.mission}>
                    <p>My mission is to elevate software users as the most vital force in the grand orchestration of software development. I strive to create Free and Open Source Software that is more compelling than for-profit alternatives—software that delivers uncompromising quality and usability, designed solely to solve real problems without claiming ownership of the data it helps users create or manage.</p>
                    <p><strong><em>Because software should serve people—never the other way around.</em></strong></p>
                </span>
            </Col>
        </Row>
    )
}

export default Mission;
