import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from "../../assets/images/Sparsh.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faInstagram,faGithub} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () =>(
    <div className="nav-bar">
        <Link className='logo' to='/'>
        <img src= {LogoS}alt="logo" />

        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />

            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />

            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />

            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target='_blank'
                rel="noreferrer"
                href='https://www.linkedin.com/in/sparsh-jhanwar-796098250/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                target='_blank'
                rel="noreferrer"
                href='https://github.com/sparshj123'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                target='_blank'
                rel="noreferrer"
                href='https://www.instagram.com/sparshjhanwar?igsh=bHMweHhjc2ptdmgz&utm_source=qr'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar