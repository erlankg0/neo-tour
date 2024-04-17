import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import styles from "./discover.module.css";
import {Typography} from "antd";
import CardItem from "../card/card.tsx";

interface IDiscover {
    id: string;
}

const Discover: React.FC<IDiscover> = ({id}) => {
    const [filter, setFilter] = useState("europe");
    const tours = ['Бишкек', 'Алания', 'Анталтия', 'Бишкек', 'Алания', 'Анталтия', 'Бишкек', 'Алания', 'Анталтия']

    const applyFilter = (key: string) => {
        console.log(key)
        setFilter(key);
    }
    const regions = [
        ["europe", "Europe"],
        ["asia", "Asia"],
        ["north_america", "North America"],
        ["south_america", "South America"],
        ["africa", "Africa"],
        ["australia", "Australia"],
        ["antarctica", "Antarctica"],
    ];

    return (
        <section className={styles.discoverPage} id={id}>
            <div className="container">
                <div className={styles.discoverTitleGroup}>
                    <Typography.Title className={styles.title}>Discover</Typography.Title>
                </div>

                <div className={styles.category}>
                    {regions.map(([key, value]) => (
                        <button
                            className={
                                filter === key ? `${styles.categoryLink} ${styles.active}` : `${styles.categoryLink}`
                            }
                            onClick={() => applyFilter(key)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
                <div className={styles.discoverListWrapper}>
                    {tours.map((elem) => (
                        <NavLink to={`/detail/${elem}`} key={elem}>
                            <div className={styles.discoverImgGroup}>
                                <CardItem title={elem} key={elem} image={elem}/>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Discover;