import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/'
import './styles.css'

export const Login = () => {
    return (
        <section className='login-section absolute w-full flex justify-center items-center align-center overflow-hidden'>
            <div className='login-content flex flex-col w-full mx-20 md:w-1/4 md:mx-0 text-center'>
                <span className='login-text font-bold my-6'>Iniciar sessão</span>
                <form className='login-form flex flex-col justify-between items-center w-full gap-6'>
                    <div className='login-email w-full text-left flex flex-col gap-2'>
                        <label htmlFor='email' className='px-1'>E-mail</label>
                        <input type="email" name="email" className='w-full rounded-md h-10'/>
                    </div>
                    <div className='login-password w-full text-left flex flex-col gap-2'>
                        <label htmlFor='password' className='px-1'>Senha</label>
                        <input type="password" name="password" className='w-full rounded-md h-10' placeholder='* * * * * * * *'/>
                    </div>
                    <div className='login-button mt-8'>
                        <Button text='Entrar' variant='primary' width='12.875rem'/>
                    </div>
                    <span className='text-sm'>Ainda não tem conta? <Link to='/register' className='text-cyan-500'>Registre-se.</Link></span>
                </form>
            </div>
        </section>
    )
}