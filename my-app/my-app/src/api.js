import {useEffect} from 'react';
import React, {useState} from 'react';

export function useNewArticles(){
    const [loading, setLoading] = useState(true);
    // const [headlines, setHeadlines] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(()=>{
        getHeadlines();
        setTimeout(()=>{
            setLoading(false);
        },2000);
    }, []);
    const headLines = [
        {title:'first', url:"url"},
        {title:'second', url:"url1"},
        {title:'third', url:"url2"},
        {title:'fourth', url:"url3"}
      ];

    return {
        loading,
        // headlines,
        error : null
    };
}

const API_KEY = "api key";
async function getHeadlines(){
    const url='url';
    // fetch => async
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
}