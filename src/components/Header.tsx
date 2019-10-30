import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import runSaga from '../store/saga/injectSaga';
import { logoutUser } from '../sagas/LoginSaga';

const Header = (props: any) => {

    const [collapse, setCollapse] = useState(false);
    
    const isWideEnough = false;

    const { home, author } = props;

    const togglerNavBar = () => {
        setCollapse(!collapse);
    }

    const logout = () => {
        runSaga(logoutUser);
        window.location.pathname = '/';
    }

    return ( 
        <MDBNavbar color="orange darken-1" dark expand="md" fixed="top" className="pt-3">
            <MDBNavbarBrand href="/home">
                <h2>
                    <span className="float-left mr-2">
                        <svg id="i-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M20 24 L12 16 2 26 2 2 30 2 30 24 M16 20 L22 14 30 22 30 30 2 30 2 24" />
                            <circle cx="10" cy="9" r="3" />
                        </svg>
                    </span>
                    Magic Photos
                </h2>
            </MDBNavbarBrand>

            { !isWideEnough && <MDBNavbarToggler onClick={ togglerNavBar } /> }

            <MDBCollapse isOpen={collapse} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active={home}>
                        <MDBNavLink to="/home" className="h5-responsive">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={author}>
                        <MDBNavLink to="/author" className="h5-responsive">Author</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>

                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink to="/logout" onClick={ logout }>
                            <h4>
                                <strong>Admin</strong> (logout) 
                                <div className="float-right ml-2">
                                    <svg id="i-signout" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <path d="M28 16 L8 16 M20 8 L28 16 20 24 M11 28 L3 28 3 4 11 4" />
                                    </svg>
                                </div>
                            </h4>
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
}

export default Header;
