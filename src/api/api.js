import {useEffect} from 'react';
import React, {useState} from 'react';

export function useStockData(){
    const [loading, setLoading] = useState(true);
    const [headlines, setSymbol] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => { (async () => {
         try { 
             setSymbol(await getSymbol());
              setLoading(false); 
            } catch (err) {
                 setError(error); 
                 setLoading(false); 
                } })(); 
            }, []);

    const headLines = [
        { title: 'My First Title', url: 'https://news.com/first-title' }, 
        { title: 'My Second Title', url: 'https://news.com/second-title' }, 
        { title: 'My Third Title', url: 'https://news.com/third-title' }, 
        { title: 'My Fourth Title', url: 'https://news.com/fourth-title' },
      ];

    return {
        loading,
        headlines,
        error : null
    };
}

const API_KEY = "WN72VM8HP9TZ85YQ";
async function getSymbol(){
    const url=`https://www.alphavantage.co/support/#${API_KEY}`;
    // fetch => async
    let res = await fetch(url);
    let data = await res.json();

    // let symbol = data.Symbol;
    console.log(data);
    // console.log(symbol);

    // return symbols.map((symbol) => ({
    //     // error function
    //     title: article.title,
    //     url : article.url,
    // }));
   
    return data;
    
}