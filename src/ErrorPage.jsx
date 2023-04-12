import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
            <h1>404</h1>
            <Link to="/"><Button >Back to Home page</Button></Link>
        </div>
    );
};

export default ErrorPage;