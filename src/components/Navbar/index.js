import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
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
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{ color: '#0474bc' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogoImg to='./' onClick={toggleHome} src="images/Gerizim2021LOGO_WHITE.png"></NavLogoImg>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {/*<NavItem>
                            <NavLinks 
                            to="evento" 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Congreso</NavLinks>
                        </NavItem>*/}
                        <NavItem>
                            <NavLinks 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Pastores</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="discover"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Eventos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="services"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Servicios</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="signup"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Ubicación</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="facebook"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Facebook</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/youtube" aria-label="YouTube-Live">YouTube</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
