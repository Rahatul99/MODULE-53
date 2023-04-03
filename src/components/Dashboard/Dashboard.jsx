import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        {"id": 1, "name": "John", "physics": 75, "chemistry": 80, "math": 85},
        {"id": 2, "name": "Jane", "physics": 90, "chemistry": 85, "math": 80},
        {"id": 3, "name": "Alice", "physics": 70, "chemistry": 60, "math": 65},
        {"id": 4, "name": "Bob", "physics": 80, "chemistry": 75, "math": 70},
        {"id": 5, "name": "Charlie", "physics": 95, "chemistry": 90, "math": 85},
        {"id": 6, "name": "Dave", "physics": 60, "chemistry": 65, "math": 70},
        {"id": 7, "name": "Eve", "physics": 85, "chemistry": 80, "math": 75},
        {"id": 8, "name": "Frank", "physics": 75, "chemistry": 70, "math": 65},
        {"id": 9, "name": "Grace", "physics": 80, "chemistry": 85, "math": 90},
        {"id": 10, "name": "Henry", "physics": 70, "chemistry": 75, "math": 80},
        {"id": 11, "name": "Ivy", "physics": 90, "chemistry": 95, "math": 100},
        {"id": 12, "name": "Jack", "physics": 80, "chemistry": 75, "math": 70}
    ];
    
    
    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={students}>
            <Line dataKey='physics'></Line>        
            <Line stroke="#8884d8" dataKey='math'></Line> 
            <XAxis dataKey="name"></XAxis> 
            <YAxis></YAxis>   
            <Tooltip></Tooltip>   
            </LineChart>


            {/* { <LineChart 
                      width={500}
                      height={300}
                      data={students}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5}}
                        >
                <XAxis dataKey="name" />
                <YAxis />   
                <Tooltip />
                 <Legend /> 
                 <Line  dataKey="physics" stroke="#8884d8"  />     
                <Line  dataKey="chemistry" stroke="#8884d8" />
            </LineChart> } */}

        </div>
    );
};

export default Dashboard;