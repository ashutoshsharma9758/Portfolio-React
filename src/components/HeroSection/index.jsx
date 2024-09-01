import React from 'react'
import styled from "styled-components";
import {Bio} from "../../data/constants"
import TypeWriter from "typewriter-effect";
import image from "../../images/ashutosh_sharma.jpg";
const HeroContainer=styled.div`
background-color:${({theme})=>theme.card_light};
display:flex;
justify-content:center;
align-items:center;
position:relative;
padding:50px 30px;
@media screen and (Max-width:960px){
padding:66px 16px;
}
@media screen and (max-width:640px){
padding:32px 16px};
align-items:center;
z-index=1;
`;

// const HeroBg= styled.div`
// position:absolute;
// display-flex;
// justify
// `

const HeroInnerContainer=styled.div`
// position:relative
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
max-width:1100px;
@media screen and (max-width:960px){
flex-direction:column;
}
`
const HeroLeftContainer= styled.div`
width:100%;
order:1;
@media screen and (max-width:640px){
order:2;
margin-bottom:32px;
display:flex;
align-items:center;
flex-direction:column;
};
`
const HeroRightContainer = styled.div`
width: 100%;
order: 2;
display: flex;
justify-content: end;
gap: 12px;
@media screen and (max-width: 640px) {
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  order: 1;
}
`;

const Title=styled.div`
font-size:50px;
font-weight:700;
color:${({theme})=>theme.text_primary};
line-height:68px;
@media screen and (max-width:640px){\
text-align:center;
font-size:40px;
line-height:48px;
margin-bottom:8px;
}
`
const TextLoop=styled.div`
font-size:32px;
font-weight:600px;
color:${({theme})=>theme.text_primary};
line-height:68px;
gap:12px;
display:flex;
@media screen and (max-width:640px){
text-align:center;
font-size:22px;
line-height:48px;
margin-bottom:16px;
};
`
const Span=styled.div`
color:${({theme})=>theme.primary};
cursor:pointer;
`
const SubTitle=styled.div`
fondt-size:20px;
color:${({theme})=>theme.text_primary};
line-height:32px;
margin-bottom:42px;
@media screen and (max-width:640px){
text-align:center;
font-size:16px;
line-height:32px;
}
`
const ResumeButton=styled.a`
text-decoration:none;
width:100%;
max-width:600px;
text-align:center;
align-item:center;
padding:12px 40px;
color:${({theme})=>theme.white};
// border: 2px solid white;
border-radius:30px;
cursor:pointer;
font-size:20px;
font-weight:600;
transition: all 0.4s ease-in-out !important;
background:${({theme})=>theme.primary};
box-shadow:20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
&:hover{
transform: scale(1.05);
    // transition: all 1s ease-in-out;
// box-shadow: 20px 20px 60px #1F2634;
// background:${({theme})=>theme.bg};
border: 5px solid ${({theme})=>theme.primary};
border-radius:35px;
}
@media (max-width:640px){
padding:12px 10px;
font-size:18px;
}
`;
const Image=styled.img`
width:100%;
height:100%;
position:relative;
border-radius:50%;
max-height:350px;
max-width:350px;
object-fit:cover;
object-position:center;
margin-left:150px;
border:2px solid ${({theme})=>theme.primary};
box-shadow:4px 8px 16px ${({theme})=>theme.primary};
@media screen and (max-width:640px){
align-items:center;
margin-left: auto;
margin-right:auto;
max-width:300px;
max-height:300px
}
`
export default function Hero() {
  return (
    <div id="about">
      <HeroContainer>
        {/* <HeroBg>
        </HeroBg> */}
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title> Hi, I am <br/> Ashutosh Sharma</Title>
            <TextLoop>
              I am a
              <Span>
                <TypeWriter options={{strings:Bio.roles,
                  autoStart:true,
                  loop:true,
                }}/>
              </Span>
            </TextLoop>
            <SubTitle> {Bio.description} </SubTitle>
            <ResumeButton href={Bio.resume} target="display"> Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={image} alt="image"></Image>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}
