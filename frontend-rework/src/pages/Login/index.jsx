import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/'
import './styles.css'

export const Login = () => {
    return (
        <section className='login absolute w-full flex justify-center items-center align-center overflow-hidden'>
            <div className='login_content flex flex-col w-full mx-10 md:w-1/4 md:mx-0 text-center'>
                <span className='login_content-text font-bold my-6'>Iniciar sessão</span>
                <form className='login_content-form flex flex-col justify-between items-center w-full gap-4 text-base' onSubmit={(event) => {
                    event.preventDefault()
                }}>
                    <div className='content_form-email w-full text-left flex flex-col gap-1'>
                        <label htmlFor='email' className='px-1'>E-mail</label>
                        <input type="email" name="email" className='w-full rounded-md h-8 appearance-none py-3 px-2'/>
                    </div>
                    <div className='content_form-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>Senha</label>
                        <input type="password" name="password" className='w-full rounded-md h-8 appearance-none py-3 px-2' placeholder='* * * * * * * *'/>
                    </div>
                    <div className='content_form-button mt-8'>
                        <Button text='Entrar' variant='primary' width='19.375rem' fontSize="16px" type='submit'/>
                    </div>
                    <span className='content_form-register text-sm'>Ainda não tem conta? <Link to='/register' className='text-cyan-500'>Registre-se.</Link></span>
                    <span className='conent_form-lostpw text-sm'>Esqueceu sua senha? <Link to='/forgotpw' className='text-cyan-500'>Recupere-a.</Link></span>
                </form>
            </div>
        </section>
    )
}