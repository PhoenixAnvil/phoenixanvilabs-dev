import React from "react";
import styles from "./Name.module.css";

interface IProps {
    name?: string;
}

const Name: React.FC<IProps> = ({ name = "Jason Alan Smith" }) => {
    return (
        <span className={styles.name}>
            <p>{name}</p>
        </span>
    )
}

export default Name;
