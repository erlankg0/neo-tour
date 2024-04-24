import styles from "./reviews.module.css";
import Review from "../../components/review/review.tsx";
import React from "react";
import {IReview} from "../../API/review.ts";

interface IReviews {
    reviews: IReview[],
}

const Reviews: React.FC<IReviews> = ({reviews}) => {
    return (
        <ul className={styles.reviews} >
            {reviews.map((review) => (
                <Review id={review.id} createdDate={review.createdDate} username={review.username}
                        comment={review.comment} key={review.id}/>
            ))}
        </ul>
    )
}

export default Reviews