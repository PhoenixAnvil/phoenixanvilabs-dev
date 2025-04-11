import React from "react";
import styles from "./Email.module.css";

interface IProps {
    email?: string;
}

const Email: React.FC<IProps> = ({ email = "Jason.Smith@phoenixanvilabs.dev" }) => {
    return (
        <p className={styles.p}><a className={styles.a} href={`mailto:${email}`}>{email}</a></p>
    )
}

export default Email;
