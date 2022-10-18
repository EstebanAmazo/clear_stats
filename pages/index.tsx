import type {NextPage} from 'next'
import Head from 'next/head'

import {useState} from "react";

import Header from "../components/Header";

import Main from "../components/Main";
import { Footer } from '../components/Footer';


const Home: NextPage = () => {


    return (
        <div>
            <Head>
                <title>Clear Stats</title>
                <meta name="description" content="Calculadora de tablas de distribución de frecuencias"/>
                <link rel="icon" href="https://res.cloudinary.com/estebanamazo/image/upload/v1666103207/clear_stats/bar_chart_FILL0_wght400_GRAD0_opsz48_1_zqggsw.svg"/>
            </Head>
            <Header/>
            <Main/>
            <Footer/>

        </div>
    )
}

export default Home
