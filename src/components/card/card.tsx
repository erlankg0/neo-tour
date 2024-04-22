import React from "react";
import styles from "./card.module.css";
import {NavLink} from "react-router-dom";

interface ICard {
    id: number,
    image: string,
    title: string
}

const CardItem: React.FC<ICard> = ({title, image, id}) => {
    return (
        <NavLink to={`/detail/${id}`} className={styles.imgCard}>
            <img className={styles.img} src={image} alt=""/>
            <p>{title}</p>
        </NavLink>
    )
}

export default CardItem;
export type {ICard}