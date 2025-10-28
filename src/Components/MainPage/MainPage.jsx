import React from 'react'
import Navbar from '../Navbar/Navbar'   
import Home from '../Home/Home'
import About from '../About/About'
import PageIcon from '../assets/images/PageIcon/PageIcon'
import Project from '../Projects/Project'
import ProjectList from '../ProjectList/ProjectList'
import FAQ from '../FAQ/FAQ'
import FAQSection from '../FAQSection/FAQSections'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
export default function MainPage() {
  return (
    <div className="mainPage">
     <Navbar />
         <Home />
         <About />
         <PageIcon/>
         <Project />
         <ProjectList />
         <FAQ />
         <FAQSection />
         <Contact />
         <Footer />

    </div>
  )
}
