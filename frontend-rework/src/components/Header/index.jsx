import { HeaderComponent } from './styles'
import { Link } from "react-router-dom"
import logo from '../../assets/logo/booking_hub_logo_semfundo.png'
import { Button } from '../Button'
import { RxHamburgerMenu } from "react-icons/rx"

export const Header = ({sidebar, setSidebar, login, setLogin}) => {

    return (
        <HeaderComponent>
            <nav className='nav-menu flex justify-between w-full h-full'>
                <div className='nav-logo h-full'>
                   <Link to="/" className='inline-flex h-full'>
                        <img src={logo} alt='Booking Hub Logo' className='w-16' />  
                        <span className='hidden md:block text-lg self-center text-slate-500'>Seu conforto em primeiro lugar</span>  
                    </Link> 
                </div>

                <div className='menu-hamburguer md:hidden flex items-center'>
                    <RxHamburgerMenu size={24} onClick={() => {setSidebar(true)}} />
                </div>

                {!login && (
                    <div className='menu-loggedoff hidden md:flex justify-between items-center gap-6'>
                        <Link to="/register">
                            <Button text='Criar conta' variant='secondary' width='206px' />
                        </Link>
                        <Link to="/login">
                            <Button text='Iniciar sessão' variant='secondary' width='206px' />
                        </Link> 
                    </div>
                )}

                {login && (
                    <div className='menu-loggedin hidden md:flex justify-between items-center gap-6'>
                        teste
                    </div>
                )}
            </nav>
        </HeaderComponent>
    )
}