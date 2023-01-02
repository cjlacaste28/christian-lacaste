import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import './ServicesStyle.css';
import service1 from '../../Assets/service1.svg';
import service2 from '../../Assets/service2.svg';
import service3 from '../../Assets/service3.svg';


const ServicesComponent = () => {

//To run the AOS library
useEffect(() => {
	AOS.init();
	AOS.refresh();
}, []);

  return (
	<>
		<Container className='services__container' id="services">
			<Row className='services-title__wrapper'>
        		<Col data-aos="fade-up" data-aos-duration="1000">
					<p className='section__title'>What can I provide?</p>
				</Col>
			</Row>
			<Row className='services-content__wrapper'>
        		<Col className='service__wrapper' data-aos="fade-up" data-aos-duration="1000">
					<div className='service-img__wrapper'>
						<img src={service1} alt='service1' className='services__img'/>
					</div>
					<div className='service-text__wrapper'>
						<p className='service__caption'>Front-end Development</p>
						<p className='service__description'>I can create Front-end for website using HTML, CSS, Jquery, CMS and Javascript framework like ReactJS.</p>
					</div>
					
				</Col>
				<Col className='service__wrapper' data-aos="fade-up" data-aos-duration="1000">
					<div className='service-img__wrapper'>
						<img src={service2} alt='service1' className='services__img'/>
					</div>
					<div className='service-text__wrapper'>
						<p className='service__caption'>Responsive Design</p>
						<p className='service__description'>Capable to develop a website that is fully responsive for all types of devices and sizes of screens.</p>
					</div>
				</Col>
				<Col className='service__wrapper' data-aos="fade-up" data-aos-duration="1000">
					<div className='service-img__wrapper'>
						<img src={service3} alt='service1' className='services__img'/>
					</div>
					<div className='service-text__wrapper'>
						<p className='service__caption'>A Team Player</p>
						<p className='service__description'>Knows how to collaborate Ideas, knowledge and suggestions to colleagues to achieve the goals.</p>
					</div>
				</Col>
			</Row>
		</Container>
	</>
  )
}

export default ServicesComponent