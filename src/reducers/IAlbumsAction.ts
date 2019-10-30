import IAlbums from "../models/Albums";

export default interface IAlbumsAction {
    type: string;
    data: IAlbums;
};
