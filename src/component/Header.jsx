import { useState } from 'react'
import dark from '/dark-mode.svg'
import light from '/light-mode.svg'
import { useNavigate } from 'react-router-dom';

function Header() {

    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    function handelMode() {

        if (darkMode) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }

        setDarkMode((previousState) => !previousState)
    }


    return (
        <div className="element text flex w-full justify-between p-5 py-7 shadow-[0_3px_15px_rgb(0,0,0,0.1)] md:px-20 md:py-6">

            <section className='font-bold text-base md:text-2xl md:font-black' onClick={() => navigate('/')}>Where in the world ?</section>

            <section className='flex gap-2 justify-end min-w-[160px] my-auto md:mr-7 cursor-pointer'  onClick={handelMode} >
                <img src={darkMode ? dark : light} alt="icon" className='h-4 md:h-7'/>
                <section className='text-nowrap font-normal text-xs my-auto md:text-base '>{darkMode ? 'Light' : 'Dark'} Mode</section>
            </section>
        </div>
    )
}

export default Header