import styles from "./reviews.module.css";
import Review, {IReview} from "../../components/review/review.tsx";
import React from "react";
import imagePeople from './../../assets/image/people.jpg'

interface IReviews {
    reviews: IReview[],
}

const Reviews: React.FC<IReviews> = ({reviews}) => {
    return (
        <ul className={styles.reviews}>
            {reviews.map((review) => (
                <Review username={review.username} comment={review.comment} img={imagePeople}/>
            ))}
        </ul>
    )
}

export default Reviews