import { Link } from 'react-router-dom';
import Logos from '../../assets/images/title.png'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../Logo';
import Loader from 'react-loaders';


const Home = () =>{
   const[letterClass,setletterClass] =useState('text-animate')
   const jobarray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']

useEffect(() =>{
    setTimeout(() => {
       return setletterClass('text-animate-hover')
    }, 4000)
   },  [])



    return(
        <>
        <div className="container home-page">
<div className="text-zone">
    <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
    <img src={Logos} alt="" /><br />
    
    <AnimatedLetters letterClass={letterClass} strArray={jobarray} idx={22} />
    </h1>
    <h2>Full-Stack Developer</h2>
    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
</div>
<Logo />
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home;