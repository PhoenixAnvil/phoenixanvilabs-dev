import React from "react";
import styles from "./Tagline.module.css";

interface IProps {
    children: React.ReactNode;
}

const Tagline: React.FC<IProps> = ({ children }) => {
    return (
        <span className={styles.tagline}>
            <p>{children}</p>
        </span>
    )
}

export default Tagline;
