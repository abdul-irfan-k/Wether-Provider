'use client'
import Chart from 'chart.js/auto'
import { useEffect, useRef, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    const chartRef = useRef(null)
    const [barThickness, setBarThickness] = useState(0)

    useEffect(() => {
        console.log('useref', barThickness)
        const observer = new ResizeObserver(entries => {
            setBarThickness(entries[0].contentRect.width)
        })
        observer.observe(chartRef.current)
        return () => chartRef.current && observer.unobserve(chartRef.current)
    }, [barThickness])



    const option = {
        responsive: true,
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
                    max: 14000,
                    callback: function (value) {
                        var x = ["", "Heavy", "Sunny", "Rainy"];
                        return x[value / 2000];
                    },
                }
            }
        }
    };
    const labels = ['10am', '10am', '10am', '10am', '10am', '12am']
    const data = {
        labels,
        datasets: [
            {
                data: [2000, 4000, 6000, 4000, 2000, 4000],
                backgroundColor: 'rgb(14, 165, 233)',
                barThickness: barThickness / 15,
                // borderRadius: Number.MAX_VALUE,

            }
        ],

    }
    return (
        <div ref={chartRef} className='flex  mt-5 h-full items-end  ' style={{ aspectRatio: '16/7', overflow: 'hidden' }} >
            <Bar data={data} options={option} />
        </div>
    )
}

export default BarChart