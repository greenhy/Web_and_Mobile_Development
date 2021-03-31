import logo from './qut-logo-large.jpg';
import './App.css';
import React, {useState} from 'react';
import {useNewArticles} from './api';

import {Headline} from "./components/headline.js"
import {SearchBar} from "./components/searchBar.js"

function App() {
  const [search, setSearch] = useState("");
  const {loading, headlines, error} = useNewArticles(search);
  

  const headLines = [
    { title: 'My First Title', url: 'https://news.com/first-title' }, 
    { title: 'My Second Title', url: 'https://news.com/second-title' }, 
    { title: 'My Third Title', url: 'https://news.com/third-title' }, 
    { title: 'My Fourth Title', url: 'https://news.com/fourth-title' },
  ];

  if(loading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>Something failed</p>
  }
  
  return (
    <div className="App">
      <h1>Search</h1>
      <SearchBar onSubmit={setSearch}/>
      {headlines.map((headline) => ( // `headline` is now an object 
      <Headline key={headline.url} title={headline.title} /> ))}
    </div>
  );
}


export default App;
