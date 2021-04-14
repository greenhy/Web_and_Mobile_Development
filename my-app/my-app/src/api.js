import {useEffect} from 'react';
import React, {useState} from 'react';

export function useNewArticles(search){
    const [loading, setLoading] = useState(true);
    const [headlines, setHeadlines] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => { (async () => {
         try { 
             setHeadlines(await getHeadlines(search));
              setLoading(false); 
            } catch (err) {
                 setError(error); 
                 setLoading(false); 
                } })(); 
            }, [search]);
    // useEffect(()=>{
    //     (async()=>{
    //    try { 
    //     setHeadlines(await getHeadlines());
    //     setLoading(false);
    // } catch (err){
    //         setError(err);
    //         setLoading(false);
    //     }

    //     // setTimeout(()=>{
    //         // setLoading(false);
    //     // },2000);
    // })();
    // }, []);
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

const API_KEY = "3d6e5e74eaa04fc9a7ba57041b5611ea";
async function getHeadlines(search){
    const url=`https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}&q=${search}`;
    // fetch => async
    let res = await fetch(url);
    let data = await res.json();

    let articles = data.articles;
    console.log(data);

    return articles.map((article) => ({
        // error function
        title: article.title,
        url : article.url,
    }));
   
    
}