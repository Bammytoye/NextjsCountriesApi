'use client'
import React from 'react'
import axios from 'axios'

const ApiCountries = () => {

    let countriesDetails = []

    axios.get('https://restcountries.com/v3.1/all')
    .then((details) => {
        countriesDetails = details.data
        console.log(countriesDetails)
    })
    .catch((error) => {
        console.log(error);
    })

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Countries Details </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {countriesDetails.map((country) => (
                        <div key={country.name.common} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="p-6">
                                <img src={country.flags.svg} alt={`${country.name.common} flag`} width="100" className='mx-auto border border-gray-500 p-2' />
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 border-l-2 border-gray-900 px-2">{country.name.common}</h2>
                                <p className="text-gray-600 mb-2 border-l-2 border-gray-900 px-2">Capital: {country.capital?.[0]}</p>
                                <p className="text-gray-600 mb-2 border-l-2 border-gray-900 px-2">Population: {country.population.toLocaleString()}</p>
                                <p className="text-gray-600 mb-2 border-l-2 border-gray-900 px-2">Region: {country.region}</p>
                                <p className="text-gray-600 mb-2 border-l-2 border-gray-900 px-2">Continents: {country.continents?.[0]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ApiCountries