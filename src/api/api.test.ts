import axios from 'axios';
import { fetchAlbums, fetchPhotosByAlbumId } from "./api";

jest.mock('axios');

test('Should fetch albums', async() => {
  
    const albums = [
        {
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "sunt qui excepturi placeat culpa"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "omnis laborum odio"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "non esse culpa molestiae omnis sed optio"
        }
    ];

    const response = {data: albums};
    
    axios.get.mockResolvedValue(response);

    return fetchAlbums().then(data => expect(data.data).toEqual(albums));
});

test('Should fetch photos by album id', async() => {
  
    const photos = [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
    ];

    const response = {data: photos};
    
    axios.get.mockResolvedValue(response);

    return fetchPhotosByAlbumId(1).then(data => expect(data.data).toEqual(photos));
});
