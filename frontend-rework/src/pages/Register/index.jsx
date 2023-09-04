import './style.css'
import { Button } from '../../components/Button/'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'

export const Register = () => {
    const [fullname, setFullname] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    const registerUser = async (e) => {
        const newUser = {
            fullname,
            nickname,
            email,
            password,
            passwordCheck
        }
        try {
            await api.createClient(newUser)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className='register absolute w-full flex justify-center items-center align-center overflow-hidden'>
            <div className='register_content flex flex-col px-10 w-full md:w-2/3 lg:w-1/4 md:px-0 text-center'>
            <span className='register_content-text font-bold py-6'>Criar conta</span>
                <form className='register_content-form flex flex-col justify-between items-center w-full gap-4 text-base' onSubmit={(e) => {
                    e.preventDefault()
                    registerUser()}}>
                    <div className='register-email w-full text-left flex flex-col gap-1'>
                        <label htmlFor='email' className='px-1'>Nome completo</label>
                        <input type="text" name="email" className='w-full rounded-md h-8 appearance-none py-3 px-2' onChange={(e) => {setFullname(e.target.value)}} minLength="2"/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>Nome de exibição <a title='Como gostaria de ser chamado(a)?' tabIndex='0'>?</a></label>
                        <input type="text" name="password" className='w-full rounded-md h-8 appearance-none py-3 px-2' onChange={(e) => {setNickname(e.target.value)}}/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>E-mail</label>
                        <input type="email" name="password" className='w-full rounded-md h-8 appearance-none py-3 px-2' onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>Senha</label>
                        <input type="password" name="password" className='w-full rounded-md h-8 appearance-none py-3 px-2' onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>Confirmar senha</label>
                        <input type="password" name="password" className='w-full rounded-md h-8 appearance-none py-3 px-2' onChange={(e) => {setPasswordCheck(e.target.value)}}/>
                    </div>
                    <div className='register-button mt-8 w-full'>
                    <Button text='Criar conta' variant='primary' width='100%' fontSize="16px" type='submit'/>
                    </div>
                    <span className='text-sm'>Já tem uma conta? <Link to='/login' className='text-cyan-500'>Iniciar sessão</Link></span>
                </form>
            </div>
        </section>
    )
}