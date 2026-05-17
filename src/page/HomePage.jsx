import { useEffect, useState } from 'react'
import SearchAndRegin from '../component/SearchAndRegin'
import Spinners from '../component/Spinners'
import getCountries from '../services/getCountries';
import ShowCountry from '../component/ShowCountry';

function HomePage() {
    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedRegin, setSelectedRegin] = useState('');
    const [selectedSubRegin, setSelectedSubRegin] = useState('');
    const [searchCountry, setSearchCountry] = useState('');

    useEffect(()=> {
        setSelectedSubRegin('')
    }, [selectedRegin])


    useEffect(() => {
        getCountries()
            .then((data) => {
                setCountries(data);
            })
            .catch((e) => {
                setError(true);
            }).finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        <>
            <SearchAndRegin
                countries={countries}
                searchCountry={searchCountry}
                setSearchCountry={setSearchCountry}
                selectedRegin={selectedRegin}
                setSelectedRegin={setSelectedRegin}
                selectedSubRegin={selectedSubRegin}
                setSelectedSubRegin={setSelectedSubRegin}
            />

            {loading && <Spinners loading={loading} />}

            {error ? <h1 className='text-center font-bold text-lg text'>Loading Failed</h1>
                : <ShowCountry selectedSubRegin={selectedSubRegin} selectedRegin={selectedRegin} searchCountry={searchCountry} countries={countries} />}
        </>
    )
}

export default HomePage