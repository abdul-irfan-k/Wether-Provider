'use client'
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    const option = {
        esponsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },

        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    color: 'white',
                    stepSize: 2000,
                    max:12000,
                    callback: function (value) {
                        var x = [" ", "Heavy", " ", "Sunny", " ", "Rainy"];
                        return x[value / 2000];
                    },
                }
            }
        }
    };
    const labels = ['10am', '10am', '10am', '10am', '10am','12am']
    const data = {
        labels,
        datasets: [
            {
                data: [4000, 6000, 8000, 14000, 6000,4000],
                backgroundColor: "#356EDD",
                barThickness: 7,
                borderRadius:Number.MAX_VALUE
            }
        ]
    }
    return (
        <div className='flex  mt-5 h-full items-end'>
            <Bar data={data} options={option}  />
        </div>
    )
}

export default BarChart