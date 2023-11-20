import { HeaderStyledTag } from './styles'
import { Link } from "react-router-dom"
import logo from '../../assets/logo/booking_hub_logo_semfundo.png'
import MobileMenu from './MobileMenu'
import { AccountMenu } from './AccountMenu'

export const Header = ({sidebar, setSidebar}) => {

    return (
        <HeaderStyledTag>
            <nav className='nav-menu flex justify-between w-full h-full'>
                <article className='nav-logo h-full'>
                   <Link to="/" className='inline-flex h-full'>
                        <img src={logo} alt='Booking Hub Logo' className='w-16 self-end' />  
                        <span className='hidden md:block text-lg self-center text-slate-500'>Seu conforto em primeiro lugar</span>  
                    </Link> 
                </article>
                <MobileMenu setSidebar={setSidebar} sidebar={sidebar}/>
                <AccountMenu />
            </nav>
        </HeaderStyledTag>
    )
}