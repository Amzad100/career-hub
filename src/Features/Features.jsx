import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import { Button } from 'react-bootstrap';

const Featured = () => {
    const [features, setFeatures] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(true)
    }
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <>
            <div>
                <h1>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='row justify-content-between gap-5'>
                {
                    features.slice(0, showAll ? 6 : 4).map((feature) => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            {
                !showAll && (
                    <span onClick={handleShowAll}><Button className='my-5'>See All Jobs</Button></span>
                )}
        </>
    );
};

export default Featured;