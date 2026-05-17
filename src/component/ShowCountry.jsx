import CountryCard from './CountryCard';

function ShowCountry({ countries, selectedRegin, searchCountry, selectedSubRegin }) {

    return (
        <div className='grid grid-cols-1  gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-20 md:gap-20' >
            {countries &&
                countries
                    .filter(country => selectedRegin ? country.region == selectedRegin : country)
                    .filter(country => selectedSubRegin ? country.subregion == selectedSubRegin : country)
                    .filter(country => (country.name.common.toLowerCase()).startsWith(searchCountry.toLowerCase()))
                    .map(country => {
                        return <CountryCard key={country.cca3} country={country} />
                    })
            }
            {
                countries &&
                    countries.filter(country => selectedRegin ? country.region == selectedRegin : country)
                    .filter(country => selectedSubRegin ? country.subregion == selectedSubRegin : country)
                    .filter(country => (country.name.common.toLowerCase()).startsWith(searchCountry.toLowerCase())).length ==0 &&
                    <h1 className='text font-black text-2xl text-center md:w-[90vw] '>No Country Available</h1>
            }
        </div>
    )
}

export default ShowCountry