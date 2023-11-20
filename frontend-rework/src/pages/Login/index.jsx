import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/'
import './styles.css'
import api from "../../services/api";
import { useState } from 'react';
import { useContext } from 'react';
import { LogonStateContext } from '../../hooks/contexts/LogonStateContext';

export const Login = () => {
    const {logonState, setLogonState} = useContext(LogonStateContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Defining Login function

    const performLogin = async () => {
        if (logonState.isLoggedIn) {
            console.warn('You are already logged in.')
            navigate("/")
            return
        }
        try {
            const response = await api.authenticateClient({email, password})
            await setLogonState({
                    isLoggedIn: true,
                    token: response.accessToken
                })
                navigate("/")
        } catch (error) {
            console.warn("Failed to perform login")
            return
        } finally {
            // navigate("/")
        }
    }

    
    return (
        <section className='login absolute w-full flex justify-center items-center align-center overflow-hidden'>
            <div className='login_content flex flex-col w-full px-10 md:w-2/3 lg:w-1/4 md:px-0 text-center'>
                <span className='login_content-text font-bold my-6'>Iniciar sessão</span>
                <form className='login_content-form flex flex-col justify-between items-center w-full gap-4 text-base' onSubmit={(event) => {
                    event.preventDefault()
                    performLogin()
                }}>
                    <div className='content_form-email w-full text-left flex flex-col gap-1'>
                        <label htmlFor='email' className='px-1'>E-mail</label>
                        <input id='email' type="email" name="email" className='w-full rounded-md h-8 appearance-none py-3 px-2'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='content_form-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>Senha</label>
                        <input id='password' type="password" name="password" className='w-full rounded-md h-8 appearance-none py-3 px-2' placeholder='* * * * * * * *'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='content_form-button mt-8 mb-4 w-full'>
                        <Button text='Entrar' variant='primary' width='100%' fontSize="16px" type='submit'/>
                    </div>
                    <span className='content_form-register text-sm'>Ainda não tem conta? <Link to='/register' className='text-cyan-500'>Registre-se.</Link></span>
                    <span className='conent_form-lostpw text-sm'>Esqueceu sua senha? <Link to='/forgotpw' className='text-cyan-500'>Recupere-a.</Link></span>
                </form>
            </div>
        </section>
    )
}