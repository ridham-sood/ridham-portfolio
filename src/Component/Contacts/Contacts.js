import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBloggerB,
    FaRedditAlien,
    FaStackOverflow,
    FaCodepen,
    FaInstagram,
    FaGitlab,
    FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import theme from '../../Data/Theme';
import { socialsData } from '../../Data/socialsData';
import { contactsData } from '../../Data/contactsData';
import './Contacts.css';

function Contacts() {

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.primary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.secondary }}>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form method='POST' action="https://getform.io/f/12539cea-1abc-4dec-952f-0e5a499d88e5">
                            <div className='input-container'>
                                <label htmlFor='Name' style={{ color: theme.tertiary }}>
                                    Name
                                </label>
                                <input className='form-input' type="text" placeholder='Name' name='name' required />
                            </div>
                            <div className='input-container'>
                                <label htmlFor='Email' style={{ color: theme.tertiary }}>
                                    Email
                                </label>
                                <input className='form-input' type="email" placeholder='Email' name='email' required />
                            </div>
                            <div className='input-container'>
                                <label htmlFor='Message' style={{ color: theme.tertiary }}>
                                    Message
                                </label>
                                <textarea className='form-message' name="message" rows="10" placeholder='Message'></textarea>
                            </div>

                            <div className='submit-btn'>
                                <button className='submit-icon' style={{ color: theme.primary }}>Let's Talk</button>
                            </div>
                        </form>
                    </div>

                    <div className='contacts-details'>
                        <div href={`mailto:ridhamsood1@gmail.com`} className='personal-details' >
                            <div>
                                <FiAtSign style={{ color: theme.tertiary }}/>
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </div>
                        <div href={`tel:${contactsData.phone}`} className='personal-details' >
                            <div>
                                <FiPhone style={{ color: theme.tertiary }}/>
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </div>
                        <div className='personal-details'>
                            <div>
                                <HiOutlineLocationMarker style={{ color: theme.tertiary }}/>
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className='socialmedia-icons'>
                            <div className='landing--social'>
                                <a href='https://www.instagram.com/benner.exe/' target='_blank' rel='noreferrer'>
                                    <FaInstagram className='landing--social' style={{ color: theme.grey }} aria-label='LinkedIn' />
                                </a>
                            </div>
                            <div className='landing--social'>
                                <a href='https://twitter.com/ridhamsood' target='_blank' rel='noreferrer'>
                                    <FaTwitter className='landing--social' style={{ color: theme.grey }} aria-label='LinkedIn' />
                                </a>
                            </div>
                            <div className='landing--social'>
                                <a href='https://www.linkedin.com/in/ridham-sood/' target='_blank' rel='noreferrer'>
                                    <FaLinkedin className='landing--social' style={{ color: theme.grey }} aria-label='LinkedIn' />
                                </a>
                            </div>
                            <div className='landing--social'>
                                <a href='https://github.com/ridham-sood' target='_blank' rel='noreferrer'>
                                    <FaGithub className='landing--social' style={{ color: theme.grey }} aria-label='LinkedIn' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
