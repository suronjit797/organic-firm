import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Legend, Bar, PieChart, Pie } from 'recharts';


const Dashboard = () => {
    // dynamic title
    document.title = 'Organic Farm || Dashboard'

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(item => setData(item))
    }, [])


    return (
        <section className='dashboard' style={{overflowX: 'hidden'}}>
            <div className="row g-5">

                <div className="col-md-6">
                    <h4 className="text-center text-primary text-uppercase"> Month wise sell </h4>
                    <div className="px-5 pb-5 pt-3">
                        <ResponsiveContainer width='100%' aspect={4.0 / 3.0}>
                            <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="col-md-6">
                    <h4 className="text-center text-primary text-uppercase"> investment vs revenue </h4>
                    <div className="px-5 pb-5 pt-3">
                        <ResponsiveContainer width='100%' aspect={4.0 / 3.0}>
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="col-md-6">
                    <h4 className="text-center text-primary text-uppercase"> investment vs revenue </h4>
                    <div className="px-5 pb-5 pt-3">
                        <ResponsiveContainer width='100%' aspect={4.0 / 3.0}>
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="col-md-6">
                    <h4 className="text-center text-primary text-uppercase"> investment vs revenue </h4>
                    <div className="px-5 pb-5 pt-3">
                        <ResponsiveContainer width='100%' aspect={4.0 / 3.0}>
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data}
                                    dataKey="investment"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={60}
                                    fill="#8884d8"
                                />
                                <Pie
                                    data={data}
                                    dataKey="revenue"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={90}
                                    fill="#82ca9d" 
                                    label />
                                    <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Dashboard;