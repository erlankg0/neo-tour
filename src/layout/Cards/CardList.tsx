import {useEffect, useState} from "react";
import CardItem, {ICard} from "../../components/card/card.tsx";
import styles from './card.module.css'
import {Typography} from "antd";

const CardList = () => {
    const [cards, setCards] = useState<ICard[]>([]);

    useEffect(() => {
        setCards([...cards, {title: 'Greenough, Montana', image: ''}, {
            title: 'Greenough, Montana',
            image: '',
        }, {title: 'Greenough, Montana', image: ''}, {title: 'Greenough, Montana', image: '4'}])
    }, [])

    return (
        <div className={'container'}>
            <Typography.Title className={'title'}>Recommended</Typography.Title>
            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <CardItem key={index} title={card.title} image={card.image}/>
                ))}
            </div>
        </div>
    );
}

export default CardList;
