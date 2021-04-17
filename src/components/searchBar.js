import React, {useState} from "react";

export default function SearchBar(props){
    const [innerSearch, setInnerSearch] = useState("");
    return (
        <div>
            <input
                name="search"
                type="search"
                id="search"
                value={innerSearch}
                onChange={(event)=>{
                    setInnerSearch(event.target.value);
                }}
            />
            <button id = "button" type="button" onClick={()=>{
                props.onSubmit(innerSearch);
            }}>
                Search
            </button>
        </div>
    );
}