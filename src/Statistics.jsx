import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assaignmentMarks = [
        { name: "Assaignment 1", marks: 60 },
        { name: "Assaignment 2", marks: 60 },
        { name: "Assaignment 3", marks: 60 },
        { name: "Assaignment 4", marks: 60 },
        { name: "Assaignment 5", marks: 60 },
        { name: "Assaignment 6", marks: 44 },
        { name: "Assaignment 7", marks: 60 },
        { name: "Assaignment 8", marks: 58 },
    ]
    return (
        <>
            <h1>Assaignment marks Bar Chart</h1>
            <BarChart
                width={1200}
                height={300}
                data={assaignmentMarks}
            >
                <Bar dataKey="marks"></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </>
    );
};

export default Statistics;