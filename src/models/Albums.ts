export interface IAlbum {
    userId: number,
    id: number,
    title: string,
}

export default interface IAlbums extends Array<IAlbum>{};
