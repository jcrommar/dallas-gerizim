import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    NavLogoImg,
} from './FooterElements';

const toggleHome = () => {
    scroll.scrollToTop();
};

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Gerizim</FooterLinkTitle>
                                <FooterLink to="about" 
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>Pastores</FooterLink>
                                <FooterLink to="discover"
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>Eventos</FooterLink>
                                <FooterLink to="services"
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>Servicios</FooterLink>
                                <FooterLink to="signup"
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>Ubicacion</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Transmisiones</FooterLinkTitle>
                                <FooterLink to="/signin">YouTube</FooterLink>
                                <FooterLink to="/signin">Facebook Live</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="https://www.facebook.com/EbenezerDallasGerizim">Facebook</FooterLink>
                                <FooterLink to="https://www.instagram.com/EbenezerDallasGerizim/?fbclid=IwAR3sOM_xz0s4vorox1qV_e_EALUMi7oOEKD8NLbU6yGOSfuylRGqYSdUsmk">Instagram</FooterLink>
                                <FooterLink to="https://www.youtube.com/channel/UC81SMAEkXeXisfnRIYmw_yg">YouTube</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Predicas</FooterLinkTitle>
                                <FooterLink href="https://www.youtube.com/channel/UC81SMAEkXeXisfnRIYmw_yg" target="_blank">Videoteca</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                    <NavLogoImg to='./' onClick={toggleHome} src="images/2018GerizimWhite.png"></NavLogoImg>
                        <SocialLogo to='./' onClick={toggleHome}>
                            Ebenezer Dallas Gerizim
                        </SocialLogo>
                        <WebsiteRights>Ebenezer Dallas © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/EbenezerDallasGerizim" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/EbenezerDallasGerizim/?fbclid=IwAR3sOM_xz0s4vorox1qV_e_EALUMi7oOEKD8NLbU6yGOSfuylRGqYSdUsmk" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UC81SMAEkXeXisfnRIYmw_yg" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
