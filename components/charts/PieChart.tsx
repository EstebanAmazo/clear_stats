import React, {useContext, useMemo} from 'react';

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

import {Pie} from 'react-chartjs-2';
import {DataContext} from "../../context/DataContext";
import {FrecuencyTableImpl} from "../../models/frecuencyTable/FrecuencyTableImpl.class";

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = () => {

    // @ts-ignore
    const {data, setData} = useContext(DataContext)
    const frecuencyTableImpl: FrecuencyTableImpl = new FrecuencyTableImpl(data.length, data)
    const variables: Array<any> = frecuencyTableImpl.variables()
    const relativeFrecuency: Array<any> = Object.values(frecuencyTableImpl.calcRelativeFrecuency())


    const scores = relativeFrecuency //y
    const labels = variables //x
    const options = {
        responsive: true
    }

    const chartData = useMemo(() => {

        return {
            datasets: [
                {
                    label: 'Mis datos',
                    data: scores,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)'
                    ],

                }
            ],
            labels
        }

    }, [data])


    return (
        <Pie data={chartData} options={options}></Pie>
    );
};

export default PieChart;