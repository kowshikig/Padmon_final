import styled from "styled-components";

export const RoadmapContainer = styled.div`
    
    background: #f9f9f9;
    margin-bottom: 2em;
    
`
export const RoadmapWrapper = styled.div`
    
    display:flex;
    
    width:100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding:0 1.5em;
    justify-content: center;
    gap:1em;

    @media screen and (max-width:768px){
        flex-direction: column;
    }
`
export const LeftWrapper = styled.div`
   
   display:flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   gap:10em;

   @media screen and (max-width:1000px){
        gap:1em;
   }

`
export const CenterWrapper = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;


    
    @media screen and (max-width:1000px){
        display:none;
    } 
`
export const RightWrapper = styled.div`
    
    display: flex;
    align-items: center;

`
export const Card = styled.div`
    
    background:#5928e5;
    display:flex;
    flex-direction: column;
    padding:2em;
    justify-content: flex-start;
    max-width: 500px;
    border-radius: 25px;

    @media screen and (max-width:480px) {
        max-width: 400px;
        
    }

`
export const Rh1 = styled.h1`
    font-size: 2rem;
    margin-bottom: 1em;
    color:#fff;
    

    @media screen and (max-width:768px){
        font-size: 1.7rem;
    }
`
export const Rp = styled.p`
    display: flex;
    
    font-size: 20px;
    color:#fff;


    

    @media screen and (max-width:768px){
        font-size: 16px;
    }
`
export const CIcon = styled.img`
    width:300px;
    height:1000px;
    
`
export const Space = styled.p`
    
    margin-right: 5px;
`