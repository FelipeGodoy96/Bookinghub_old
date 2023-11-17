import { useContext } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { LogonStateContext } from "../../hooks/contexts/LogonStateContext"

export const MobileMenu = ({setSidebar}) => {
    const {logonState, setLogonState} = useContext(LogonStateContext)
    return (
        <>
        <button className='menu-hamburguer md:hidden flex items-center' onClick={() => {setSidebar(true)}}>
        <RxHamburgerMenu size={24} />
        </button>
        {/* <button onClick={() => {setLogonState({isLoggedIn: false, token: null})}}></button> */}
        </>
    )
}

export default MobileMenu   