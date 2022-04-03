import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css'

const NotFound = () => {
        // dynamic title
        document.title = '4O4 not found'
    return (
        <div className='notFound text-center'>
            <div>
                <h1> 404! </h1>
                <h4> Page Not Found  </h4>
                <p> The page you ware looking for could not be found. </p>
                <Link to="/" className='primary_button'> <span>  Back to home </span> </Link>
            </div>
        </div>
    );
};

export default NotFound;