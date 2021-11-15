import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Portfolios from './components/Portfolios/Portfolios'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <Header/>
          <About/>
          <Footer/>
        </Route>
        <Route path="/skills">
          <Header/>
          <Skills/>
          <Footer/>
        </Route>
        <Route path="/portfolio">
          <Header/>
          <Portfolios/>
          <Footer/>
        </Route>
        <Route path="/contact">
          <Header/>
          <Contact/>
          <Footer/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
          <Footer/>
        </Route>
        
      </Switch>
    </Router>
  )
}

export default App

