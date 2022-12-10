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
} from './TeamElements'
import Icon1 from '../../images/team1.png'
import Icon2 from '../../images/Team2.png'
import Icon3 from '../../images/Team3.png'

const Team = () => {
  return (
    <TierContainer>
        <TierH1>Team</TierH1>
        <TierWrapper>
            <TierCard>
                <TierIcon src={Icon1}/>
                <TierH2>Greg Rubin</TierH2>
                <TierP>CEO/COO</TierP>
                
                
            </TierCard>
            <TierCard>
                <TierIcon src={Icon2}/>
                <TierH2>Adithya P</TierH2>
                <TierP>Graphic Designer / Business Development</TierP>
                
            </TierCard>
            <TierCard>
                <TierIcon src={Icon3}/>
                <TierH2>Ted Chantarawanick</TierH2>
                <TierP>Advisor</TierP>
                
            </TierCard>
        </TierWrapper>
    </TierContainer>
  )
}

export default Team