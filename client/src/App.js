import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Insta from './components/Insta/Insta';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import Download from './components/DownloadFile/Download';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PageIsntAvailable from "./components/Work/PageIsntAvailable"
import Resume from './components/Resume/Resume';


function App() {
  return (
    <>
      <Router>
      <Switch>

  



        <Route path="/about">
          <Navbar/>
          <About/>
          <Footer/>
        </Route>

    <Route path="/skills">
      <Navbar/>
      <Skills/>
      <Download/>
      {/* <Resume/> */}
      <Footer/>
    </Route>

    <Route path="/resume">
       <Navbar/>
       <Resume/>
       <Footer/>
    </Route>

        <Route path="/tips">
          <Navbar/>
          <Insta/>
          <Footer/>
        </Route>

        <Route path="/work">
          <Navbar/>
          <Work/>
          <Footer/>
        </Route>


    <Route path="/contact">
      <Navbar/>
      <Contact/>
      <Footer/>
    </Route>
    
    <Route path="/PageIsntAvailable">
       <Navbar/>
       <PageIsntAvailable/>
       <Footer/>
    </Route>


       <Route exact path="/">
            <Navbar/>
            <Section/>
            <About/>
            <Skills/>
            <Insta/>
            <Work/>
            <Contact/>
            <Footer/>
            {/* <Resume/> */}
        </Route>
   
        <Route path="*">
       <ErrorPage/>
       </Route>
        

        </Switch>
      </Router>
    </>
  );
}

export default App