import React from 'react'
import HeaderComponent from './HeaderComponent/HeaderComponent'
import NavbarComponent from './NavbarComponent/NavbarComponent'
import ServicesComponent from './ServicesComponent/ServicesComponent'
import AboutComponent from './AboutComponent/AboutComponent'
import SkillsComponent from './SkillsComponent/SkillsComponent'
import ProjectsComponent from './ProjectsComponent/ProjectsComponent'
import ContactComponent from './ContactComponent/ContactComponent'

const MainComponent = () => {
  return (
    <>
        <NavbarComponent />
        <HeaderComponent />
        <ServicesComponent />
        <AboutComponent />
        <SkillsComponent />
        <ProjectsComponent />
        <ContactComponent />
    </>
  )
}

export default MainComponent