import React from "react";
import logo from '../assets/images/risk.png';
export default function Home() {
    return (
        <div className="App">
            <header className="App-header" >
                <p style={{ textAlign: "justify" }}>
                    <img src={logo} alt="logo" width="10%"
                        height="10%" />
                    <h1> Stock Market </h1 >
                    <br />
                 Stock Prices
                Welcome to the Stock Market Portal.<br />
                You may click on stocks to view all the available companies.<br />
                Quote to get the latest price information by stock symbol.<br />
                Choose Price History. <br />
                Search to sample from the most recent one hundred days of information for a particular stock.<br/><br/>
                API : https://financialmodelingprep.com
                  </p>
            </header >
        </div>
    );
}