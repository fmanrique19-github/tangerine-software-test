import React, { useEffect } from 'react';
import { MDBCol, MDBListGroup, MDBListGroupItem, MDBJumbotron, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import runSaga from '../store/saga/injectSaga';
import { deletePhotos } from '../sagas/PhotosSaga';
import IPhotos, { IPhoto } from '../models/Photos';
import Spinner from './Spinner';

interface IFPhotos {
    photos: IPhotos
    md: number;
    className: string;
    title: string
    displayAlbums(): void;
};

const Photos = (props:  IFPhotos): JSX.Element => {
    
    const { photos, md, className, title } = props;

    useEffect(() => {

        return (() => {
            runSaga(deletePhotos);
        });
        
    }, []);

    const noPhotos = (): JSX.Element => {
        return (
            <MDBJumbotron>
                <h1 className="text-center">There is no photos available</h1>
            </MDBJumbotron>
        );
    }

    const showAlbums = () => {
        
        props.displayAlbums();
    }

    return (
        <MDBCol md={md as any} className={`tangerine-fixed ${className}`}>
            {
                !photos ? <Spinner /> : (photos.length === 0) ? noPhotos() :
                <MDBJumbotron className="photo-mobile">
                    <div onClick={ showAlbums } className="photo-mobile-close">
                        <svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M2 30 L30 2 M30 30 L2 2" />
                        </svg>
                    </div>
                    
                    <MDBListGroup>
                        <MDBListGroupItem href="#" className="text-center fixed-title" active key="0"><h3>Album's Photos - { title }</h3></MDBListGroupItem>
                        <div  className="scrollbar scrollbar-primary">
                        <MDBTable bordered>
                            <MDBTableHead color="gray-color">
                                <tr key="1">
                                <th>Title</th>
                                <th>Photo</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    photos.map((photo: IPhoto) => {
                                        return(
                                            <tr key={ photo.id }>
                                            <td>{ photo.title }</td>
                                            <td><img src={ photo.thumbnailUrl } className="mx-auto d-block rounded" alt={ photo.title } /></td>
                                            </tr>
                                        );
                                    })
                                }
                            </MDBTableBody>
                        </MDBTable>
                        </div>
                    </MDBListGroup>
                </MDBJumbotron>
            }
        </MDBCol>
    );
}

export default Photos;
