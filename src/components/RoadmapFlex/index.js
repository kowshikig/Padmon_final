import React from 'react'
import {
    RoadmapContainer,
    RoadmapWrapper,
    LeftWrapper,
    RightWrapper,
    CenterWrapper,
    Card,
    Rh1,
    Rp,
    CIcon, Space
} from './RoadmapElements';
import  Img  from '../../images/roadmaplines.svg';
import { FaArrowAltCircleRight } from  'react-icons/fa';

const RoadmapFlex = () => {
  return (
    <RoadmapContainer>
        <RoadmapWrapper>
            <LeftWrapper>
                <Card>
                    <Rh1>Completed Milestones</Rh1>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Successful Launch of PDM on Binance Smart Chain Network</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Listings on KnightSwap and PancakeSwap</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>IDO Platform Development Completed and Live</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Initial Project Marketing and Establishing of Strong Base Community of Investors</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>First IDO held, Initial UI Bugs Detected and Eliminated</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Rebranding of Padmon to Better Align Our Image With Our Ambitions</Rp>
                </Card>
                <Card>
                    <Rh1>Milestones Underway</Rh1>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Profit Sharing Model Established</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Development of Governance Portal for $PDM to Become Both Access And Governance Token</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Establishment of System of Governance for Community Members to Submit and Review Proposals to be Voted Upon</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Establishment of Educational Bootcamp Wherein Community Members Will Have Access to an Extensive Collection of Resources to Learn About How DeFi Operates, </Rp>
                </Card>
            </LeftWrapper>
            <CenterWrapper>
                {/* <h1>Center</h1> */}
                <CIcon src={Img} alt='icon'/>
            </CenterWrapper>
            <RightWrapper>
                <Card>
                    <Rh1>Perpetual Milestones</Rh1>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Establishing of Strategic Partnerships with Launchpads, Projects, VCs, KYC and Audit Platforms</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Collecting of a Wealth of Educational Resources to Provide to the Community</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Continual Scouting for High Quality Projects to Host on our Platform</Rp>
                    <Rp><Space><FaArrowAltCircleRight /></Space>Strategic Implementation of Community Developments for Long Term Positioning</Rp>
                </Card>
            </RightWrapper>

        </RoadmapWrapper>
    </RoadmapContainer>
  )
}

export default RoadmapFlex