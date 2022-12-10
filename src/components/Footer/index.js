import React from 'react';
import { FaDiscord, FaTwitter,FaTelegramPlane, FaYoutube}from 'react-icons/fa';
import {BsMedium} from 'react-icons/bs'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterMedia,
    FooterEndWrap,
    CompanyLogo,
    WebsiteRights,
    SocialIconLink,
    SocialIcons

} from './FooterElements'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle></FooterLinkTitle>
                        <FooterLink to = 'about'>About us</FooterLink>
                        <FooterLink to = 'tier'>Tier System</FooterLink>
                        <FooterLink to = 'about'>Roadmap</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle></FooterLinkTitle>
                        <FooterLink to = 'about'>About us</FooterLink>
                        <FooterLink to = 'tier'>Tier System</FooterLink>
                        <FooterLink to = 'about'>Roadmap</FooterLink>
                </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle></FooterLinkTitle>
                        <FooterLink to = 'about'>About us</FooterLink>
                        <FooterLink to = 'tier'>Tier System</FooterLink>
                        <FooterLink to = 'about'>Roadmap</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle></FooterLinkTitle>
                        <FooterLink to = 'about'>About us</FooterLink>
                        <FooterLink to = 'tier'>Tier System</FooterLink>
                        <FooterLink to = 'about'>Roadmap</FooterLink>
                </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <FooterMedia>
            <FooterEndWrap>
                <CompanyLogo to='/'>PADMON</CompanyLogo>
                <WebsiteRights> Padmon &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target="_blank" aria-label="Discord">
                        <FaDiscord/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Discord">
                        <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Discord">
                        <FaTelegramPlane/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Discord">
                        <FaYoutube/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Discord">
                        <BsMedium/>
                    </SocialIconLink>
                </SocialIcons>
            </FooterEndWrap>
            </FooterMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer