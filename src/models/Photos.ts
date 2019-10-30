export interface IPhoto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
}

export default interface IPhotos extends Array<IPhoto>{};
