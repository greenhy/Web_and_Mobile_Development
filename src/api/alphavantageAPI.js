import {useEffect} from 'react';
import React, {useState} from 'react';
import {useSymbolList} from './finhubAPI';

export function useSymbolData(){
    const [loading, setLoading] = useState(true);
    const [symboldata, setSymbolData] = useState([]);
    const [error, setError] = useState(null);
    const symbols = useSymbolList().symbols;
    // console.log(symbols); 
    useEffect(() => { (async () => {
         try { 
             setSymbolData(await getSymbolData(symbols));
              setLoading(false); 
            } catch (err) {
                 setError(error); 
                 setLoading(false); 
                } })(); 
            }, []);
    return {
        loading,
        symboldata,
        error : null
    };
}


const API_KEY = "WN72VM8HP9TZ85YQ";

async function getSymbolData(props){
    console.log("in symbolDAta");
    // console.log(props);
    let stockList=[];
    let i=0;
    while(true){
        
        let symbol = props[i].symbol ;
        const url=`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`;
       
        let res = await fetch(url);
        let data = await res.json();

        if ((typeof symbol !== 'undefined') && (typeof data.Symbol !== 'undefined')) {
            stockList.push(data);
          }
        

        if(stockList.length==5){
            break;
        }else{
            i++;
            continue;
        }
    };
    // for(let i = 0 ; i<props.length;i++){
       
    // }
    // const url=`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.symbol}&apikey${API_KEY}`;
    // // fetch => async
    // let res = await fetch(url);
    // let data = await res.json();
    // if(data.Symbol === props.symbol){
    //     console.log(data);
    // }
    // let symbol = data.Symbol;
    // console.log(data);
    // console.log(symbol);

    return stockList.map((stock) => ({
        // error function
        symbol: stock.Symbol,
        name : stock.Name,
        industry: stock.Industry,
    }));
   
    // return 'data';
    
}