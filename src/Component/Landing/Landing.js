import React, { useContext } from 'react';
import './Landing.css';
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaInstagram
} from 'react-icons/fa';
import theme from '../../Data/Theme';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import resume from '../pdf/resume.pdf';


const ColorButton = styled(Button)(({ theme }) => ({
    color: "#ccd6f6",
    backgroundColor: '#0a192f',
    borderRadius: '30px',
    fontWeight: '500',
    fontSize: '20px',
    border: "3px solid #ff884b",


    '&:hover': {
        color: "#ff884b",
        backgroundColor: '#0a192f',
        border: "3px solid #ff884b"
    },
}));

function Landing() {

    const handleButtonClick = () => {
        window.open('./resume.pdf', '_blank');
      };

    return (
        <div className='landing' style={{ backgroundColor: theme.primary }} >
            <div className='landing--container' style={{ backgroundColor: theme.primary }} >
                <div className='landing--container-right' style={{ backgroundColor: theme.primary }} >
                    <div className='lcr--content' style={{ color: theme.orange }} >
                        <p>Hi,</p>
                        <h6>RIDHAM SOOD</h6>
                        <h1>I'm a Developer.</h1>
                        <div className='lcr-buttonContainer'>
                            <ColorButton variant="contained" href={resume}  target='_blank' rel='noreferrer'>Resume</ColorButton>
                            <div className='hidden-button'>
                                <Link to="contact" smooth={true} duration={500} >
                                    <ColorButton className='hidden-button' variant="contained">Contact</ColorButton>
                                </Link>
                            </div>

                        </div>
                        <div className='lcl--content'>
                            <div className='landing--social'>
                                <a href='https://www.instagram.com/benner.exe/' target='_blank' rel='noreferrer'>
                                    <FaInstagram className='landing--social' style={{ color: theme.tertiary }} aria-label='LinkedIn' />
                                </a>
                            </div>
                            <div className='landing--social'>
                                <a href='https://twitter.com/ridhamsood' target='_blank' rel='noreferrer'>
                                    <FaTwitter className='landing--social' style={{ color: theme.tertiary }} aria-label='LinkedIn' />
                                </a>
                            </div>
                            <div className='landing--social'>
                                <a href='https://www.linkedin.com/in/ridham-sood/' target='_blank' rel='noreferrer'>
                                    <FaLinkedin className='landing--social' style={{ color: theme.tertiary }} aria-label='LinkedIn' />
                                </a>
                            </div>
                            <div className='landing--social'>
                                <a href='https://github.com/ridham-sood' target='_blank' rel='noreferrer'>
                                    <FaGithub className='landing--social' style={{ color: theme.tertiary }} aria-label='LinkedIn' />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Landing;
