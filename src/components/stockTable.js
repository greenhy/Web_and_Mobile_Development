import React, { useState } from "react";
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModules} from '@ag-grid-community/all-modules';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import SearchBar from "./searchBar";
import '../assets/css/components.css';

//TODO: put loading in table
export default function StockTable(props) {
    const [symbolSearch, setSymbolSearch] = useState("");
    const [industrySearch, setIndustrySearch] = useState("");
    const [flag, setFlag] = useState("");
    const stocksAll = props.stocksAll;

    const history = useHistory();

    const state = {
        modules: AllCommunityModules,
        columns: [
            { hearderName: "Symbol", field: "symbol", filter: true, sortable: true, flex: 1 },
            { hearderName: "Name", field: "name", flex: 1 , sortable: true},
            { hearderName: "Industry", field: "industry", filter: true, flex: 1 },
        ],
        rowSelection: 'single',
    };
    const labels = StocksToLable(stocksAll);

    let stocks = [];

    if ((typeof symbolSearch === "undefined" || symbolSearch === "")
        && (typeof industrySearch === "undefined" || industrySearch === "") 
        ||((industrySearch ==="All"&&flag==="industry")|| (symbolSearch === "All"&&flag==="symbol"))) {
        stocks = stocksAll;
    }
    else {
        if (flag==="industry") {
            for (let i = 0; i < stocksAll.length; i++) {
                if (stocksAll[i].industry === industrySearch) {
                    stocks.push(stocksAll[i]);
                }
            }
        }else{
            for (let i = 0; i < stocksAll.length; i++) {
                if (stocksAll[i].symbol === symbolSearch) {
                    stocks.push(stocksAll[i]);
                }
            }
        }
    }
  
    let onRowSelected = (event) => {
        history.push(`/history/${event.data.symbol}`);
    };


    return (
        <Container>
            <Row className="mx-auto my-4">
                <Row className="row-margin">
                    <div className="div-margin">Select Stock</div>
                    <SearchBar
                        labels={labels[1]}
                        type="symbol"
                        onClick={setFlag}
                        onSubmit={setSymbolSearch} />
                </Row>

                <Row className="row-margin">
                    <div className="div-margin">Select Industry</div>
                    <SearchBar
                        labels={labels[0]}
                        onClick={setFlag}
                        type="industry"
                        onSubmit={setIndustrySearch} />
                </Row>

            </Row>


            <div className="ag-theme-balham">

                <AgGridReact
                    modules={state.modules}
                    columnDefs={state.columns}
                    rowSelection={state.rowSelection}
                    onRowSelected={onRowSelected}
                    rowData={stocks}
                    pagination={true}
                    paginationPageSize={10} />
            </div>

        </Container>

    );
}

function StocksToLable(stocks) {
    let industry = ["All"];
    let symbols = ["All"];

    stocks.map((stock) => (
        industry.push(stock.industry)
    ));

    const arr2unique = new Set(industry);
    const uniqueIndustry = [...arr2unique];

    stocks.map((stock) => (
        symbols.push(stock.symbol)
    ));

    return [uniqueIndustry, symbols];
}

