// import {useEffect} from 'react';
// import React, {useState} from 'react';
// import { useSymbolData } from "../api/alphavantageAPI";

// export function useSearchedStocks(props){
//     const [loading, setLoading] = useState(true);
//     const [stocks, setStock] = useState([]);
//     const [error, setError] = useState(null);
//     // const symbols = useSymbolList().symbols;
//     // console.log(symbols); 
//     useEffect(() => { (async () => {
//          try { 
//             setStock(await GetStock(props));
//               setLoading(false); 
//             } catch (err) {
//                  setError(error); 
//                  setLoading(false); 
//                 } })(); 
//             }, []);
//     return {
//         loading,
//         stocks,
//         error : null
//     };
// }


// async function GetStock(props){
//     const searchSymbol = props[0];
//     let result;
//     if(searchSymbol===""){
//         result=useSymbolData().symboldata;
//     }else{
//         for(let i=0;i<props[1].length;i++){
//             if(searchSymbol===props[1][i]){
//                 console.log(props[1][i]);
//                 result = props[1][i];
//                 break;
//             }
//         }
//     }
    
    
//     return result;
   

// }