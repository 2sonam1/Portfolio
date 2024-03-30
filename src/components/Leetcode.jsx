import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function Leetcode() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://leetcodestats.cyclic.app/21sonamrani')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
                // console.log(data.easySolved)
            })
    }, [])
    const datas = {
        labels: ['Total', 'Easy', 'Medium', 'Hard'],
        datasets: [{
            label: 'Poll',
            data: [data.totalQuestions, data.easySolved, data.mediumSolved, data.hardSolved],
            backgroundColor: ['#BFBDC1', '#49a078', '#DE9E36', '#ee6055'],
            borderColor: ['#BFBDC1', '#49a078', '#DE9E36', '#ee6055'],
            borderWidth: [0, 3, 3, 3],
        }]
    }
    const options = {
        cutout: '90%',
    };
    return (
        <div className='absolute w-48 top-80 -right-40'>
            <Doughnut
                data={datas}
                options={options}
            >
            </Doughnut>
        </div>
    )
}

export default Leetcode
