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
                                <FooterLink to="/signin">Home</FooterLink>
                                <FooterLink to="/signin">Oracion</FooterLink>
                                <FooterLink to="/signin">Contacto</FooterLink>
                                <FooterLink to="/signin">Informacion</FooterLink>
                                <FooterLink to="/signin">Gallery</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Transmisiones</FooterLinkTitle>
                                <FooterLink to="/signin">Home</FooterLink>
                                <FooterLink to="/signin">Oracion</FooterLink>
                                <FooterLink to="/signin">Contacto</FooterLink>
                                <FooterLink to="/signin">Informacion</FooterLink>
                                <FooterLink to="/signin">Gallery</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                <FooterLink to="/signin">YouTube</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/signin">Home</FooterLink>
                                <FooterLink to="/signin">Oracion</FooterLink>
                                <FooterLink to="/signin">Contacto</FooterLink>
                                <FooterLink to="/signin">Informacion</FooterLink>
                                <FooterLink to="/signin">Gallery</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='./' onClick={toggleHome}>
                            Ebenezer Dallas Gerizim
                        </SocialLogo>
                        <WebsiteRights>Ebenezer Dallas © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
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
