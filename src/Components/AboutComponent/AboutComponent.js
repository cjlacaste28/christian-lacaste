import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import './AboutStyle.css';
import aboutWaveTop from '../../Assets/aboutWave-top.svg';
import aboutWaveBot from '../../Assets/aboutWave-bot.svg';
import timelineElements from "../../Assets/timelineElements";
import { ReactComponent as WorkIcon } from "../../Assets/work.svg";
import { ReactComponent as SchoolIcon } from "../../Assets/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const AboutComponent = () => {

//To run the AOS library
useEffect(() => {
	AOS.init();
	AOS.refresh();
}, []);

//background for icons
let workIconStyles = { background: "#de9e48" };
let schoolIconStyles = { background: "#de9e48" };

  return (
	<Container className='about__container' fluid  id='about'>
		<img src={aboutWaveTop} alt='about wave top' className='about__wave--top' />
		<Container className='about-description__container'  data-aos="fade-up" data-aos-duration="1000">
			<Row>
        		<Col>
					<p className='section__title'>About Me</p>
				</Col>
			</Row>
			<Row>
        		<Col>
					<p className='section__caption'>I am Christian, a Front-end web developer with exposure to designing and building responsive websites using Content Management System (CMS) like October CMS. Proficient with HTML CSS, and JS libraries and frameworks with a touch of UI and UX design.
					<br></br><br></br>
					I always want to improve my skills to work efficiently at my job. It excites me to learn new things that can be used in achieving my dream and goals.</p>
				</Col>
			</Row>
			<div className='timeline__container mt-5'>
				<h1 className="section__title pt-5">Timeline</h1>
			<VerticalTimeline>
				{timelineElements.map((element) => {
				let isWorkIcon = element.icon === "work";
				let showButton =
					element.buttonText !== undefined &&
					element.buttonText !== null &&
					element.buttonText !== "";

				return (
					<VerticalTimelineElement
					key={element.key}
					date={element.date}
					dateClassName="date"
					iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
					icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
					>
					<h3 className="vertical-timeline-element-title">
						{element.title}
					</h3>
					<h5 className="vertical-timeline-element-subtitle">
						{element.location}
					</h5>
					<p id="description">{element.description}</p>
					{showButton && (
						<a
						className={`button ${
							isWorkIcon ? "workButton" : "schoolButton"
						}`}
						href="https://verified.cv/en/verify/682229914880" target="_blank" rel="noreferrer"
						>
						{element.buttonText}
						</a>
					)}
					</VerticalTimelineElement>
				);
				})}
			</VerticalTimeline>
			</div>
		</Container>
		<img src={aboutWaveBot} alt='about wave bot' className='about__wave--bot' />
	</Container>
  )
}

export default AboutComponent