import React, { useState } from 'react'
import {Link as LinkR} from 'react-router-dom';
import styled from 'styled-components';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Bio } from '../../data/constants';
const Nav= styled.div`
background-color:${({theme})=>theme.card_light};
height: 80px;
display:flex;
justify-content: center;
align-items:center;
font-size: 1.2rem;
position:sticky;
top:0;
z-index: 10;
@media screen and (max-width: 960px){
transition: 0.8s all ease;
}
`

const NavContainer= styled.div`
display: flex;
justify-content:space-between;
height:60px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1200px;
`
const NavLogo= styled(LinkR)`
width:80%;
padding:0 6px;
display:flex;
justify-self: flex-start;
cursor: pointer;
text-decoration:none;
align-items:center;
@media screen and (max-width: 640){
padding:0 0px;
}
`
const NavItems= styled.ul`
width:100%;
display: flex;
justify-content: center;
align-items: center;
gap: 32px;
list-style: none;

@media screen and (max-width: 760px){
display:none;
}
`
const NavLink= styled.a`
color:${({theme})=>theme.text_primary};
font-weight:500;
cursor:pointer;
text-decoration:none;
transition:all 0.2s ease-in-out;
&:hover{
color:${({theme})=>theme.primary}
};
`
const ButtonContainer=styled.div`
display:flex;
align-items:center;
justify-content:end;
width:80%;
height:100%;
padding:0 6px;
@media screen and (max-width: 640px){
display:none;
}
`
const GithubButton=styled.a`
text-decoration:none;
appearance: button;
background-color:transparent;
color:${({theme})=>theme.primary};
border: 1.8px solid ${({theme})=>theme.primary};
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
padding:0px 20px;
font-size:1rem;
font-weight:500;
cursor:pointer;
height:70%;
:hover{
background-color: ${({theme})=>theme.primary};
color:${({theme})=>theme.white};
}
@media screen and (max-width:640px){
font-size:0.8rem;
}
`
const MobileIcon=styled.div`
display:none;
@media screen and (max-width:768px){
display: ${({ open }) => (open ? 'none' : 'block')};
position:absolute;
top:0;
right:0;
transition:all 1s ease-in-out;
transform:translate(-100%, 50%);
font-size:1.5rem;
cursor:pointer;
color:${({theme})=>theme.text_primary};
}
`
const Span=styled.div`
padding:0 4px;
font-weight:bold;
font-size:18px;
`;
const MenuIcon=styled.div`
margin-bottom:78px;
   width: 900px;
   z-index:0;
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  opacity: 1;

// display:none;
// @media screen and (max-width:768px){
// display:block;
// position:absolute;
// top:0;
// right:0;
// font-size:1.5rem;
// cursor:pointer;
// color:${({theme})=>theme.text_primary};
// }
`;

const MobileMenu=styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.card_light};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 0;
  opacity:1;
  transition: all 0.2s ease-in-out;


// display:none;
// @media screen and (max-width:768px){
// display:block;
// position:absolute;
// top:0;
// right:0;
// font-size:1.5rem;
// cursor:pointer;
// color:${({theme})=>theme.text_primary};
// }
// order:1;
// display:flex;
// flex-direction:column;
// justify-content:center;
// gap:16px;
// position:absolute;
// top:0;
// left:0;
// width:100%;
// padding:0px 0px 0px 0px;
// background:${({theme})=>theme.card_light};
// box-shadow:0 5px 10px rgba(0, 0, 0, 0.3);
// z-index:1;
// opacity:1;
// transition:all 0.2 ease-in-out;
`
const MobileMenuLink=styled.a`
color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }


// color:${({theme})=>theme.text_primary};
// font-weight:500;
// cursor:pointer;
// text-decoration:none;
// transition:all 0.2 ease-in-out;
// &:hover{
// color:${({theme})=>theme.primary}
// };
`
const CloseMenu=styled.div`
display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 20px;
  right: 22px;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};

// width:100%;
// order:2;
// display-flex;
// justify-content:end;
// gap:12px;
// position:absolute;
// top:0;
// right:0;
// transform:translate(-100%, 50%);
// font-size:1.5rem;
// cursor:pointer;
// color:${({theme})=>theme.text_primary};
`
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/"><a style={{color:"white", cursor:"pointer"}}> <Span> Ashutosh Sharma </Span></a></NavLogo>
        <MobileIcon open={open}><FaBars onClick={()=>{
          setOpen(!open)
        }}/></MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
      {open &&<MenuIcon>
        <MobileMenu>
        <MobileMenuLink href="#about">About</MobileMenuLink>
        <MobileMenuLink href="#skills">Skills</MobileMenuLink>
        <MobileMenuLink href="#experience">Experience</MobileMenuLink>
        <MobileMenuLink href="#projects">Projects</MobileMenuLink>
        <MobileMenuLink href={Bio.github} target="_blank">Github Profile</MobileMenuLink>
         </MobileMenu>
         <CloseMenu> <FaTimes onClick={()=>{setOpen(!open)}}/> </CloseMenu>
         </MenuIcon>
         }
    </Nav>
  )
}
