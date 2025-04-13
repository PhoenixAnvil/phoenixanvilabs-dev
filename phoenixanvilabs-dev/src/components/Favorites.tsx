import React from "react";
import styles from "./Favorites.module.css";
import { Row, Col } from "react-bootstrap";
import Tagline from "./common/Tagline";

const Favorites: React.FC = () => {
    return (
        <Row>
            <Col xs={12} sm={12} md={12}>
                <span className={styles.favorites}>
                    <h1>Jason's Favorite Places on these Vast Interwebs</h1>
                    <Tagline>Technical Documentation</Tagline>
                    <ul>
                        <li><a href="https://www.rfc-editor.org" target="_blank" rel="noopener noreferrer">RFC Editor</a></li>
                    </ul>
                </span>
            </Col>
        </Row>
    )
}

export default Favorites;
