import {useEffect, useState} from "react";
import CardItem from "../../components/card/card.tsx";
import styles from './card.module.css'
import {Typography} from "antd";
import {ECategories, getData} from "../../API/api.ts";
import {IResponse} from "../../API/response.ts";

const CardList = () => {
    const [cards, setCards] = useState<IResponse[]>([]);

    useEffect(() => {
        const cardRecommends = async () => {
            try {
                const response = await getData(ECategories.Recommended);
                setCards(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        cardRecommends();
        console.log(cards)
    }, [])

    return (
        <div className={'container'}>
            <Typography.Title className={'title'}>Recommended</Typography.Title>
            <div className={styles.cards}>
                {cards.map((card) => (
                    <CardItem id={card.id} title={card.destination} image={card.imageUrl}/>
                ))}
            </div>
        </div>
    );
}

export default CardList;
