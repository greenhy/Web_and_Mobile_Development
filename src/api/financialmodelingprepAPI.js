import { useState,useEffect } from 'react';

const API_KEY = "";

export function useSymbolData() {
    const [loading, setLoading] = useState(true);
    const [stocksAll, setSymbolData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setSymbolData(await getSymbolData());
                setLoading(false);
            } catch (err) {
                setError(error);
                setLoading(false);
            }
        })();
    }, []);
    return {
        loading,
        stocksAll,
        error
    };
}

async function getSymbolData() {
    const url = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${API_KEY}`;
 
    let res = await fetch(url);
    let data = await res.json();

    return data.map((stock) => ({
        symbol: stock.symbol,
        name: stock.name,
        industry: stock.sector,
    }));

}

export function useQuoteData(symbol) {
    const [loading, setLoading] = useState(true);
    const [quote, setQuoteData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setQuoteData(await getQuoteData(symbol));
                setLoading(false);
            } catch (err) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [symbol]);
    return {
        loading,
        quote,
        error
    };
}

async function getQuoteData(symbol) {
    if (symbol !== "") {
        const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`;       
        let res = await fetch(url);
        let data = await res.json();

        return data.map((quote) => ({
            symbol: quote.symbol,
            date:new Date(quote.timestamp* 1000),
            open: quote.open,
            high: quote.dayHigh,
            low: quote.dayLow,
            volume: quote.volume,
            previousClose: quote.previousClose,
        }));
    }else{
        return ""
    }
  
}

export function useHistoryData(props) {
    const [loading, setLoading] = useState(true);
    const [history, setHistory] = useState([]);
    const [error, setError] = useState(null);
       useEffect(() => {
        (async () => {
            try {
                setHistory(await getHistoryData(props));
                setLoading(false);
            } catch (err) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [props]);

    return {
        loading,
        history,
        error
    };
}

async function getHistoryData(props) {
    let from;
    let url=``;
    if (props.symbol !== "") {
        if(props.from === "none"){
            url = `https://financialmodelingprep.com/api/v3/historical-price-full/${props.symbol}?timeseries=100&apikey=${API_KEY}`;
        }else{
            from = formatDate(props.from);
            url= `https://financialmodelingprep.com/api/v3/historical-price-full/${props.symbol}?from=${from}&to=${formatDate(new Date())}&apikey=${API_KEY}`;
        }
        let res = await fetch(url);
        let data = await res.json();
        let historical;
        if(data.length!==0){
            historical = data.historical;
            return historical.map((history) => ({
                date: history.date,
                open: history.open,
                high: history.high,
                low: history.low,
                volume: history.volume,
                close: history.close,
            }));
        }else{
            return "false"
        }
       
    }else{
        return ""
    }
  
}

function formatDate(date) {
    let d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('-');
}
