import React from "react";
import styles from "./Image.module.css";

interface IProps {
    alt: string;
    height?: number | string;
    src: string;
    width: number;
}

const Image: React.FC<IProps> = ({ alt, height = "auto", src, width}) => {
    return (
        <img className={styles.img} src={src} alt={alt} height={height} width={width} />
    )
}

export default Image;
