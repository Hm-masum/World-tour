import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3} = country;

    const [visited,setVisited] =useState(false)
    
    const handleVisited = () =>{
        setVisited(!visited);
    }

    //const passWithParams = () => handleVisitedCountry(country)

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple' : 'black'}}>Name: {name?.common}</h3>
            <img className='img-size' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area : {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visitd this country' : 'i want to visited'}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;