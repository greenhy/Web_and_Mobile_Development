import {useEffect} from 'react';
import React, {useState} from 'react';
import {useSymbolList} from './finhubAPI';

export function useSymbolData(){
    const [loading, setLoading] = useState(true);
    const [symboldata, setSymbolData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => { (async () => {
         try { 
             setSymbolData(await getSymbolData());
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
const symbols = useSymbolList.symbols;
console.log(symbols);
symbols.map((symbol) => getSymbolData(symbol));

async function getSymbolData(props){
    const url=`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.symbol}&apikey${API_KEY}`;
    // fetch => async
    let res = await fetch(url);
    let data = await res.json();
    if(data.Symbol === props.symbol){
        console.log(data);
    }
    // let symbol = data.Symbol;
    // console.log(data);
    // console.log(symbol);

    // return symbols.map((symbol) => ({
    //     // error function
    //     title: article.title,
    //     url : article.url,
    // }));
   
    return data;
    
}