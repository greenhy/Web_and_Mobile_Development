import {useEffect} from 'react';
import React, {useState} from 'react';
import {useSymbolList} from './finhubAPI';

export function useSymbolData(){
    console.log("in API");
    const [loading, setLoading] = useState(true);
    const [stocksAll, setSymbolData] = useState([]);
    const [error, setError] = useState(null);
    // const symbols = useSymbolList().symbols;
    const symbols = [{symbol: 'ACCO'},{symbol: 'ALC'},{symbol: 'NBR'},{symbol: 'SSD'},{symbol: 'YRD'}]
    // console.log(symbols); 
    useEffect(() => { (async () => {
       
         try { 
             console.log("in alphavantage");
            //  if(typeof search ==="undefined" || stocks.length == 0){
                // console.log("in alphavantage if");
                setSymbolData(await getSymbolData(symbols));
                // console.log(symbols); 
            //  }
            //  else{
                // console.log("in alphavantage else");
                //  console.log(search);
            //  }
             
              setLoading(false); 
            } catch (err) {
                 setError(error); 
                 setLoading(false); 
                } })(); 
            }, []);
    return {
        loading,
        stocksAll,
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
        console.log(url);
        let res = await fetch(url);
        let data = await res.json();

        if ((typeof symbol !== 'undefined') && (typeof data.Symbol !== 'undefined')) {
            stockList.push(data);
            console.log(symbol);
          }
        

        if(stockList.length==5){
            break;
        }else{
            i++;
            continue;
        }
    };

    return stockList.map((stock) => ({
        // error function
        symbol: stock.Symbol,
        name : stock.Name,
        industry: stock.Industry,
    }));

}