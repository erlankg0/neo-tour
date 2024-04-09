import {Typography} from "antd";
import React from "react";
import styles from './review.module.css'
interface IReview {
    img: string,
    username: string,
    comment: string
}

const Review: React.FC<IReview> = ({img, comment, username}) => {
    return (
        <li>
            <div className={styles.content}>
                <div className={styles.top}>
                    <img className={styles.image} src={img} alt={username}/>
                    <Typography.Text className={styles.user}>{username}</Typography.Text>
                </div>
                <div>
                    <Typography.Text>
                        {comment}
                    </Typography.Text>
                </div>
            </div>
        </li>
    )
}

export default Review;
export type {IReview};