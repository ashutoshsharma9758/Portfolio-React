import React from 'react'
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
z-index:1;
align-items:center;
`
const Wrapper=styled.div`
max-width:1100px;
position:relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
gap:12px;
`
const Title=styled.div`
font-size:42px;
font-weight:600;
text-align:center;
margin-top:30px;
color:${({theme})=>theme.text_primary};
@media (max-width:768){
margin-top:12px;
font-size:32px;
}
`
const Description=styled.div`
font-size:18px;
max-width:300px;
text-align:center;
color:${({theme})=>theme.text_secondary};
@media (max-width:768px){
font-size:16px;
}
`
const SkillsContainer=styled.div`
width:800px;
display:flex;
flex-wrap:wrap;
margin-top:30px;
justify-content:center;
gap:30px;
@media screen and (max-width:768px){
max-width:500px;
padding:10px 36px;
}
@media screen and (max-width:480px){
max-width:300px;
padding:10px 36px;
}
`
const Skill=styled.div`
display: flex;
justify-content:center ;
flex-direction:column;
align-items: center;  
gap:10px;       
width:150px;
height:150px;
background-color:${({theme})=>theme.card};
border:0.1px solid #306ee8;
box-shadow:rgba(23, 92, 230, 0.15) 0px 4px 24px;
border-radius:16px;
padding:10px 15px;
&:hover{
transition:all 0.5s ease-in-out;
transform:translateY(-10px);
}
@media (max-width:768px){
max-width:400px;
padding:15px 36px;
}
@media screen and (max-width:480px){
width:150px !important;
height:150px;
font-size:10px!important;
max-width:300x;
padding:10px 36px;
}
}
`
const SkillTitle=styled.h2`
font-size:20px;
font-weight:500;
color:${({theme})=>theme.text_secondary};
margin-bottom:10px;
text-align:center;
@media screen and (max-width:480px){
font-size:20px;
}
`
const Icon=styled.img`
width:40px;
height:60px;
margin-bottom:10px;
@media screen and (max-width:480px){
width:40px !important;
height:40px !important;
}
`

export default function Skills() {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Here are some of my skills.
        </Description>
        <SkillsContainer>
          {skills.map((item)=>(
            <Skill data-aos="zoom-in-right" data-aos-duration="1000">
              <Icon src={item.image}/>
              <SkillTitle>{item.title}</SkillTitle>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}
