import React from "react";
import styles from "./card.module.css";
import personImage from "../../assets/image/bgImage.jpg";
import {NavLink} from "react-router-dom";

interface ICard {
    image: string,
    title: string
}

const CardItem: React.FC<ICard> = ({title}) => {
    return (
        <NavLink to={'/detail/'+title} className={styles.imgCard}>
            <img className={styles.img} src={personImage} alt=""/>
            <p>{title}</p>
        </NavLink>
    )
}

export default CardItem;
export type {ICard}