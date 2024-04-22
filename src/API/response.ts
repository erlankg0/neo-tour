interface IResponse {
    id: number,
    destination: string,
    imageUrl: string
}


interface IResponseList {
    data: IResponse[],
}


export type {IResponseList, IResponse};