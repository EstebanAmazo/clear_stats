import React, {useContext} from 'react';
import FrecuencyTableForm from "./forms/FrecuencyTableForm";
import FrecuencyTable from "./FrecuencyTable";
import DataProvider from "../context/DataProvider";
import BarChart from "./charts/BarChart";
import styles from '../styles/Main.module.css'
import PieChart from "./charts/PieChart";
import LineChart from "./charts/LineChart";
import Script from 'next/script';


const Main = () => {

    return (

        <div className={`container`}>

            <Script type="text/javascript" src="https://www.hostmath.com/Math/MathJax.js?config=OK"></Script>

            <DataProvider>

                <div className={`${styles.grid}`}>
                    <div className={`${styles.info}`}>
                        <p>En estadística, la distribución de frecuencias es la agrupación de datos en categorías
                            mutuamente excluyentes que indican el número de observaciones en cada categoría.​ Esto
                            proporciona un valor añadido a la agrupación de datos. </p>

                        <h4>Frecuencia absoluta (ni)</h4>
                        <p>La frecuencia absoluta es el número de veces que aparece un determinado valor estadístico y
                            técnico. Se representa por fila.</p>

                        <h4>Frecuencia acumulada (NI)</h4>
                        <p>La frecuencia acumulada es la suma de las frecuencias absolutas de todos los valores
                            inferiores o iguales al valor considerado. </p>

                        <h4>Frecuencia relativa porcentual (fi)</h4>
                        <p>La frecuencia relativa es igual al número de veces que se repite un evento o sea la
                            frecuencia multiplicado por el 100% y dividida entre el total de los datos.</p>

                        <h4>Frecuencia relativa acumulada (FI)</h4>
                        <p>La frecuencia relativa acumulada es el cociente entre la frecuencia acumulada de un
                            determinado valor y el número total de datos. Se puede expresar en tantos por ciento.</p>

                    </div>

                    <div className={`${styles.info2}`}>
                        <div>
                            <h3>Ingresa los datos de la muestra para obtener el cálculo de la tabla de distribución de
                                frecuencias.</h3>
                            <FrecuencyTableForm/>
                        </div>

                    </div>


                </div>

                <div>
                    <h2 className={`${styles.chartHeading}`}>Tabla de distribución de frecuencias</h2>
                    <FrecuencyTable/>
                </div>


                <div className={`${styles.chartContainer}`}>

                    <div className={`${styles.charts}`}>

                        <div>

                            <div>
                                <h2 className={`${styles.chartHeading}`}>Gráfica de barras</h2>
                                <BarChart/>
                            </div>

                            <div className={`${styles.pieChart}`}>
                                <h2 className={`${styles.chartHeading}`}>Polígono de frecuencias</h2>

                                <LineChart/>
                            </div>
                        </div>

                        <div>
                            <h2 className={`${styles.chartHeading}`}>Gráfica Circular</h2>
                            <PieChart/>
                        </div>
                    </div>
                </div>

            </DataProvider>
        </div>
    );
};

export default Main;