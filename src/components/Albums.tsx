import React, { useEffect} from 'react';
import { MDBCol, MDBListGroup, MDBListGroupItem, MDBJumbotron, MDBBadge } from "mdbreact";
import IAlbums, { IAlbum } from '../models/Albums';
import Spinner from './Spinner';
import runSaga from '../store/saga/injectSaga';
import { getAlbums, deleteAlbums } from '../sagas/AlbumsSaga';

interface IFAlbums {
    albums: IAlbums;
    md: number;
    classAlbumsMobile: string;
    displayPhotos(id: number, title: string): void;
};

const Albums = (props: IFAlbums): JSX.Element => {
    
    const { albums, md, classAlbumsMobile } = props;

    useEffect(() => {

        runSaga(getAlbums);
        
        return (() => {
            runSaga(deleteAlbums);
        });

    }, []);

    const noAlbums = (): JSX.Element => {
        return (
            <MDBJumbotron>
                <h1 className="text-center">There is no albums available</h1>
            </MDBJumbotron>
        );
    }

    const showPhotos = (e: any, id: number, title: string) => {
        e.preventDefault();
        props.displayPhotos(id, title);
    }

    return (
        <MDBCol md={md as any} className={classAlbumsMobile}>
            {
                !albums ? <Spinner /> : (albums.length === 0) ? noAlbums() :
                <MDBJumbotron>
                    <MDBListGroup>
                        <MDBListGroupItem href="#" className="text-center" active key="0"><h3>Albums</h3></MDBListGroupItem>
                        {
                            albums.map((album: IAlbum) => {
                                return(
                                    <MDBListGroupItem href="#" key={ album.id } onClick={(e: any) => showPhotos(e, album.id, album.title)}>
                                        { album.title }
                                        <MDBBadge color="primary float-right" pill>{ album.id }</MDBBadge>
                                    </MDBListGroupItem>
                                );
                            })
                        }
                    </MDBListGroup>
                </MDBJumbotron>
            }
        </MDBCol>
    );
}

export default Albums;
