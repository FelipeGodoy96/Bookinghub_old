import './styles.css'
import { Link } from "react-router-dom"


export const Sidebar = ({sidebar, setSidebar, login, setLogin}) => {
    return (
        <div className={sidebar ? 'opened ' + 'md:hidden w-full h-full top-0 fixed z-10 bg-white text-md font-bold' : 'closed ' + 'md:hidden w-full h-full top-0 fixed z-10 bg-white text-md font-bold'}>
            <section className="loginState relative">
                <button className='closeDrawer w-8 h-8 text-white' onClick={() => {
                    console.log(sidebar)
                    setSidebar(!sidebar)}}>
                    X
                </button>
                
                {!login && (
                    <span className='text-white absolute bottom-0 right-0 mx-2 my-1 text-right'>
                        MENU
                    </span>
                )}

            </section>
            <section className='drawerOptions text-right'>
                <ul className='text-black'>
            {!login && (<>
                        <li className='mr-4 my-5'>
                            <Link to="/register">Criar conta</Link>
                        </li>
                        <hr className='h-px mx-2 bg-gray-700 border-0'/>
                        <li className='mr-4 my-5'>
                            <Link to="/login">Fazer login</Link>
                        </li>
                        </>)}

            {login && (<>
                <hr className='h-px mx-2 bg-gray-700 border-0'/>
                         <li className='mr-4 my-5 absolute bottom-20 text-right'>
                            Deseja <span className='colored'><Link onClick={(event) => {
                                event.preventDefault()
                            }}>encerrar a sessão</Link></span>?
                        </li>
            </>)}
                </ul>
                    
            </section>

            <section className='loggedinOptions text-right'>
            <hr className='h-px mx-2 bg-gray-700 border-0'/>
                    <ul>
                         <li className='mr-4 my-5 absolute bottom-20'>
                            Deseja <span className='colored'><Link onClick={(event) => {
                                event.preventDefault()
                            }}>encerrar a sessão</Link></span>?
                        </li>
                    </ul>
                       
            </section>

        </div>
    )
}