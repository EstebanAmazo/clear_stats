import React, {useContext} from 'react'

import {useFormik} from 'formik'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Chips} from 'primereact/chips';
import {DataContext} from "../../context/DataContext";
import styles from '../../styles/FrecuencyTableForm.module.css'


const FrecuencyTableForm = () => {

    // @ts-ignore
    const {data, setData} = useContext(DataContext)

    const formik = useFormik({
        initialValues: {
            variableName: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form className={`${styles.form}`} onSubmit={formik.handleSubmit}>

            {/**
             formik sera usado en posteriores versiones
             }

             {/*<input*/}
            {/*    id="variableName"*/}
            {/*    name="variableName"*/}
            {/*    type="string"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.variableName}*/}
            {/*/>*/}

            <div className={`${styles.dataContainer}`}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <label htmlFor="variableName">Datos de la muestra (separados por comas ",")</label>
                <Chips className={`${styles.input}`} value={data} onChange={(e) => setData(e.value)}
                       separator=","></Chips>
                <span>*Los resultados se actualizan cada vez que ingreses un dato.</span>
                <button disabled><span className={`${styles.loader}`}></span></button>
            </div>

        </form>

    );
}

export default FrecuencyTableForm