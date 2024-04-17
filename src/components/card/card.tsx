import React from "react";
import styles from "./card.module.css";
import personImage from "../../assets/image/bgImage.jpg";

interface ICard {
    image: string,
    title: string
}

const CardItem: React.FC<ICard> = ({title}) => {
    return (
        <div className={styles.imgCard}>
            <img className={styles.img} src={personImage} alt=""/>
            <p>{title}</p>
        </div>
    )
}

export default CardItem;
export type {ICard}