import React from "react";
import styles from "./HeroQuote.module.css";

interface IProps {
    quote: string;
    source: string;
}

const HeroQuote: React.FC<IProps> = ({ quote, source }) => {
    return (
        <span className={styles.hero}>
            <blockquote>
                <p>{quote}</p>
                <span className={styles.hero}>
                    <footer>{source}</footer>
                </span>
            </blockquote>
        </span>
    )
}

export default HeroQuote;
