import React from 'react';
import Icon1 from '../../images/Nulls.png'
import Icon2 from '../../images/roadmap.png'
import Icon3 from '../../images/astronaut.png'
import Icon4 from '../../images/knightswap.webp'
import Icon5 from '../../images/glitch.svg'
import Icon6 from '../../images/Psalms.png'


import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    Title,
    PIcon,

} from './PartnersElements'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <Title>Partners</Title>
            <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle></FooterLinkTitle>
                                    <PIcon src={Icon1}/> 
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle></FooterLinkTitle>
                                    <PIcon src={Icon2}/> 
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle></FooterLinkTitle>
                                    <PIcon src={Icon3}/>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle></FooterLinkTitle>
                                    <PIcon src={Icon4}/>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle></FooterLinkTitle>
                                    <PIcon src={Icon5}/>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle></FooterLinkTitle>
                                    <PIcon src={Icon6}/>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
            </FooterLinksContainer>
            
            
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer