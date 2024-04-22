import axios from "axios";
import {IResponseList} from "./response.ts";
import {IDetailResponse} from "./detailResponse.ts";

const instance = axios.create({
    baseURL: 'https://phobic-honey-production.up.railway.app/api',
})

enum ECategories {
    Recommended = 'recommended',
    Popular = 'popular',
    MostVisited = 'most-visited',
    Featured = 'featured',
    Europe = 'europe',
    Asia = 'asia',
}


const getData = (category: ECategories): Promise<IResponseList> => {
    let url: string = '';
    switch (category) {
        case ECategories.Asia:
            url = '/trips/asia'
            break;
        case ECategories.Europe:
            url = '/trips/europe'
            break;
        case ECategories.Featured:
            url = '/trips/featured'
            break;
        case ECategories.MostVisited:
            url = '/trips/most-visited'
            break;
        case ECategories.Popular:
            url = '/trips/popular'
            break;
        case ECategories.Recommended:
            url = '/trips/recommended'
            break;
    }
    return instance.get(url);
}

const getDetailData = (id: string): Promise<IDetailResponse> => {
    return instance.get(`/trips/${id}`);
}

export {getData, getDetailData};
export {ECategories};