import search from '/search-icon.svg'
import searchDark from '/search-dark.svg'

function SearchAndRegin({ countries, searchCountry, setSearchCountry, selectedRegin, setSelectedRegin, selectedSubRegin, setSelectedSubRegin }) {

  const regions = []
  if (countries) {
    countries.forEach(country => {
      if (!regions.includes(country.region)) {
        regions.push(country.region);
      }
    })
  }

  let regionOptions;

  if (regions.length > 0) {
    regionOptions = regions.map((region, index) => {
      return <option key={index} className='text element' value={region}>{region}</option>
    })
  } else {
    regionOptions = <option value="" className='text element' disabled>No Region</option>
  }

  const subRegions = [];

  if (countries) {
    countries.forEach(country => {
      if (selectedRegin) {
        if (!subRegions.includes(country.subregion) && country.subregion && country.region == selectedRegin) {
          subRegions.push(country.subregion)
        }
      } else {
        if (!subRegions.includes(country.subregion) && country.subregion) {
          subRegions.push(country.subregion)
        }
      }

    })
  }

  let subRegionOptions;
  if (subRegions.length > 0) {
    subRegionOptions = subRegions.map((subRegion, index) => {
      return <option key={index} className='text element text-wrap' value={subRegion}>{subRegion}</option>
    })
  } else {
    subRegionOptions = <option value="" className='text element' disabled>No Sub-Region</option>
  }

  return (
    <div className="pt-7 px-4 md:flex md:justify-between md:gap-3 md:py-6 md:px-20">

      <section className='flex py-3 pl-1 md:pl-3 shadow-[0_3px_15px_rgb(0,0,0,0.1)] rounded-sm element my-auto md:min-w-[37%]'>
        <img src={search} alt="search" className='block dark:hidden h-6 opacity-70 my-auto mx-6 md:opacity-100  md:h-7 md:mx-4 ' />
        <img src={searchDark} alt="search" className='hidden dark:block h-6 opacity-70 my-auto mx-6 md:opacity-100  md:h-7 md:mx-4 ' />
        <input
          type="text"
          placeholder='Search for a country...'
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
          className='text-light-input dark:text-dark-text  outline-none text-xs font-medium md:font-bold leading-3 md:text-sm w-full'
        />
      </section>

      <section className='flex flex-col my-8 justify-between gap-3 md:flex-row lg:gap-12'>

        <section className='w-[60%] md:w-fit shadow-[0_3px_15px_rgb(0,0,0,0.1)] rounded-md element text relative cursor-pointer' >
          <select
            name="regin"
            id="regin"
            onChange={(e) => setSelectedRegin(e.target.value)}
            value={selectedRegin}
            className='outline-none text-sm font-normal appearance-none rounded-md h-full min-w-[200px] py-3 px-4 text w-full cursor-pointer'
          >
            <option value="" className='text-light-input element' hidden>Filter by region</option>
            {regionOptions.length > 0 && <option value="" className='text element' >All</option>}
            {regionOptions}
          </select>

          <section className="block dark:hidden absolute right-[5%] top-[30%] pointer-events-none" >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111517">
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </section>

          <section className="hidden dark:block absolute right-[5%] top-[30%] pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </section>

        </section>

        <section className='w-[60%] md:min-w-[270px] md:w-fit shadow-[0_3px_15px_rgb(0,0,0,0.1)] rounded-md element text relative cursor-pointer'>
          <select
            name="subRegin"
            id="subRegin"
            onChange={(e) => setSelectedSubRegin(e.target.value)}
            value={selectedSubRegin}
            className='outline-none text-sm font-normal appearance-none rounded-md h-full min-w-[200px] py-3 pl-4 pr-7 text w-full cursor-pointer'
          >
            <option value="" className='text-light-input element' hidden>Filter by Sub-Region</option>
            {subRegionOptions.length > 0 &&<option value="" className='text element'>All</option>}
            {subRegionOptions}
          </select>

          <section className="block dark:hidden absolute right-[5%] top-[30%] pointer-events-none" >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111517">
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </section>

          <section className="hidden dark:block absolute right-[5%] top-[30%] pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </section>

        </section>
      </section>

    </div>
  )
}

export default SearchAndRegin