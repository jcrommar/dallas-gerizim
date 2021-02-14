import React from 'react';
import { 
    SocialContainer, 
    SocialWrapper, 
    SocialRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    ImgWrap,
} from './SocialElement';

const SocialSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
}) => {
    return (
        <>
            <SocialContainer lightBg={lightBg} id={id}>
                <SocialWrapper>
                    <SocialRow imgStart={imgStart}>
                    <Column1>
                            <ImgWrap>
                                <iframe title="facebook-feed" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEbenezerDallasGerizim&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style={{ border:"none", overflow:"hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FEbenezerDallasGerizim&width=450&layout=button&action=like&size=large&share=false&height=35&appId" title="fb-like" width="90" height="28" style={{ border:"none", overflow:"hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2FEbenezerDallasGerizim&layout=button_count&size=large&width=107&height=28&appId" title="fb-share" width="107" height="28" style={{ border:"none", overflow:"hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            </TextWrapper>
                        </Column2>
                    </SocialRow>
                </SocialWrapper>
            </SocialContainer>
        </>
    )
}

export default SocialSection
