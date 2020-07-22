import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Buscador = () => {
    const [value, setValue] = useState('')

    return (
        <div className="contenedorBusqueda w-50 mt-auto mb-auto">
            <input
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search INNOMDb"
                style={{ width: "90%" }}>
            </input>
            <NavLink to={`/search/${value}`} >
                <button
                    style={{ backgroundColor: "black" }}>
                    <FontAwesomeIcon
                        icon={faSearch}
                        style={{ fontSize: "20px", color: "white" }}
                    />
                </button>
            </NavLink>
        </div>
    )
}

export default Buscador