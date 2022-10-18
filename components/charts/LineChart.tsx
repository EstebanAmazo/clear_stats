import React, {useContext, useMemo} from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {Line} from 'react-chartjs-2';
import {DataContext} from "../../context/DataContext";
import {FrecuencyTableImpl} from "../../models/frecuencyTable/FrecuencyTableImpl.class";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const LineChart = () => {

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
                    borderColor: 'rgb(255, 99, 132)',
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
        <Line data={chartData} options={options}></Line>
    );
};

export default LineChart;