import React from 'react';
import './Country.css';
const Country = (props) => {

    console.log(props.country);
    const {area,region,population,capital,name,flags} =props.country;
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <h2>Capital Name:{capital}</h2>
            <h2>Population: { population}</h2>
             <p>Region: {region}</p>
             <p>Area: {area}</p>
             
             <img src={flags.png} alt="" />
         
        </div>
    );
};

export default Country;