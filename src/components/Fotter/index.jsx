import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
const FooterContainer=styled.div`
width:100%;
padding:2rem 0;
display:flex;
justify-content:center;
`;

const FooterWrapper=styled.div`
width:100%;
max-width:1200px;
display:flex;
flex-direction:column;
gap:14px;
align-items:center;
padding:1rem;
color:${({theme})=>theme.text_primary}
`;

const Logo=styled.h1`
font-weight:600;
font-size:20px;
color:${({theme})=>theme.primary};
`;

const Nav=styled.nav`
width:100%;
max-width:800px;
margin-top:0.5rem;
display:flex;
flex-direction:row;
gap:2rem;
justify-content:center;
@media (max-width:768px){
flex-wrap:wrap;
gap:1rem;
justify-content:center;
text-align:center;
font-size:12px;
}
`;
const NavLink=styled.a`
color:${({theme})=>theme.text_primary};
text-decoration:none;
font-size:1.2rem;
transition:color 0.2s ease-ini-out;
&:hover{
color:${({theme})=>theme.primary};
}
@media (max-width:768px){
font-size:1rem;
}
`
const SocialMediaIcons=styled.div`
display:flex;
margin-top:1rem;
`;
const SocialMediaIcon=styled.a`
display:inline-block;
margin:0 1rem;
font-size:1.5rem;
color:${({theme})=>theme.text_primary};
transition:color 0.2 ease-in-out;
&:hover{
color:${({theme})=>theme.primary};
}
`
export default function Fotter() {
  return (
    <FooterContainer>
        <FooterWrapper>
            <Logo> Ashutosh Sharma</Logo>
            <Nav data-aos="zoom-in" data-aos-duration="1000">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#projects">Projects</NavLink>
            </Nav>
            <SocialMediaIcons>
                <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon/></SocialMediaIcon>
                <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon/></SocialMediaIcon>
            </SocialMediaIcons>
        </FooterWrapper>
    </FooterContainer>
  )
}
