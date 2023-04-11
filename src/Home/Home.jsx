import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import Featured from '../Features/Features';

const Home = () => {
    const [jobs, setJob] = useState([]);
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <>
            {/*banner section start*/}
            <div className="row mt-5 justify-content-between">
                <div className="col-12 col-md-6 col-lg-6 mt-5 text-start">
                    <h2 className="fs-1 mt-5">One Step<br /> Closer To Your<br /> <span className="text-info">Dream Job</span></h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Button className="btn-info">Get Started</Button>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <img className='img-fluid' src="img/man.png" alt="" />
                </div>
            </div>
            {/*banner section end*/}

            {/* job category section start*/}
            <div className='my-5'>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className=' my-5 text-start row gap-2 justify-content-between'>
                {
                    jobs.map(job => <div className='bg-light p-3 col-12 col-md-5 col-lg-2' key={job._id}>
                        <img className='my-3' src={job.CategoryLogo} alt="" />
                        <h4>{job.CategoryName}</h4>
                        <p>{job.AvailableJobs}</p>
                    </div>)
                }
            </div>
            {/* job category section end*/}

            {/* feature section*/}
            <Featured></Featured>
        </>
    );
};

export default Home;