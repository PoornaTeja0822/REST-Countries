import { useNavigate, useParams } from "react-router-dom"
import getCountry from "../services/getCountry";
import { useEffect, useState } from "react";
import Spinners from "../component/Spinners";
import { borderId } from "../assets/borderId";


function CountryPage() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [country, setCountry] = useState();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getCountry(id).then(data => {
      setCountry(data[0]);
    })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [id])

  function handleBack() {
    navigate(-1);
  }


  return (
    <>

      {error && <div>Cannot load the page.</div>}
      {loading && <Spinners loading={loading} />}

      {country &&
        <>

          {/* Back button */}
          <section onClick={handleBack} className="element p-2 pl-4 pr-8 shadow-[0_3px_15px_rgb(0,0,0,0.1)] rounded-[3px] my-10 ml-8 w-fit flex md:mt-14 md:ml-18 cursor-pointer">

            <span className="block dark:hidden my-auto mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111517">
                <path d="M401.2-216.98 136.17-481.76 401.2-746.3l79.02 81.3-126.65 126.65h470.26v113.18H353.57l126.65 126.89-79.02 81.3Z" />
              </svg>
            </span>

            <span className="hidden dark:block my-auto mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                <path d="M401.2-216.98 136.17-481.76 401.2-746.3l79.02 81.3-126.65 126.65h470.26v113.18H353.57l126.65 126.89-79.02 81.3Z" />
              </svg>
            </span>

            <span className="text text-sm font-medium ">Back</span>
          </section>

          {/* Container */}
          <section className="px-8 py-4 md:flex md:mx-10 md:my-8 lg:max-w-[1400px] lg:items-center xl:mx-auto">

            <img src={country.flags.svg} alt="" className="h-[300px] w-full my-5 md:w-[400px] md:h-[300px] lg:w-[550px] lg:h-[400px]" />

            <section className="md:w-full md:ml-10">

              <section className="text font-bold text-2xl py-2 my-2 mt-10 md:mt-3">{country.name.common}</section>

              <section className="md:flex">

                <section className="my-4 md:my-0 md:w-[50%]">
                  <section className="flex my-3">
                    <p className="text text-[18px] font-medium">Native Name:&nbsp;</p>
                    <section className="text text-[18px] font-medium opacity-70">{country?.name?.nativeName ? Object.values(country?.name?.nativeName)[Object.values(country?.name?.nativeName).length - 1].common : 'NA'}</section>
                  </section>

                  <section className="flex my-3">
                    <p className="text text-[18px] font-medium">Population:&nbsp;</p>
                    <section className="text text-[18px] font-medium opacity-70">{country?.population.toLocaleString() || 'NA'}</section>
                  </section>

                  <section className="flex my-3"  >
                    <p className="text text-[18px] font-medium">Region:&nbsp;</p>
                    <section className="text text-[18px] font-medium opacity-70">{country?.region || 'NA'}</section>
                  </section>

                  <section className="flex my-3">
                    <p className="text text-[18px] font-medium">SubRegion:&nbsp;</p>
                    <section className="text text-[18px] font-medium opacity-70">{country?.subregion || 'NA'}</section>
                  </section>

                  <section className="flex my-3">
                    <p className="text text-[18px] font-medium">Capital:&nbsp;</p>
                    <section className="text text-[18px] font-medium opacity-70">{country?.capital?.[0] || 'NA'}</section>
                  </section>
                </section>

                <section className="my-10 md:my-0 md:ml-6">

                  <section className="flex my-3">
                    <p className="text text-[18px] font-medium">Top Level Domain:&nbsp;</p>
                    <section className="text text-[18px] font-medium opacity-70">{country?.tld || 'NA'}</section>
                  </section>

                  <section className="flex my-3">
                    <p className="text text-[18px] font-medium">Currencies:&nbsp;</p>
                    <section className="text text-[18px] font-medium opacity-70">{country?.currencies ? Object.values(country?.currencies)?.[0]?.name : 'NA'}</section>
                  </section>

                  <section className="flex my-3">
                    <p className="text text-[18px] font-medium">Languages:&nbsp;</p>
                    <section className="text text-[18px] font-medium opacity-70">{country?.languages ? Object.values(country?.languages).join(",") : 'NA'}</section>
                  </section>

                </section>
              </section>

              <section className="my-4 md:flex gap-10">
                <section className="text text-[22px] mb-4 mt-1 font-medium text-nowrap">Border Countries:</section>
                <section className="flex gap-3 flex-wrap mt-1">
                  {
                    country?.borders?.map((border, index) => {
                      return (
                        <button
                          key={index}
                          className="element shadow-[0_3px_15px_rgb(0,0,0,0.1)] rounded-[3px] text-[16px] min-w-[100px] px-4 h-8 text opacity-80 cursor-pointer"
                          onClick={() => navigate(`/alpha/${border}`)}
                        >
                          {borderId[border]}
                        </button>
                      )
                    })
                  }
                  {
                    country?.borders?.length > 0 || 'No borderCountries.'
                  }
                </section>
              </section>

            </section>


          </section>
        </>}
    </>
  )
}

export default CountryPage