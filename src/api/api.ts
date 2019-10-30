import axios from 'axios';

export const fetchAlbums = () => {

    return axios.get(`https://jsonplaceholder.typicode.com/albums`);
}

export const fetchPhotosByAlbumId = (id: number) => {

    return axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
}
