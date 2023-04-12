import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

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
            <PieChart
                width={1200}
                height={300}
            >

                <Pie
                    dataKey="marks"
                    isAnimationActive={false}
                    data={assaignmentMarks}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >

                </Pie>
                <Legend dataKey="name"></Legend>
                <Tooltip></Tooltip>
            </PieChart>
        </>
    );
};

export default Statistics;