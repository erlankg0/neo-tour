import React from "react";
import styles from "./card.module.css";
import cardImage from './../../assets/image/Illustration.svg'
import {NavLink} from "react-router-dom";

interface ICard {
    url: string,
    image: string,
    title: string
}

const CardItem: React.FC<ICard> = ({title, url}) => {
    return (
        <NavLink to={url} className={styles.card}>
            <img src={cardImage} alt={title}/>
            <div className={styles.overlay}>
                <p>{title}</p>
            </div>
        </NavLink>
    )
}

export default CardItem;
export type {ICard}