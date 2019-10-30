import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../reducers/RootReducer';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';
import IUser from "../models/User";
import runSaga from '../store/saga/injectSaga';
import { loginUser } from '../sagas/LoginSaga';


export interface IProps {
    user: IUser;
}

export interface IState {
    username: string;
    password: string;
}

class Login extends React.Component<IProps, IState> {

    constructor(props: IProps) {

        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }
    
    public login = () => {

        if(this.state.username === 'admin' && this.state.password === 'admin') {
            runSaga(loginUser);
            window.location.pathname = '/home';
        }
    }

    public onChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({username: e.currentTarget.value });
    }

    public onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({password: e.currentTarget.value });
    }

    public loginForm() {
        return(
            <MDBContainer className="tangerine-login">
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <div className="header pt-3 warning-color-dark lighten-2">
                                <h3 className="text-white mt-3 mb-4 pb-1 mx-5">Log in</h3>
                            </div>
                            
                            <MDBCardBody>
                                <img src="https://i.ibb.co/smryvqs/tangerine-logo.jpg" className="app-logo" alt="Tangerine Software" />
                                <div className="grey-text">
                                    <div className="mr-2 float-left">
                                        <svg id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
                                        </svg>
                                    </div>
                                    <MDBInput
                                        label="Username"
                                        icon="none"
                                        type="text"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                        error="eeeded"
                                        required
                                    />
                                    <div className="mr-2 float-left">
                                        <svg id="i-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M5 15 L5 30 27 30 27 15 Z M9 15 C9 9 9 5 16 5 23 5 23 9 23 15 M16 20 L16 23" />
                                            <circle cx="16" cy="24" r="1" />
                                        </svg>
                                    </div>
                                    <MDBInput
                                        label="Password"
                                        icon="none"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                    />
                                    <Link to={{ pathname: `/forgot-password` }} className="d-flex  justify-content-end blue-text ml-1">Forgot password?</Link>
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn color="primary" onClick={this.login}>
                                        <h4 className="float-left mt-1">Send</h4> 
                                        <div className="ml-1 float-left">
                                            <svg id="i-signin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M3 16 L23 16 M15 8 L23 16 15 24 M21 4 L29 4 29 28 21 28" />
                                            </svg>
                                        </div>
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>

                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                                <Link to={{ pathname: `/create-account` }} className="blue-text ml-1">Create account</Link>
                            </MDBModalFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }

    public render() {

        const { isLogin } = this.props.user;

        return (
            !isLogin ? this.loginForm() : <div></div>
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
)(Login);
