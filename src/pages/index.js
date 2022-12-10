import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import InfoSectionTwo from '../components/InfoSectionTwo'
import InfoSectionThree from '../components/InfoSectionThree'
import InfoSectionVision from '../components/InfoSectionVision'
import { homeObjOne } from '../components/InfoSection/Data'
import { homeObjTwo } from '../components/InfoSectionTwo/Data'
import { homeObjThree } from '../components/InfoSectionThree/Data'
import TierSystem from '../components/TierSystem'
import Footer from '../components/Footer'
import { homeObjVision } from '../components/InfoSectionVision/Data'
import Team from '../components/Team'
import Partners from '../components/Partners'
import RoadmapFlex from '../components/RoadmapFlex'
const Home = () => {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        {/* Navbar */}
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        {/* <Navbar toggle={toggle}/> */}
        {/* Hero page */}
        <HeroSection />
        {/* About */}
        <InfoSection {...homeObjOne}/>
        {/* Vision */}
        <InfoSectionVision {...homeObjVision} />
        {/* TierSystem */}
        <InfoSectionTwo {...homeObjTwo}/>
        <TierSystem />
        {/* Roadmap */}
        <InfoSectionThree {...homeObjThree}/>
        <RoadmapFlex />
        {/* Team */}
        <Team />
        {/* Partners */}
        <Partners />
        {/* Footer */}
        <Footer/>
    </>
  )
}

export default Home