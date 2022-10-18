import React, {useContext, useMemo} from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {Bar} from 'react-chartjs-2';
import {DataContext} from "../../context/DataContext";
import {FrecuencyTableImpl} from "../../models/frecuencyTable/FrecuencyTableImpl.class";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const BarChart = () => {

    // @ts-ignore
    const {data, setData} = useContext(DataContext)
    const frecuencyTableImpl: FrecuencyTableImpl = new FrecuencyTableImpl(data.length, data)
    const variables: Array<any> = frecuencyTableImpl.variables()
    const frecuency: Array<any> = Object.values(frecuencyTableImpl.calcFrecuency())


    const scores = frecuency //y
    const labels = variables //x
    const options = {
        responsive: true
    }

    const chartData = useMemo(() => {

        return {
            datasets: [
                {
                    label: 'Data',
                    data: scores,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)'
                    ]
                }
            ],
            labels
        }

    }, [data])


    return (
        <Bar data={chartData} options={options}></Bar>
    );
};

export default BarChart;