import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md'
import space from '../../images/space-shuttle.jpg'

export const HeroContainer = styled.div`
    background:linear-gradient(90deg, rgba(69,104,220,0.5) 5%, rgba(176,106,179,0.3) 81%),
    url(${space}) no-repeat center center / cover;

    display:flex;
    justify-content: center;
    align-items: center;
    padding:0px;
    height:800px;
    width: 100%;
    
   
    
    z-index: 1;
    

    :before {
        content:'';
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0,2) 0%,
            rgba(0,0,5,0.6) 100%
        ),
        linear-gradient(180deg, rgba(0,0,0, 0.2) 0%, transparent 100%);
        z-index:2;
    }
`
export const HeroBg = styled.div`
    

    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
`;

export const Img = styled.img`
    width:100%;
    height:100%;
    
    

    @media screen and (max-width:480px){
        background-size:cover;
        background-position-x:35%;
    }
    
`
export const HeroContent = styled.div`
    z-index:3;
    max-width:1200px;
    /* margin-left: 200px; */
    position:absolute;
    padding:8px 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    
`;
export const HeroH1 = styled.h1`
    color:#fff;
    font-size:70px;
    text-align:center;

    /* span {
        color:transparent;
    } */

    @media screen and (max-width:768px){
        font-size: 40px;

    }
    @media screen and (max-width:480px){
        font-size: 32px;
    }
`
export const HeroP = styled.p`
    margin-top:24px;
    color:#fff;
    font-size: 30px;
    text-align: center;
    max-width:600px;
    font-weight: bolder;

    @media screen and (max-width:768px){
        font-size: 24px;

    }
    @media screen and (max-width:480px){
        font-size: 18px;
    }
     
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction: column;
    align-items: center;
    

`

export const ArrowForward = styled(MdArrowForward)`
    margin-left:20px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:20px;
    font-size: 20px;
`