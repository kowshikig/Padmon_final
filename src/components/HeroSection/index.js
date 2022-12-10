import React,{useState} from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    Img
} from './HeroElements';
import { Button } from '../ButtonElement'
import Video from '../../videos/video.mp4'
import space from '../../images/space-shuttle.jpg'
const HeroSection = () => {
const [hover,setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}
  return (
    <HeroContainer>
        
        <HeroContent>
            <HeroH1>Welcome to <span>Padmon </span>Launchpad</HeroH1>
            <HeroP>
                Padmon is an IDO platform established on BSC network. We have also developed a
                simplified means of hosting project IDOs on multiple network chains.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='/' onMouseEnter={onHover}
                 onMouseLeave={onHover}
                 primary='true'
                 dark='true'>
                    Trade Padmon {hover ? <ArrowForward />:<ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
        <HeroBg>
            <Img />
        </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection