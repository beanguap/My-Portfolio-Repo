import React from 'react'
import "./about.css";
import AboutImg from "../../assets/about.png";
import CV from "../../assets/Jeriel-CV.pdf";
import Info from './Info.jsx';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className='about__container container grid'>
                <img src={AboutImg} alt="" className='about__img' />
            
            </div>

            <div className='about__data'>
                <Info />

                <p className='about__description'>Welcome! I'm Jeriel Martinez Flores, an entry-level front-end developer specializing in crafting dynamic web experiences using React. With a fluent understanding of JavaScript and Node.js, I bring ideas to life by seamlessly blending creativity with functionality. My portfolio boasts proven projects that reflect my dedication to delivering innovative solutions and my passion for clean, user-centric design. Let's collaborate and build something remarkable together!
                </p>

               <a download="" href={CV} className='button button--flex'>Download CV
               </a>
            </div>       
    </section>
  )
}

export default About
