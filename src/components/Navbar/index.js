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
                    <NavLogoImg src="images/2018GerizimCCWhite.png"></NavLogoImg>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">HOME</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">ORACION</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">CONTACTO</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">INFORMACION</NavLinks>
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
