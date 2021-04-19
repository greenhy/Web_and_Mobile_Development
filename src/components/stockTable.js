import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {useSymbolList} from "../api/finhubAPI"
import { useSymbolData } from "../api/alphavantageAPI";



export default function StockTable() {
    const API_KEY = "WN72VM8HP9TZ85YQ";
    // const [rowData, setRowData] = useState([]);
    const columns = [
        { hearderName: "Symbol", field: "symbol" },
        { hearderName: "Name", field: "name" },
        { hearderName: "Industry", field: "industry" },
    ];

    // const symbol = useSymbolList().symbols;
    // console.log(symbol);
    const stocks = useSymbolData();
    console.log(stocks);

    return (
        <div className="container">

            <div className="ag-theme-balham" style={{
                height: "300px",
                width: "600px",
            }}>

                <AgGridReact columnDefs={columns} rowData={stocks} pagination={true}/>
            </div>

        </div>);
}