import { Link } from "react-router-dom"
import { Button } from "../Button"
import { useContext, useState } from "react";
import { LogonStateContext } from "../../hooks/contexts/LogonStateContext";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AccountMenu = () => {

    const [showMenuOptions, setShowMenuOptions] = useState(true)
    const [user, setUser] = useState({})
    const {logonState, setLogonState} = useContext(LogonStateContext)

            //the below function is from @MaterialUI
            function stringToColor(string) {
                let hash = 0;
                let i;
                for (i = 0; i < string.length; i += 1) {
                  hash = string.charCodeAt(i) + ((hash << 5) - hash);
                }
              
                let color = '#';
              
                for (i = 0; i < 3; i += 1) {
                  const value = (hash >> (i * 8)) & 0xff;
                  color += `00${value.toString(16)}`.slice(-2);
                }
                return color;
              }
        
            function stringAvatar(name) {
                return {
                    bgcolor: stringToColor(name),
                    abbrName: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
                    fullname: name
                };
              }

    useEffect(() => {
        try {
            const decodedJwt = jwtDecode(logonState.token)
            setUser(stringAvatar(decodedJwt.fullname))
        }
        catch (error) {
             console.log(localStorage.getItem('logonState'))  // No User Logged In
        }
    }, [logonState])

return (
    <>
    {!logonState.isLoggedIn ? (
        <div className='menu-loggedoff hidden md:flex justify-between items-center gap-6'>
            <Link to="/register">
                <Button text='Criar conta' variant='secondary' width='12.875rem' />
            </Link>
            <Link to="/login">
                <Button text='Iniciar sessão' variant='secondary' width='12.875rem' />
            </Link> 
        </div>
    ) : (<div className='menu-loggedIn hidden relative md:flex flex-row items-center gap-4 overflow-hidden select-none max-w-sm px-6 font-semibold'>
    <div style={{backgroundColor: user.bgcolor}} className="menu-loggedIn_avatar hidden md:flex justify-center items-center w-10 h-10 rounded-full text-center text-white text-lg cursor-pointer">{user.abbrName}</div>
    <div className="menu-loggedIn_name hidden md:inline-block leading-snug">Olá, <br/> <span className="text-[#1dbeb4]">{user.fullname}</span></div>
    {showMenuOptions && (<div className="menu-loggedIn_options hidden md:block absolute top-12 pt-6 -ml-24 w-60 bg-white">
        <ul>
            <li>item1</li>
            <li>item2</li>
        </ul>
    </div>)}
</div>)}
    </>
)
}
