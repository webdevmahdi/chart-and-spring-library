import axios from 'axios';
import React, { useState } from 'react'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

function Chart() {
    let [phones, setPhones] = useState([]);
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => {
            let data = res.data.data;
            let phoneData = data.map(phone => {
                let dadicatedParts = phone.slug.split('-');
                let allParts = {
                    name: dadicatedParts[0],
                    id: parseInt(dadicatedParts[1])
                };
            return allParts;
            })
            setPhones(phoneData)
        })
    return (
        <ResponsiveContainer width={'100%'} height={'100%'}>
            <AreaChart width={300} height={100} data={phones}>
                <Area type={'monotone'} dataKey={phones.id} stroke='#000' fill='orange'></Area>
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Chart