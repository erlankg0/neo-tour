import {useEffect, useState} from "react";
import CardItem, {ICard} from "../../components/card/card.tsx";
import styles from './card.module.css'
import {Typography} from "antd";

const CardList = () => {
    const [cards, setCards] = useState<ICard[]>([]);

    useEffect(() => {
        setCards([...cards, {title: 'Greenough, Montana', image: '', url: '1'}, {
            title: 'Greenough, Montana',
            image: '',
            url: '2'
        }, {title: 'Greenough, Montana', image: '', url: '3'}, {title: 'Greenough, Montana', image: '4', url: ''}])
    }, [])

    return (
        <div className={'container'}>
            <Typography.Title className={'title'}>Recommended</Typography.Title>
            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <CardItem key={index} title={card.title} url={card.url} image={card.image}/>
                ))}
            </div>
        </div>
    );
}

export default CardList;
