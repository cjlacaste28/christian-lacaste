import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import './ContactStyle.css';
import fb from '../../Assets/contact-facebook.svg';
import twitter from '../../Assets/contact-twitter.svg';
import github from '../../Assets/contact-github.svg';
import linkedin from '../../Assets/contact-linkedin.svg';

const ContactComponent = () => {
  return (
	<Container className="contact__container" fluid id="contacts">
		<Container className="contact__container--inner">
			<Row className='contact-header__wrapper'>
				<Col>
					<p className='contact-header text-white'>STAY <span className='ascent-color'>CONNECTED</span></p>
				</Col>
			</Row>
			<Row className='contact-description__wrapper'>
				<Col>
					<p className='contact-description text-white'>
					Send me an email or say hi on linkedin if you would like to chat. I'd love to hear from you.
					</p>
				</Col>
			</Row>
			<Row className='contact-cta__wrapper'>
					<a href='mailto:christian092893@gmail.com' className='send-email__a hover-shadow'>Send Me an Email</a>
					<a href="https://www.linkedin.com/in/christianlacaste" target='_blank' rel="noreferrer"className='chat-linkedin__a hover-shadow'>Say Hi on linkedin</a>
			</Row>
			<Row className='contact-social__wrapper'>
					<a href='https://facebook.com/cjlacaste28' target='_blank' rel="noreferrer">
						<img src={fb} alt='facebook' id='facebook-icon' className='contact-icon'/>
					</a>
					<a href='https://twitter.com/cjlacaste28' target='_blank' rel="noreferrer">
						<img src={twitter} alt='twitter' id='twitter-icon' className='contact-icon' />
					</a>
					<a href='https://github.com/cjlacaste28' target='_blank' rel="noreferrer">
						<img src={github} alt='github' id='github-icon' className='contact-icon' />
					</a>
					<a href='https://www.linkedin.com/in/christianlacaste' target='_blank' rel="noreferrer">
						<img src={linkedin} alt='linken' id='linken-icon' className='contact-icon' />
					</a>
			</Row>
		</Container>
		<hr className='footer__divider'/>
		<Container className="footer__copyright">
			<Row>
                <Col>
					<p className='text-center text-white copyright'>Copyright &#169; 2023 Christian Lacaste</p>
				</Col>
			</Row>
		</Container>
	</Container>
  )
}

export default ContactComponent