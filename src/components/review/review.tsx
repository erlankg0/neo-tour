import {Typography} from "antd";
import React from "react";
import styles from './review.module.css'
import {IReview} from "../../API/review.ts";
import img from './../../assets/icon/person.svg'

const Review: React.FC<IReview> = ({comment, username, id}) => {
    return (
        <li key={id}>
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