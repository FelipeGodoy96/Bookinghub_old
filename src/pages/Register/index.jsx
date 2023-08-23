import './style.css'
import { Button } from '../../components/Button/'
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        <section className='register absolute w-full flex justify-center items-center align-center overflow-hidden'>
            <div className='register_content flex flex-col mx-10 w-full text-center'>
            <span className='register_content-text font-bold py-6'>Criar conta</span>
                <form className='register_content-form flex flex-col justify-between items-center w-full gap-4 text-base' onSubmit={(event) => {
                    event.preventDefault()
                }}>
                    <div className='register-email w-full text-left flex flex-col gap-1'>
                        <label htmlFor='email' className='px-1'>Nome completo</label>
                        <input type="email" name="email" className='w-full rounded-md h-8 appearance-none py-3 px-2'/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>Nome de exibição <a title='Nome que deseja ser chamado' tabIndex='0'>?</a></label>
                        <input type="password" name="password" className='w-full rounded-md h-8 appearance-none py-3 px-2'/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>E-mail</label>
                        <input type="password" name="password" className='w-full rounded-md h-8 appearance-none py-3 px-2'/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>Senha</label>
                        <input type="password" name="password" className='w-full rounded-md h-8 appearance-none py-3 px-2'/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>Confirmar senha</label>
                        <input type="password" name="password" className='w-full rounded-md h-8 appearance-none py-3 px-2'/>
                    </div>
                    <div className='register-button mt-8'>
                    <Button text='Criar conta' variant='primary' width='19.375rem' fontSize="16px" type='submit'/>
                    </div>
                    <span className='text-sm'>Já tem uma conta? <Link to='/login' className='text-cyan-500'>Iniciar sessão</Link></span>
                </form>
            </div>
        </section>
    )
}