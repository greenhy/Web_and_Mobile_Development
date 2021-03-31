import React, {useState, useEffect} from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Badge} from "reactstrap";

const table = {
    columns:[
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"},
    ],
    rowData:[
        {make: "Toyota", model:"Camry", price:28000},
        {make: "Toyota2", model:"Camry2", price:245000},
        {make: "Toyota3", model:"Camry3", price:45630},
    ]
}

export default function Study(){
    const [rowData, setRowData] = useState([]);
    const columns = [
        {hearderName: "Title", field:"title"},
        {hearderName: "Author", field:"author"},
        {hearderName: "Edition Count", field:"editionCount"},
        {hearderName: "Book ID", field:"id"},
    ];

    useEffect(()=>{
     (   async()=>{
        let res = await fetch("http://openlibrary.org/subjects/drama.json?published_in=2000")
        let data = await res.json();
        
        let works = data.works;
        let books = works.map(book=>{
            return{
                title: book.title,
                        author: book.authors[0].name,
                        editionCount: book.editionCount,
                        id: book.cover_id
            };
        })
        setRowData(books);
    // }
        // .then(res=>res.json()).then(data=>data.works).then(works=>
        

        // {
        //         works.map(book=>{
        //             console.log(works);
        //             return{
        //                 title: book.title,
        //                 author: book.authors[0].name,
        //                 editionCount: book.editionCount,
        //                 id: book.cover_id}
                        
        //             ;
        //         })
                // .then(books=>setRowData(books))
        //     }
        // )
    })()}
    ,[]);

   return( <div className="container">
        <h1>Study</h1>
        <Badge color="success">{rowData.length}</Badge>
       
            {/* <div className="ag-theme-balham" style={{
                height: "300px",
                width:"600px",
            }}>
                <AgGridReact columnDefs={table.columns} rowData={table.rowData} pagination={true}/>
                <AgGridReact columnDefs={columns} rowData={rowData} pagination={true}/>
            </div> */}

            <div className="ag-theme-balham" style={{
                height: "300px",
                width:"600px",
            }}>
                {/* <AgGridReact columnDefs={table.columns} rowData={table.rowData} pagination={true}/> */}
                <AgGridReact columnDefs={columns} rowData={rowData} pagination={true}/>
            </div>

            <Button
            color="info"
            size="sm"
            className="mt-3"
            href="https://openlibrary.org/develops/api"
       >
           Go to Open Library Api
       </Button>
    </div>);
}