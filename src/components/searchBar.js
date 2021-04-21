import React, { useState } from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function SearchBar(props) {
    console.log(props);
    const [innerSearch, setInnerSearch] = useState("");
    return (

        <DropdownButton
            id="dropdown-basic-button"
            title={innerSearch}
        >
            {props.contents === "symbol" ?
                props.stock.map((stock) => (
                    <Dropdown.Item
                        eventKey={stock.symbol}
                        onSelect={(event) => {
                            setInnerSearch(event);
                            props.onSubmit(event);
                        }}>
                        {stock.symbol}
                    </Dropdown.Item>)) :
                props.stock.map((stock) => (
                    <Dropdown.Item
                        eventKey={stock.industry}
                        onSelect={(event) => {
                            setInnerSearch(event);
                            props.onSubmit(event);
                        }}>
                        {stock.industry}
                    </Dropdown.Item>))
            }

        </DropdownButton>

    );
}

