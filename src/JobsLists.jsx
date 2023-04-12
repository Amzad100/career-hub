import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const JobsLists = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOnsite, location, salary, fullTimePartTime, locationLogo, salaryLogo } = job;
    return (
        <>
            <div className='card text-start row'>
                <div className='col'>
                    <img src={companyLogo} alt="" />
                </div>
                <div className='col'>
                    <div className=''>
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
                    </div>
                    <span>
                        <Link to={'featur/:id'}><Button >View Details</Button></Link>
                    </span>
                </div>
            </div>
        </>
    );
};

export default JobsLists;