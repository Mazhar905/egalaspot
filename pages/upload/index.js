import React, { useState } from 'react'
import Data from './data.csv';
import Papa from 'papaparse';


function index() {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(Data);
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder("utf-8");
            const csvData = decoder.decode(result.value);
            const parsedData = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true
            }).data;
            setData(parsedData);
        };
        fetchData();
    }, []);


    return (
        <>
            {data.length ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Occupation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.Name}</td>
                                <td>{row.Age}</td>
                                <td>{row.Occupation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
        </>
    )
}

export default index
