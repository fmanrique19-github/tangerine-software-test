import IPhotos from "../models/Photos";

export default interface IPhotosAction {
    type: string;
    data: IPhotos;
};
