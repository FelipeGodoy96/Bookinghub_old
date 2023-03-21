import './styles.css'
import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"


export const Sidebar = ({sidebar, setSidebar, login, setLogin}) => {
    const handleLogoff = () => {
        setSidebar(false)
        setLogin(false)
    }
    return (
        <div className={sidebar ? 'sidebar opened ' + 'md:hidden w-full h-full top-0 fixed z-10 bg-white text-md font-bold' : 'sidebar closed ' + 'md:hidden w-full h-full top-0 fixed z-10 bg-white text-md font-bold'}>
            <section className="loginState relative">
                <button className='sidebar-close w-8 h-8 text-white' onClick={() => {setSidebar(false)}}>
                    X
                </button>
                
                {!login ? (
                    <span className='text-white absolute bottom-0 right-0 mx-2 my-1 text-right'>
                        MENU
                    </span>
                ) : (<>
                    <div className='avatar absolute bottom-0 right-0 mx-2 my-1 text-right'>
<p>
                        Hello Fulano
                    </p>
                    </div>
                    
                </>)}

            </section>
            <section className='sidebar-menu text-right'>
                <ul className='text-black'>
            {!login ? (<>
                        <li className='mr-4 my-5'>
                            <Link to="/register">Criar conta</Link>
                        </li>
                        <hr className='h-px mx-2 bg-gray-700 border-0'/>
                        <li className='mr-4 my-5'>
                            <Link to="/login">Fazer login</Link>
                        </li>
                        </>) : (<>
                        <li className='mr-4 mt-96 mb-1 text-right'>
                            Deseja <span className='colored'><Link to='/' onClick={() => {
                                handleLogoff()

                            }}>encerrar a sessão</Link></span>?
                        </li>
                        <hr className='h-px mx-2 bg-gray-700 border-0'/>
                        
            </>)}
                </ul>
                    
            </section>

            <section className='sidebar-socialmedia absolute bottom-0 right-0'>
                            <ul className='flex flex-row justify-end items-center gap-4 my-8 mx-4'>
                                <li>
                                    <Link to="" >
                                        <BsFacebook size={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" >
                                        <FaLinkedinIn size={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" >
                                        <BsTwitter size={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" >
                                        <BsInstagram size={24} />
                                    </Link>
                                </li>
                            </ul>
            </section>

            

        </div>
    )
}