import { useState,useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'




const About = () => {

    const[letterClass,setletterClass] =useState('text-animate')
    useEffect(() =>{
        setTimeout(() => {
           return setletterClass('text-animate-hover')
        }, 3000)
       },  [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a third-year student at BITS Pilani with a solid foundation in
            web development, including proficiency in the MERN stack. I have
            hands-on experience building full-stack applications and a keen
            interest in leveraging technology to solve real-world problems. My
            projects include developing dynamic and responsive web applications
            that provide seamless user experiences and robust back-end services.
            I am passionate about learning new technologies and continuously
            improving my skills.
          </p>
        
        </div>
    <div className="stage-cube-cont">
        <div className="cubespinner">
            <div className="face1">
                <FontAwesomeIcon icon={faAngular} color='#dd0031'/>
                
            </div>
            <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                
            </div>
            <div className="face3">
                <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                
            </div>
            <div className="face4">
                <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
                
            </div>
            <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                
            </div>
            <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color='#ec4d28'/>
                
            </div>
        </div>
    </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
export default About
