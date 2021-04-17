import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useStockData } from '../api/api';


const table = {
    columns: [
        { hearderName: "Symbol", field: "symbol" },
        { hearderName: "Name", field: "name" },
        { hearderName: "Industry", field: "industry" },
    ],
    rowData: [
        { symbol: "Toyota", name: "Camry", industry: 28000 },
        { symbol: "Toyota2", name: "Camry2", industry: 245000 },
        { symbol: "Toyota3", name: "Camry3", industry: 45630 },
    ]
}

export default function StockTable() {
    const API_KEY = "WN72VM8HP9TZ85YQ";
    const [rowData, setRowData] = useState([]);
    const columns = [
        { hearderName: "Symbol", field: "symbol" },
        { hearderName: "Name", field: "name" },
        { hearderName: "Industry", field: "industry" },
    ];

    useEffect(() => {
        (async () => {
            let res = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=${API_KEY}`)
            let data = await res.json();
            console.log(data);
            // let works = data.works;
            let overviews = data.map(overview => {
                return {
                    symbol: overview.Symbol,
                    name: overview.Name,
                    industry: overview.Industry,
                   
                };
            })
            setRowData(overviews);
            // }
            // .then(res=>res.json()).then(data=>data.works).then(works=>


            // {
            //         works.map(book=>{
            //             console.log(works);
            //             return{
            //                 title: book.title,
            //                 author: book.authors[0].name,
            //                 editionCount: book.editionCount,
            //                 id: book.cover_id}

            //             ;
            //         })
            // .then(books=>setRowData(books))
            //     }
            // )
        })()
    }
        , []);

    return (
        <div className="container">

            {/* <Badge color="success">{rowData.length}</Badge>
        */}
            {/* <div className="ag-theme-balham" style={{
                height: "300px",
                width:"600px",
            }}>
                <AgGridReact columnDefs={table.columns} rowData={table.rowData} pagination={true}/>
                <AgGridReact columnDefs={columns} rowData={rowData} pagination={true}/>
            </div> */}

            <div className="ag-theme-balham" style={{
                height: "300px",
                width: "600px",
            }}>

                {/* <AgGridReact columnDefs={table.columns} rowData={table.rowData} pagination={true} /> */}
                <AgGridReact columnDefs={columns} rowData={rowData} pagination={true}/>
            </div>

        </div>);
}