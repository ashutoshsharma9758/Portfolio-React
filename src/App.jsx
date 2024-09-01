
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { darkTheme } from './utils/Theme';
import Navbar from './components/Navbar/index.jsx';
import Hero from './components/HeroSection/index.jsx';
import Skills from './components/Skills/index.jsx';
import Experience from './components/Experience/index.jsx';
import Projects from './components/Projects/index.jsx';
import Fotter from './components/Fotter/index.jsx';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Body = styled.div`
background-color: ${({theme})=>theme.bg};
width:100%;
height:100%;
overflow-x:hidden;
`;

const Wrapper = styled.div`
background : linear-gradient(
38deg,
rgba(204, 0, 187, 0.15) 0%,
rgba(201, 32, 184, 0) 50%
);
width:100%;
`
function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <Body>
        <Hero/>
        <Wrapper>
          <Skills/>
          <Experience/>
        </Wrapper>
        <Projects/>
        <Fotter/>
      </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App
