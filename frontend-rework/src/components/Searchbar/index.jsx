import './styles.css'
import { Button } from '../Button'


export const Searchbar = () => {
    return (
        <>
            <div className='searchbar flex flex-col justify-center gap-2 text-center px-2 text-white font-bold h-auto'>
                <div className='searchbar-text text-3xl py-4'>
                    <p>Buscar ofertas em hotéis, casas e muito mais</p>
                </div>
               <div className='searchbar-search flex flex-col md:flex-row gap-2 py-4'>
                <input placeholder="Onde vamos?" className='search-location rounded h-10 pl-10 text-sm font-semibold'/>
                <input placeholder="Check in - Checkout" className='search-date rounded h-10 pl-10 text-sm font-semibold' />
                <div className='searchbar-button_responsive w-full md:w-1/6'>
                   <Button text="Buscar" variant="primary" width="100%" /> 
                </div>
                </div>
            </div>
        </>
    )
}