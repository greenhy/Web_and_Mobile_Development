import { useEffect } from 'react';
import React, { useState } from 'react';

export function useSymbolList() {
    const [loading, setLoading] = useState(true);
    const [symbols, setSymbol] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setSymbol(await getSymbol());
                setLoading(false);
            } catch (err) {
                setError(error);
                setLoading(false);
            }
        })();
    }, []);

    return {
        loading,
        symbols,
        error: null
    };
}

const API_KEY = 'c1ud8qiad3ifvubd5rsg';
async function getSymbol() {
    const url = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${API_KEY}`;
    // fetch => async
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data.map((stock) => ({
        symbol: stock.symbol,
    }));

}