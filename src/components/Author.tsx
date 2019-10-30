import React from "react";
import { connect } from 'react-redux';
import Header from  './Header';
import Footer from  './Footer';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import IUser from '../models/User';
import { IRootState } from '../reducers/RootReducer';

export interface IProps {
    user: IUser;
}

export interface IState {}

class Author extends React.Component<IProps, IState> {

    public AuthorInfo = (): JSX.Element => {

        return ( 
            <div>
                <Header author />
                    <div className="tangerine-container">
                        <MDBContainer fluid>
                            <MDBListGroup className="text-primary">
                                <MDBListGroupItem>
                                    <h5>
                                        <span className='mr-3 float-left' >
                                            <svg id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
                                            </svg>
                                        </span>
                                        <span className='padding-t'>Hamza Chorfi</span>
                                    </h5>
                                    </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <h5>
                                        <span className='mr-3 float-left' >
                                            <svg id="i-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
                                            </svg>
                                        </span>
                                        <span className='padding-t'>Software Engineer</span>
                                    </h5>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <h5>
                                        <span className='mr-3 float-left' >
                                            <svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" />
                                                <circle cx="16" cy="21" r="4" />
                                            </svg>
                                        </span>
                                        <span className='padding-t'>514-260-2646</span>
                                    </h5>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <h5>
                                        <span className='mr-3 float-left' >
                                            <svg id="i-mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
                                            </svg>
                                        </span>
                                        <span className='padding-t'>developerw3@gmail.com</span>
                                   </h5>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBContainer>
                    </div>
                <Footer />
            </div>
        );
    }


public render() {

    const { isLogin } = this.props.user;

    return (
        isLogin ? this.AuthorInfo() : <div></div>
    );
}
}

const mapStateToProps = (state: IRootState) => {
return {
    user: state.user,
};
};

export default connect(
mapStateToProps,
null,
)(Author);
