import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaInstagram, FaYoutube, FaSpotify} from 'react-icons/fa';

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
    FooterLinkLocal,
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
                                <FooterLinkLocal to="about" 
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>Pastores</FooterLinkLocal>
                                <FooterLinkLocal to="discover"
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>Eventos</FooterLinkLocal>
                                <FooterLinkLocal to="services"
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>Servicios</FooterLinkLocal>
                                <FooterLinkLocal to="signup"
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>Ubicacion</FooterLinkLocal>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Transmisiones</FooterLinkTitle>
                                <FooterLink to="/signin">YT Live</FooterLink>
                                <FooterLink to="/signin">FB Live</FooterLink>
                                <FooterLink to="/signin">Gerizim (Pronto)</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="//facebook.com/EbenezerDallasGerizim" target="_blank" aria-label="Facebook">Facebook</FooterLink>
                                <FooterLink to="//instagram.com/EbenezerDallasGerizim/?fbclid=IwAR3sOM_xz0s4vorox1qV_e_EALUMi7oOEKD8NLbU6yGOSfuylRGqYSdUsmk" target="_blank" aria-label="Instagram">Instagram</FooterLink>
                                <FooterLink to="//youtube.com/channel/UC81SMAEkXeXisfnRIYmw_yg" target="_blank" aria-label="YouTube">YouTube</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Predicas</FooterLinkTitle>
                                <FooterLink to="//youtube.com/c/EbenezerDallas/videos" target="_blank">Videoteca</FooterLink>
                                <FooterLink to="//youtube.com/c/EbenezerDallas/videos" target="_blank">Spotify (Pronto)</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                    <NavLogoImg to='./' onClick={toggleHome} src="https://github.com/jcrommar/dallas-gerizim/blob/gh-pages/images/Gerizim2021LOGO_AllWHITE.png?raw=true"></NavLogoImg>
                        <SocialLogo to='./' onClick={toggleHome}>
                            Ebenezer Dallas Gerizim
                        </SocialLogo>
                        <WebsiteRights>Ebenezer Dallas © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink to="//facebook.com/EbenezerDallasGerizim" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink to="//instagram.com/EbenezerDallasGerizim/?fbclid=IwAR3sOM_xz0s4vorox1qV_e_EALUMi7oOEKD8NLbU6yGOSfuylRGqYSdUsmk" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink to="//youtube.com/channel/UC81SMAEkXeXisfnRIYmw_yg" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink to="//youtube.com/channel/UC81SMAEkXeXisfnRIYmw_yg" target="_blank" aria-label="YouTube">
                                <FaSpotify />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
