import React from 'react'
import {
    TierContainer,
    TierH1,
    TierWrapper,
    TierIcon,
    TierCard,
    TierH2,
    TierP,
    TierH11
} from './TierSystemElement'
import Icon1 from '../../images/Certificate.svg'
import Icon2 from '../../images/Goals.svg'
import Icon3 from '../../images/expert.svg'

const TierSystem = () => {
  return (
    <TierContainer>
        <TierH1>Tier System</TierH1>
        <TierWrapper>
            <TierCard>
                <TierIcon src={Icon3}/>
                <TierH1><span>Achiever Tier</span></TierH1>
                <TierH2>25,000 $PDM</TierH2>
                <TierH2>30 PDM/BNB LP</TierH2>
                
            </TierCard>
            <TierCard>
                <TierIcon src={Icon2}/>
                <TierH1>Expert Tier</TierH1>
                <TierH2>60,000 $PDM </TierH2>
                <TierH2>70 PDM/BNB LP</TierH2>
            </TierCard>
            <TierCard>
                <TierIcon src={Icon1}/>
                <TierH1>Legendary Tier</TierH1>
                <TierH2>160,000 $PDM</TierH2>
                <TierH2>175 PDM/BNB LP</TierH2>
            </TierCard>
        </TierWrapper>
    </TierContainer>
  )
}

export default TierSystem