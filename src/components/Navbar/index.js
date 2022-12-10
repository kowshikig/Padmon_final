import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    Img
} from './NavbarElements';
const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    const toggleContact = () => {
        scroll.scrollToBottom();
    }
  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}><Img />PADMON</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >ABOUT</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >VISION</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="tier"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >TIER SYSTEM</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="roadmap"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >ROADMAP</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/"
                         onClick={toggleContact}
                         smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >TEAM</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to='/'>WHITEPAPER</NavBtnLink>
                        <NavBtnLink to='/'>APPLY FOR IDO</NavBtnLink>
                    </NavBtn>
                
                </NavMenu>
                
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar