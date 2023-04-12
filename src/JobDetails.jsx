import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb, getShoppingCart } from './fakedb';

const JobDetails = () => {
    const feature = useLoaderData();
    const featureid = useParams();
    const [features, setFeature] = useState([]);
    useEffect(() => {
        const feat = feature.find((f) => f.id === featureid.id)
        setFeature(feat);
    }, [featureid]);

    const handleApplyJob = (features) => {
        const feat = feature.find((f) => f.id === featureid.id)
        setFeature(feat);
        addToDb(feat.id);
    }

    return (
        <>
            <div className='bg-secondary'>
                <h1 className='my-5 '>Job Details : {features.id}</h1>
            </div>
            <div className='row'>
                <div className='col text-start'>
                    <p>Job Description{features.jobDescription}</p>
                    <p>Job Responsibility: {features.jobResponsibility}</p>
                    <h6>Educational Requirements:</h6>
                    <p>{features.educationalRequirements}</p>
                    <h6>Experiences:</h6>
                    <p>{features.experiences}</p>
                </div>
                <div className='col'>
                    <div className='p-4 bg-light text-start'>
                        <h4>Job Details</h4>
                        <hr />
                        <p> <img src={features.salaryLogo} alt="" /> Salary : {features.salary}</p>
                        <p><img src={features.jobTitleLogo} alt="" /> Job Title : {features.jobTitle}</p>
                        <h4>Contact Information</h4>
                        <hr />
                        <p><img src={features.phoneLogo} alt="" /> Phone : {features.phone}</p>
                        <p><img src={features.emailLogo} alt="" /> Email : {features.email}</p>
                        <p> <img src={features.locationLogo} alt="" /> Address : {features.address}</p>

                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button onClick={handleApplyJob} className="btn btn-info" type="button">Apply Now</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default JobDetails;