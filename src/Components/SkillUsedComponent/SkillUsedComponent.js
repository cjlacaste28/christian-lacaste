import React from 'react'
import './SkillUsedStyle.css';


const SkillUsedComponent = ({skills}) => {

	
	console.log('====================================');
	console.log(skills);
	console.log('====================================');


  return (
	<div className='skills-used__container d-flex'>
		{skills.map(skill =>{
			return <div className='skill-item__wrapper'><span className="skill-item" key={skill}>{skill}</span></div>
		})}
	</div>
  )
}

export default SkillUsedComponent