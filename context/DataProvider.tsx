import React, {useState} from 'react';
import {DataContext} from "./DataContext";




interface dataProviderProps {
    children: JSX.Element | JSX.Element[]
}


const DataProvider = ( {children }: dataProviderProps ) => {

    const [data, setData] = useState([])
    const provided = {
        data,
        setData,
    }

    return (
        <DataContext.Provider value ={ provided }>
            { children }
        </DataContext.Provider>
    );
};

export default DataProvider;