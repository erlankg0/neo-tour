import {IReview} from "./review.ts";
import {IImage} from './images.ts'

interface IDetailResponse {
    data: {
        id: string,
        destination: string,
        description: string,
        location: string,
        country: string,
        images: IImage[],
        reviews: IReview[],
    }
}

export type {IDetailResponse};