import React, {useContext} from 'react';
import Script from "next/script";
import {DataContext} from "../context/DataContext";
import {FrecuencyTableImpl} from "../models/frecuencyTable/FrecuencyTableImpl.class";
import styles from '../styles/FrecuencyTable.module.css'
import {uid} from "../helpers/UID";

const FrecuencyTable = () => {
    // @ts-ignore
    const {data, setData} = useContext(DataContext)
    const frecuencyTableImpl: FrecuencyTableImpl = new FrecuencyTableImpl(data.length, data)


    const frecuency = frecuencyTableImpl.calcFrecuency()
    const cumulativeFrecuency: object = frecuencyTableImpl.calcCumulativeFrecuency()
    const relativeFrecuency: object = frecuencyTableImpl.calcRelativeFrecuency()
    const comulativeRelativeFrecuency: object = frecuencyTableImpl.calcComulativeRelativeFrecuency()


    return (

        <div>
            <div className={`${styles.totalData}`}>

                <h3 className='container'>N = {data.length}</h3>
            </div>

            <div className={`${styles.tableContainer}`}>
                <Script type="text/javascript" src="https://www.hostmath.com/Math/MathJax.js?config=OK"></Script>


                <table className={`${styles.table}`}>
                    {/* <h3>N = {data.length}</h3> */}

                    <thead className={`${styles.tableHead}`}>
                    <tr>
                        <td>\[xi\]</td>
                        <td>\[ni\]</td>
                        <td>\[Ni\]</td>
                        <td>\[fi\]</td>
                        <td>\[Fi\]</td>

                    </tr>
                    </thead>

                    <tbody className={`${styles.tableBody}`}>
                    {frecuencyTableImpl.variables().map(variable => {

                        return (
                            <tr
                                key={uid()}
                            >
                                <td>{variable}</td>
                                <td>{frecuency[variable as keyof typeof frecuency]}</td>
                                <td>{cumulativeFrecuency[variable as keyof typeof cumulativeFrecuency]}</td>
                                <td>{relativeFrecuency[variable as keyof typeof relativeFrecuency]}%</td>
                                <td>{comulativeRelativeFrecuency[variable as keyof typeof comulativeRelativeFrecuency]}%</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default FrecuencyTable;