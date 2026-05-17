import { Link } from "react-router-dom"


function CountryCard({country}) {

  return (
    <Link to={`/alpha/${country.cca3}`} className='w-[73%] rounded-md mx-auto mb-5 element shadow-[0_3px_15px_rgb(0,0,0,0.1)] md:mb-0 md:w-full'>
        <img src={country.flags.svg} alt="Invalid image" className="rounded-t-md w-full shadow-[0_3px_15px_rgb(0,0,0,0.1)] object-cover h-[200px] 2xl:h-[270px]"/>

        <section className="p-6 mb-2">
            <section className="font-bold text-lg mb-4 text">{country.name.common}</section>

            <section className='flex my-1 flex-wrap'>
                <p className="text-[18px] font-medium text">Population:&nbsp;</p>
                <section className= "text-[19px] font-normal text opacity-70">{ country.population.toLocaleString() || '0'}</section>
            </section>

            <section className='flex my-1 flex-wrap'>
                <p className="text-[18px] font-medium text">Region:&nbsp;</p>
                <section  className="text-[19px] font-normal text opacity-70">{country.region || 'NA'}</section>
            </section>

             <section className='flex my-1 flex-wrap'>
                <p className="text-[18px] font-medium text">Capital:&nbsp;</p>
                <section className="text-[19px] font-normal text opacity-70">{country.capital.join(', ') || 'NA'}</section>
            </section>
        </section>
    </Link>
  )
}

export default CountryCard