import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Card=styled.div`
width:330px;
height:490px;
background-color:${({theme})=>theme.card};
cursor:pointer;
border-radius:10px;
box-shadow:0 0 12px 4px rgba(0, 0, 0, 0.4);
overflow:hidden;
transition:all 0.5s ease-in-out;
padding:26px 20px;
display:flex;
flex-direction:column;
gap:14px;
&:hover{
transform:translateY(-10px);
box-shadow:0 0 50px 4px rgba(0, 0, 0, 0.6);
filter:brightness(1.1);
}
`
const Image=styled.img`
width:100%;
height:180px;
background-color:${({theme})=>theme.white};
border-radius:10px;
object-fit:cover;
box-shadow:0 0 16px 2px rgba(0, 0, 0, 0.3);
`
const Tags=styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
gap:8px;
// margin-top:4px;
align-items:center;
`
const Tag=styled.span`
font-size:12px;
font-weight:400px;
color:${({theme})=>theme.primary};
padding:2px 8px;
border-radius:10px;
`
const Details=styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:0px;
padding:0px 2px;
`
const Members=styled.div`
display:flex;
align-items:center;
padding-left:10px;
`
const Title=styled.div`
font-size:20px;
font-weight:600;
color:${({theme})=> theme.text_secondary};
// overflow:hidden;
// text-overflow:ellipsis;
// white-space:nowrap;
max-width:100%
`
const Demo=styled.a`
text-decoration:none;
height:30px;
width:70px;
max-width:100%;
padding:4px 5px;
margin-top:10px;
text-align:center;
color:${({theme})=>theme.white};
// border: 2px solid white;
border-radius:20px;
cursor:pointer;
font-size:14px;
font-weight:600;
background:${({theme})=>theme.primary};
transition: all 0.2 ease-in-out !important;
box-shadow:20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
`
const Github=styled.a`
text-decoration:none;
height:30px;
width:90px;
max-width:100%;
padding:4px 5px;
margin-top:10px;
text-align:center;
color:${({theme})=>theme.white};
// border: 2px solid white;
border-radius:20px;
cursor:pointer;
font-size:14px;
font-weight:600;
background:${({theme})=>theme.primary};
transition: all 0.2 ease-in-out !important;
box-shadow:20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
`
const Description=styled.div`
font-weight:400;
color:${({theme})=>theme.text_secondary};
margin-top:8px;
max-width:100%;
`
const Links=styled.div`
display: flex;
justify-content: space-between;
`
export default function ProjectCard({project}) {
  return (
    <Card data-aos="flip-up" data-aos-duration="1000">
        <Image src={project.image}/>
        <Tags>
            {project.tags.map((tag)=>(
            <Tag key={tag}>{tag}</Tag>))}
        </Tags>
        <Details>
            <Title>{project.title}</Title>
            <Links>
            <Demo href= {project.webapp} target='new'>Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Demo>
            <Github href= {project.github} target='new'>Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Github>
            </Links>
            <Description>{project.description}</Description>
        </Details>
        <Members></Members>
    </Card>
  )
}
