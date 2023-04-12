import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Featur = ({ feature }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOnsite, location, salary, fullTimePartTime, locationLogo, salaryLogo } = feature;

    return (
        <>
            <div className='card text-start col-12 col-md-5 col-lg-5'>
                <div>
                    <img className='img-fluid' src={companyLogo} alt="" />
                </div>
                <h3>{jobTitle}</h3>
                <h6>{companyName}</h6>
                <div>
                    <button className='me-3 btn btn-outline-info'>{remoteOnsite}</button>
                    <button className='btn btn-outline-info'>{fullTimePartTime}</button>
                </div>
                <div className='row'>
                    <div className='col'>
                        <img src={locationLogo} alt="" /><span>{location}</span>
                    </div>
                    <div className='col'>
                        <img src={salaryLogo} alt="" /><span>{salary}</span>
                    </div>
                </div>
                <span>
                    <Link to={`featur/${id}`}><Button >View Details</Button></Link>
                </span>
            </div>
        </>
    );
};

export default Featur;