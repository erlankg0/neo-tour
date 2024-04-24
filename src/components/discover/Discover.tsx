import React, {useEffect, useState} from "react";
import styles from "./discover.module.css";
import {Typography} from "antd";
import CardItem from "../card/card.tsx";
import {IResponse} from "../../API/response.ts";
import {ECategories, getData} from "../../API/api.ts";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";

interface IDiscover {
    id: string;
}

const Discover: React.FC<IDiscover> = ({id}) => {
    const [filter, setFilter] = useState("popular");
    const [tours, setTours] = useState<IResponse[]>();
    const getTours = async (category: ECategories) => {
        try {
            const response = await getData(category);
            console.log(response);
            setTours(response.data.slice(0, 3).reverse())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTours(ECategories.Popular);
    }, [])


    const applyFilter = (key: string) => {
        setFilter(key);
    }
    const regions = [
        [ECategories.Popular, 'Popular'],
        [ECategories.Featured, "Featured"],
        [ECategories.MostVisited, "Most Visited"],
        [ECategories.Europe, "Europe"],
        [ECategories.Asia, "Asia"],
    ];


    return (
        <section className={styles.discoverPage} id={id}>
            <div className="container">
                <div className={styles.discoverTitleGroup}>
                    <Typography.Title className={styles.title}>Discover</Typography.Title>
                </div>

                <div className={styles.discoverPageHeader}>
                    <div className={styles.category}>
                        {regions.map(([key, value]) => (
                            <button
                                className={
                                    filter === key ? `${styles.categoryLink} ${styles.active}` : `${styles.categoryLink}`
                                }
                                onClick={() => {
                                    applyFilter(key);
                                    console.log(key, value);

                                    switch (key) {
                                        case 'popular':
                                            getTours(ECategories.Popular)
                                            break;
                                        case 'asia':
                                            getTours(ECategories.Asia)
                                            break;
                                        case 'featured':
                                            getTours(ECategories.Featured)
                                            break
                                        case 'europe':
                                            getTours(ECategories.Europe)
                                            break;
                                        case 'most-visited':
                                            getTours(ECategories.MostVisited)
                                            break
                                    }
                                }}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                    <div className={styles.discoverNavigate}>
                        <button className={styles.discoverArrow}>
                            <ArrowLeftOutlined/>
                        </button>
                        <button className={styles.discoverArrow}>
                            <ArrowRightOutlined/>
                        </button>

                    </div>

                </div>

                <div className={styles.discoverListWrapper}>
                    {tours && tours.map((elem) => (
                        <div className={styles.discoverImgGroup}>
                            <CardItem title={elem.destination} id={elem.id} image={elem.imageUrl} key={elem.id}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Discover;