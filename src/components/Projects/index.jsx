import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constants'

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
@media (max-width: 960px) {
        flex-direction: column;
    }
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
@media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
}
`
const Description=styled.div`
font-size:18px;
max-width:300px;
text-align:center;
color:${({theme})=>theme.text_secondary};
@media (max-width:768px){
font-size:16px;
@media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
}
`
const CardContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:28px;
`
export default function Projects() {
  return (
    <Container id="projects">
        <Wrapper>
            <Title>Projects</Title>
            <Description>
            Here are some of my Projects.
            </Description>
            <CardContainer>
                {projects.map((project)=> <ProjectCard project={project}/>) }
            </CardContainer>
        </Wrapper>
    </Container>
  )
}
