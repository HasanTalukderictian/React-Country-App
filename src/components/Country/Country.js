import React from 'react';
import './Country.css';
const Country = (props) => {
    
    return (
        <div className='country'>
            <h1>Country Name: {props.name}</h1>
            <h2>Capital Name:{props.capital}</h2>
            <h2>Population: {props.population}</h2>
             
             <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;