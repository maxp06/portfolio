import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timeout);
        };
      }, []);

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
          <div className='message'>
            <p>
            As an ambitious computer science student at UNC Chapel Hill, my fervent desire is to secure a position within a renowned tech company that offers the prospect of engaging with cutting-edge technologies and tackling a broad spectrum of stimulating projects.
            </p>
            <p align="LEFT">
            During my free time, I enjoy spending time with family and friends, and have also been a soccer player for over a decade. Reach out if you want to do something!
            </p>
            <p>
            Some Projects:<br></br>
            Checkin System (Angular/Typescript/Python): 
            <a href="https://comp423-ex04-comp590-140-23fa-maxp06.apps.cloudapps.unc.edu/" target="_blank" style={{ color: 'yellow' }}> Link </a>
            <br></br>
            UNC CS Major Guide (HTML/CSS): 
            <a href="https://maxp06.github.io/UNC-CS-Major-Guide.gitbub.io/" target="_blank" style={{ color: 'yellow' }}> Link </a>
            <br></br>
            Nonograms JavaFX game (Java/MVC): 
            <a href="https://github.com/maxp06/nonograms-maxp06" target="_blank" style={{ color: 'yellow' }}> Link </a>
            </p>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
      </>
    )
    
}

export default About