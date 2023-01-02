import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import './SkillsStyle.css';

import react_icon from "../../Assets/react_icon.png";
import javascript_icon from "../../Assets/javascript_icon.png";
import css_icon from "../../Assets/css_icon.png";
import html_icon from "../../Assets/html_icon.png";
import october_icon from "../../Assets/october_icon.png";
import jquery_icon from "../../Assets/jquery_icon.png";
import mysql_icon from "../../Assets/mysql_icon.png";
import php_icon from "../../Assets/php_icon.png";
import github_black_icon from "../../Assets/github_black_icon.png";
import git_icon from "../../Assets/git_icon.png";
import figma_icon from "../../Assets/figma_icon.png";

import main_react_icon from "../../Assets/main_react_icon.png";
import main_js_icon from "../../Assets/main_js_icon.png";
import main_css_icon from "../../Assets/main_css_icon.png";
import main_html_icon from "../../Assets/main_html_icon.png";
import main_october_icon from "../../Assets/main_october_icon.png";
import main_jquery_icon from "../../Assets/main_jquery_icon.png";
import main_mysql_icon from "../../Assets/main_mysql_icon.png";
import main_php_icon from "../../Assets/main_php_icon.png";
import main_github_icon from "../../Assets/main_github_icon.png";
import main_git_icon from "../../Assets/main_git_icon.png";
import main_figma_icon from "../../Assets/main_figma_icon.png";

const SkillsComponent = () => {
//To run the AOS library
useEffect(() => {
	AOS.init();
	AOS.refresh();
}, []);
//If the width of screen is below 500px
let bg_img_size1 = "",bg_img_size2 = "";
const mq = window.matchMedia("(max-width: 501px)");
if (mq.matches) {
    bg_img_size1 = "90%";
    bg_img_size2 = "80%";
}
else{
    bg_img_size1 = "40%";
    bg_img_size2 = "30%";
}
//Slider image in skills container
function Slider_Effects(){
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_react_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom right";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size2;
    }, 10);
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_js_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom center";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size1;
    }, 3000);
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_css_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom right";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size2;
    }, 6000);
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_html_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom center";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size1;
    }, 9000);
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_october_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom right";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size2;
    }, 12000);
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_jquery_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom center";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size1;
    }, 15000);
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_mysql_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom right";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size2;
    }, 18000);
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_php_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom center";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size1;
    }, 21000);
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_github_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom right";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size2;
    }, 24000);
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_git_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom center";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size1;
    }, 27000);
    setTimeout(function () {
        document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+main_figma_icon+")";
        document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom right";
        document.getElementsByClassName("skills_content")[0].style.backgroundSize = bg_img_size2;
    }, 30000);
}
//Reset the slider function after all the images was showed
Slider_Effects();
setInterval(function () {
    Slider_Effects();
}, 33000);

function hover_skill(image_path){
    document.getElementsByClassName("skills_content")[0].style.backgroundImage = "url("+image_path+")";
    document.getElementsByClassName("skills_content")[0].style.backgroundPosition = "bottom right";
    document.getElementsByClassName("skills_content")[0].style.backgroundSize = "40%";
}
  return (
	<Container className='skills__container' id="skills">
		<Row className='skills-title__wrapper'>
			<Col data-aos="fade-up" data-aos-duration="1000">
				<p className='section__title'>My Skills</p>
			</Col>
		</Row>
		<Row>
			<Col data-aos="fade-up" data-aos-duration="1000">
				<p className='section__caption'>The following are the tech stacks that I used on my previous projects. These technologies help me improve the output in my development. Moreover, I continuously improve my knowledge in React JS so I can provide more awesome websites and web applications.</p>
			</Col>
		</Row>

		<div className="skill-box">
			<div className="skills_content"
				style={{backgroundImage :`url(${main_react_icon})`}}
				data-aos="fade-up" data-aos-duration="1000"
			>
				<p className="title">Framework</p>

				<div className="skills_box">
					<div className="skills" onMouseOver={() =>{ hover_skill(main_react_icon)}}>
						<div className="icon"><img alt="" src={react_icon}/></div>
						<div className="text"><span>React JS</span></div>
					</div>
				</div>

				<p className="title">Front End</p>
				<div className="skills_box">
					<div className="skills" onMouseOver={() =>{ hover_skill(main_html_icon)}}>
						<div className="icon"><img alt="" src={html_icon}/></div>
						<div className="text"><span>HTML 5</span></div>
					</div>
					<div className="skills" onMouseOver={() =>{ hover_skill(main_css_icon)}}>
						<div className="icon"><img alt="" src={css_icon}/></div>
						<div className="text"><span>CSS</span></div>
					</div>
					<div className="skills" onMouseOver={() =>{ hover_skill(main_js_icon)}}>
						<div className="icon"><img alt="" src={javascript_icon}/></div>
						<div className="text"><span>Javascript</span></div>
					</div>
					<div className="skills" onMouseOver={() =>{ hover_skill(main_jquery_icon)}}>
						<div className="icon"><img alt="" src={jquery_icon}/></div>
						<div className="text"><span>Jquery</span></div>
					</div>
					<div className="skills" onMouseOver={() =>{ hover_skill(main_october_icon)}}>
						<div className="icon"><img alt="" src={october_icon}/></div>
						<div className="text"><span>OctoberCMS</span></div>
					</div>
				</div>

				<p className="title">Back End</p>
				<div className="skills_box">
					<div className="skills" onMouseOver={() =>{ hover_skill(main_mysql_icon)}}>
						<div className="icon"><img alt="" src={mysql_icon}/></div>
						<div className="text"><span>MySQL</span></div>
					</div>
					<div className="skills" onMouseOver={() =>{ hover_skill(main_php_icon)}}>
						<div className="icon"><img alt="" src={php_icon}/></div>
						<div className="text"><span>PHP</span></div>
					</div>
				</div>

				<p className="title">Others</p>
				<div className="skills_box">
					<div className="skills" onMouseOver={() =>{ hover_skill(main_github_icon)}}>
						<div className="icon"><img alt="" src={github_black_icon}/></div>
						<div className="text"><span>GitHub</span></div>
					</div>
					<div className="skills" onMouseOver={() =>{ hover_skill(main_git_icon)}}>
						<div className="icon"><img alt="" src={git_icon}/></div>
						<div className="text"><span>GIT</span></div>
					</div>
					<div className="skills" onMouseOver={() =>{ hover_skill(main_figma_icon)}}>
						<div className="icon"><img alt="" src={figma_icon}/></div>
						<div className="text"><span>Figma</span></div>
					</div>
				</div>

			</div>
		</div>

	</Container>
  )
}

export default SkillsComponent