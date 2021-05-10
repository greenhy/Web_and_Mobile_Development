import React, { useState } from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SearchBar(props) {
    const [innerSearch, setInnerSearch] = useState("");
    return (
        <DropdownButton
            variant="danger"
            id="dropdown-basic-button"
            title={innerSearch === "" ? 'Select' : innerSearch}
        >

            { props.labels.map((label) => (
                <Dropdown.Item
                    variant="danger"
                    key={label}
                    eventKey={label}
                    onSelect={(event) => {
                        setInnerSearch(event);
                        props.onSubmit(event);
                        props.onClick(props.type);

                    }}>
                    {label}
                </Dropdown.Item>))
            }
        </DropdownButton>
    );

}



