import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer,
    NavLogoImg, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogoImg src="/images/2018GerizimCCWhite.png"></NavLogoImg>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Oracion</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Contacto</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Informacion</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">YouTube</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
