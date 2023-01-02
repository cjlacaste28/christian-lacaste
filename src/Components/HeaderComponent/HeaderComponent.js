import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeaderStyle.css';
import headerWave from '../../Assets/header-wave.svg';
import portrait from '../../Assets/my_self.png';
import cv from '../../Assets/Lacaste,Christian-Resume.pdf';
import fb from '../../Assets/header-fb.svg';
import twitter from '../../Assets/header-twitter.svg';
import github from '../../Assets/header-github.svg';
import linkedin from '../../Assets/header-linkedin.svg';

const HeaderComponent = () => {
  return (
	<Container className='header__container' fluid >
		<Container className='header__container--inner'>
			<Row className='header-content__wrapper'>
				<Col className='header-column__left'>
					<p className='header__name'>Christian Lacaste</p>
					<p className='header__role'>Front-end Web Developer</p>
					<Row className='header-cta__wrapper'>
						<a href='#services' className='know-more__a hover-shadow'>Know More</a>
						<a href={cv} target='_blank' rel="noreferrer"className='download-cv__a hover-shadow'>Download CV </a>
					</Row>
					<Row className='header-social__wrapper'>
						<a href='https://facebook.com/cjlacaste28' target='_blank' rel="noreferrer">
							<img src={fb} alt='facebook' id='facebook-icon' className='header-icon'/>
						</a>
						<a href='https://twitter.com/cjlacaste28' target='_blank' rel="noreferrer">
							<img src={twitter} alt='twitter' id='twitter-icon' className='header-icon' />
						</a>
						<a href='https://github.com/cjlacaste28' target='_blank' rel="noreferrer">
							<img src={github} alt='github' id='github-icon' className='header-icon' />
						</a>
						<a href='https://www.linkedin.com/in/christianlacaste' target='_blank' rel="noreferrer">
							<img src={linkedin} alt='linken' id='linken-icon' className='header-icon' />
						</a>
					</Row>
				</Col>
				<Col className='header-column__right'>
					<img src={portrait} alt='christian lacaste' className='header__portrait'/>
				</Col>
			</Row>
		</Container>
		<img src={headerWave} alt='header wave' className='header__wave' />
	</Container>
  )
}

export default HeaderComponent