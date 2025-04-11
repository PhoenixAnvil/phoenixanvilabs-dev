import React from "react";
import styles from "./Vision.module.css";
import { Row, Col } from "react-bootstrap";

const Vision: React.FC = () => {
    return (
        <Row>
            <Col xs={12} sm={12} md={12}>
                <h1>Jason's Vision</h1>
                <span className={styles.vision}>
                    <p>Every computer in every home and business deserves software that delivers excitement, freedom, and <strong><em>enterprise-grade features and reliability</em></strong>. At PhoenixAnvil Labs, we craft compelling Free/Libre and Open Source Software that rivals the best commercial offerings—empowering users without locking in their data. We believe great software should serve its users first: accessible, ethical, and built to solve real-world problems with pride and polish.</p>
                </span>
            </Col>
        </Row>
    )
}

export default Vision;
