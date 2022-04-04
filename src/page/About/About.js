import React from 'react';

import './About.css'

import AboutImg from '../../images/about.jpeg'

const About = () => {
    // dynamic title
    document.title = 'Organic Farm || About'
    return (
        <section className='about'>
            <h1 className='mb-4'>About</h1>
            <div className="about_body p-4 rounded">
                <div className='row align-items-center gx-5'>
                    <div className="col-md-7">
                        <p>
                            Hello everyone,<br />
                            welcome to our site. it launched in 2022, in bangladesh online marketplace. it suppported by a wide range of tailored marketing, data and service solutions. Organic farm has 300 active seller and 20 brands and 10000 consumer across the Bangladesh. 
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src={AboutImg} alt="" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;