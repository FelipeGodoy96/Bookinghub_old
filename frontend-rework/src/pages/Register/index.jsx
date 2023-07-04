import './style.css'
import { Button } from '../../components/Button/'
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        <section className='register absolute w-full flex justify-center items-center align-center overflow-hidden'>
            <div className='register_content'>
            <span className='content_text font-bold my-6'>Criar conta</span>
                <form className='register-form flex flex-col justify-between items-center w-full gap-6' onSubmit={(event) => {
                    event.preventDefault()
                }}>
                    <div className='register-email w-full text-left flex flex-col gap-2'>
                        <label htmlFor='email' className='px-1'>Nome</label>
                        <input type="email" name="email" className='w-full rounded-md h-10 appearance-none py-3 px-2'/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-2'>
                        <label htmlFor='password' className='px-1'>Sobrenome</label>
                        <input type="password" name="password" className='w-full rounded-md h-10 appearance-none py-3 px-2'/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-2'>
                        <label htmlFor='password' className='px-1'>E-mail</label>
                        <input type="password" name="password" className='w-full rounded-md h-10 appearance-none py-3 px-2'/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-2'>
                        <label htmlFor='password' className='px-1'>Senha</label>
                        <input type="password" name="password" className='w-full rounded-md h-10 appearance-none py-3 px-2'/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-2'>
                        <label htmlFor='password' className='px-1'>Confirmar senha</label>
                        <input type="password" name="password" className='w-full rounded-md h-10 appearance-none py-3 px-2'/>
                    </div>
                    <div className='register-button mt-8'>
                        <Button text='Entrar' variant='primary' width='12.875rem' type='submit'/>
                    </div>
                    <span className='text-sm'>Ainda não tem conta? <Link to='/register' className='text-cyan-500'>Registre-se.</Link></span>
                    <span className='text-sm'>Esqueceu sua senha? <Link to='/forgotpw' className='text-cyan-500'>Recupere-a.</Link></span>
                </form>
            </div>
        </section>
    )
}