import React from "react";
import logo from '../images/risk.png';
export default function Home(){
   return( 
   <div>
       <div className = "App" > 
        <header className = "App-header" > 
            <img src = { logo }  alt = "logo"  width="10%"
                        height="10%"/ > 
                <h1> Stock Market </h1 > 
                <p> Stock Prices
                Welcome to the Stock Market Portal. You may click on stocks to view all the available companies
                or Quote to get the latest price information by stock symbol, or choose Price History or search to
                sample from the most recent one hundred days of information for a particular stock.  </p> 
        </header > 
        </div>
     
    </div>
    );
}