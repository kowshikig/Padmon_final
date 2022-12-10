import styled from "styled-components";

export const TierContainer = styled.div`
    height:600px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #5928e5;

    @media screen and (max-width: 768px){
        height:1100px;
    }
    @media screen and (max-width:480px) {
        height:1100px;
    }
`
export const TierWrapper = styled.div`
    max-width:1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0 50px;

    @media screen and (max-width:1000px){
        grid-template-columns:1fr 1fr;
    }
    @media screen and (max-width:768px){
        grid-template-columns:1fr;
        padding: 0 20px;
    }
`
export const TierCard = styled.div`
    background:#5928e5;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
   
    max-height:600px;
    padding:30px;
    
    transition:all 0.2s ease-in-out;
    

    &:hover {
        transform:scale(1.02);
        transition:all 0.2s ease-in-out;
        cursor:pointer;
    }
`
export const TierIcon = styled.img`
    height:160px;
    width:160px;
    border-radius: 50%;
    margin-bottom:10px;
`
export const TierH1 = styled.h1`
    font-size:2.5rem;
    color:#fff;
    margin-bottom:30px;

    
    @media screen and (max-width:480px){
        font-size:2rem;
    }
`;

export const TierH2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom:10px;
    color:#fff;
    text-align: center;
`
export const TierP = styled.h1`
    font-size:1rem;
    text-align:center;
    color:#000;
`