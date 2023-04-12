import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobsLists from './JobsLists';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    return (
        <div className=''>
            {
                jobs.map(job => <JobsLists
                    key={job.id}
                    job={job}
                ></JobsLists>)
            }
        </div>
    );
};

export default AppliedJobs;