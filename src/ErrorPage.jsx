import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mt-5'>
            <h1 className='fw-bold text-danger'>404</h1>
            <Link to="/"><Button >Back to Home page</Button></Link>
        </div>
    );
};

export default ErrorPage;