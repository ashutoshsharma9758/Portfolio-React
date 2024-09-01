import React from 'react'
import styled from 'styled-components'
import { experiences } from '../../data/constants'
import ExperienceCard from '../Cards/ExperienceCard'
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
margin-top:80px;
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
const TimeLineSection=styled.div`
width:100%;
max-width:1000px;
margin-top:10px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center:
gap:12px;
padding-bottom:12px;
`
export default function Experience() {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Description>
          Here are some of my projects
        </Description>
        <TimeLineSection >
          {experiences.map((experience, idx)=>(
            <ExperienceCard experience={experience}/>
          ))}
        </TimeLineSection>
      </Wrapper>
    </Container>
  )
}
