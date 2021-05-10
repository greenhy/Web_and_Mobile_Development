
import { useHistoryData } from "../api/financialmodelingprepAPI";
import React from "react";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Chart from "../components/chart";
import Loader from "../components/loader";
import '../assets/css/components.css';

export default function HistoryTable(props) {
    const { loading, history, error } = useHistoryData(props);
    const columns = [
        { hearderName: "Date", field: "date", sortable: true },
        { hearderName: "Open", field: "open", sortable: true },
        { hearderName: "High", field: "high", sortable: true },
        { hearderName: "Low", field: "low", sortable: true },
        { hearderName: "Close", field: "close", sortable: true },
        { hearderName: "Volumes", field: "volume", sortable: true },
    ];

    if (loading) {
        return (
            <Loader />
        );
    }

    if (error) {
        return <p>Something failed: {error}</p>
    }

    if(history==="false"){
        return(<Container> There is no data. </Container>)
    }else{
        return (
            <Container>
    
                <div className="ag-theme-balham" >
    
                    <AgGridReact
                        columnDefs={columns}
                        rowData={history}
                        pagination={true}
                        paginationPageSize={10}
                    />
                </div>
                {
                    history.length < 3 ?
                        <Container>Can not show Chart: not enough data</Container> :
                        <Chart data={history} />
                }
    
            </Container>
    
        );
    }

    
}