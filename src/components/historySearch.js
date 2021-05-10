import React, { useState } from "react";
import { Container, Button, Alert, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
import SearchBar from "./searchBar";
import { StocksToLable } from "./quoteTable";
import '../assets/css/components.css';

export default function HistorySearch(props) {
  const [flag, setFlag] = useState("");
  const [symbol, setSymbol] = useState("");
  const [from, setFrom] = useState(new Date());
  const history = useHistory();
  const stocksAll = props.stocksAll;
  
  let onClieckHandler = (event) => {
    if (symbol !== "") {
      history.push(`/history/${symbol}/${from}`);
    } else {
      history.push(`/history`);
    }

  };

  return (
    <Container>
      {
        symbol === ""
          ? <Alert variant="danger">
            Please select a symbol
      </Alert>
          : null
      }
      <Row className="mx-auto my-4">
        <Row className="row-margin">
          <div className="div-margin">Select Stock</div>
          <SearchBar
            labels={StocksToLable(stocksAll)}
            type="history"
            onClick={setFlag}
            onSubmit={setSymbol} />
        </Row>

        <Row className="row-margin">
          <div className="div-margin">Select date</div>

          <div style={{ marginTop: "5px" }} >
            <DatePicker selected={from} onChange={date => setFrom(date)} />
          </div>
          <Button variant="danger" onClick={onClieckHandler} style={{ marginLeft: "20px" }}>Search</Button>
        </Row>
      </Row>

    </Container>


  );

}

