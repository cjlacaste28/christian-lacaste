import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import './ProjectsStyle.css';
import projectsWave from '../../Assets/projectsWave.svg';
import project1Img from '../../Assets/p1.jpg';
import project2Img from '../../Assets/p2.jpg';
import project3Img from '../../Assets/p3.jpg';
import SkillUsed from '../SkillUsedComponent/SkillUsedComponent';

const ProjectsComponent = () => {
//To run the AOS library
useEffect(() => {
	AOS.init();
	AOS.refresh();
}, []);

  return (
	<Container className='projects__container pb-5' fluid>
		<img src={projectsWave} alt='project-wave' className='projects__wave' id='projects'/>
		<Container className='projects__container--inner'>
			<Row className='my-5' data-aos="fade-up" data-aos-duration="1000">
        		<Col>
					<p className='section__title' >My Projects</p>
				</Col>
			</Row>
			<Row className='project__container mt-5' data-aos="fade-up" data-aos-duration="1000">
        		<Col className='project__image--container col-12 col-xl-6 mb-md-5'>
					<img className='project__image w-100' src={project1Img} alt='portfolio' />
				</Col>
				<Col className='project__details--container col-12 col-xl-6'>
					<Row className='project__title--wrapper mt-2'>
						<p className='project__title'>Christian Lacaste - Portfolio</p>
					</Row>
					<Row className='project__description--wrapper mt-3'>
						<p className='project__description'>This is my personal portfolio built using React JS. Before I start coding I conceptualize the color pallet that I will be using in this project. Then I start designing the layouts at Figma then convert them into codes. I used several js libraries like react-vertical-timeline and AOS.</p>
					</Row>
					<Row className='project__skills--wrapper mt-3'>
						<SkillUsed skills={['REACT JS', 'HTML', 'CSS', 'JAVASCRIPT', 'NODE JS']}></SkillUsed>
					</Row>
					<Row className='project__links--wrapper mt-5'>
						<a href="https://cjlacaste.com/" target="_blank" rel="noreferrer" className='project__link'>LIVE SITE</a>
						<a href="https://github.com/cjlacaste28/christian-lacaste
						" target="_blank" rel="noreferrer" className='project__link'>VIEW CODE</a>
						<a href="https://www.figma.com/file/Z9mdHBmelOb1eysB4fMUle/Christian-Lacaste?node-id=1%3A2&t=5VAIuo0whvzb7Fu6-1" target="_blank" rel="noreferrer" className='project__link'>FIGMA DESIGN</a>
					</Row>
				</Col>
			</Row>
			<Row className='project__container pt-5' data-aos="fade-up" data-aos-duration="1000">
        		<Col className='project__image--container col-12 col-xl-6 mb-md-5'>
					<img className='project__image w-100' src={project2Img} alt='enfra-project' />
				</Col>
				<Col className='project__details--container col-12 col-xl-6'>
					<Row className='project__title--wrapper mt-2'>
						<p className='project__title'>McDonough Dentist - John Chaney, DDS</p>
					</Row>
					<Row className='project__description--wrapper mt-3'>
						<p className='project__description'>During my employment at EnfraUSA, this is one of the websites I migrated from a legacy website to a new platform using October CMS. During the process of migrating, we make sure that the design and style look good and it is responsive to all devices.</p>
					</Row>
					<Row className='project__skills--wrapper mt-3'>
						<SkillUsed skills={['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'OCTOBER CMS']}></SkillUsed>
					</Row>
					<Row className='project__links--wrapper mt-5'>
						<a href="https://www.doctorchaney.com/" target="_blank" rel="noreferrer" className='project__link'>LIVE SITE</a>
					</Row>
				</Col>
			</Row>
			<Row className='project__container mt-5' data-aos="fade-up" data-aos-duration="1000">
        		<Col className='project__image--container col-12 col-xl-6 mb-md-5'>
					<img className='project__image w-100' src={project3Img} alt='enfra-project' />
				</Col>
				<Col className='project__details--container col-12 col-xl-6'>
					<Row className='project__title--wrapper mt-2'>
						<p className='project__title'>Saritory - Inventory Management</p>
					</Row>
					<Row className='project__description--wrapper mt-3'>
						<p className='project__description'>Saritory is a web application that provides inventory management for sari-sari store owners. This projects was created during my KodeGo Bootcamp days.<br/><b>Demo Account -</b> user: demo1 / pw: password </p>
					</Row>
					<Row className='project__skills--wrapper mt-3'>
						<SkillUsed skills={['HTML', 'SASS', 'JAVASCRIPT', 'BOOTSTRAP', 'NODE JS']}></SkillUsed>
					</Row>
					<Row className='project__links--wrapper mt-5'>
						<a href="https://lacasteam.github.io/saritory/" target="_blank" rel="noreferrer" className='project__link'>LIVE SITE</a>
						<a href="https://github.com/cjlacaste28/saritory" target="_blank" rel="noreferrer" className='project__link'>VIEW CODE</a>
						<a href="https://www.figma.com/file/VGvk1nj6v2uKE3Q4VBL1jj/Saritory?node-id=0%3A1&t=0R6no9BEcc5jZ6AG-1" target="_blank" rel="noreferrer" className='project__link'>FIGMA DESIGN</a>
					</Row>
				</Col>
			</Row>
		</Container>
	</Container>
  )
}

export default ProjectsComponent;