import './style.css'
import { Button } from '../../components/Button/'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'

export const Register = () => {
    // Input states and data states
    const [isValidName, setIsValidName] = useState(null)
    const [isValidEmail, setIsValidEmail] = useState(null)
    const [isValidPassword, setIsValidPassword] = useState(null)
    const [passwordsIsEquals, setPasswordsIsEquals] = useState(null)
    const [fullname, setFullname] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    // Validating data from input states
    const checkIsName = (name) => {
        return /^[a-z ,.'-]+$/i.test(name) 
    }

    const checkIsNickname = (nickname) => {
        // To implement: business logic here
        return nickname.length >= 4
    }

    const checkIsEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
      }

    const checkIsPassword = (password) => {
        return password.length >= 6
    }

    const checkPasswordsIsEquals = (pwCheck, pw) => {
        return pwCheck === pw
    }

    // Registering a new user based on data from input states
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
                        <input type="text" name="email" className={
                            fullname == '' ? 'w-full rounded-md h-8 appearance-none py-3 px-2' :
                            checkIsName(fullname) ? 
                            'is-valid w-full rounded-md h-8 appearance-none py-3 px-2' : 'is-invalid w-full rounded-md h-8 appearance-none py-3 px-2'
                        } onChange={(e) => {
                            setFullname(e.target.value)
                            setIsValidName(checkIsName(fullname))
                            }} 
                            minLength="2"
                            required/>
                    </div>
                    <div className='register-nickname w-full text-left flex flex-col gap-1'>
                        <label htmlFor='nickname' className='px-1'>Nome de exibição <a title='Como gostaria de ser chamado(a)?' tabIndex='0'>?</a></label>
                        <input type="text" name="nickname" className={
                            nickname == '' ? 'w-full rounded-md h-8 appearance-none py-3 px-2' : 
                            checkIsNickname(nickname) ? 
                            'is-valid w-full rounded-md h-8 appearance-none py-3 px-2' : 'is-invalid w-full rounded-md h-8 appearance-none py-3 px-2'
                    } onChange={(e) => {setNickname(e.target.value)}}/>
                    </div>
                    <div className='register-email w-full text-left flex flex-col gap-1'>
                        <label htmlFor='email' className='px-1'>E-mail</label>
                        <input type="email" name="email" className={
                            email == '' ? 'w-full rounded-md h-8 appearance-none py-3 px-2' :
                            checkIsEmail(email) ?
                            'is-valid w-full rounded-md h-8 appearance-none py-3 px-2' : 'is-invalid w-full rounded-md h-8 appearance-none py-3 px-2'
                        } onChange={(e) => {
                            setEmail(e.target.value)
                            setIsValidEmail(checkIsEmail(email))
                            }}
                            required/>
                    </div>
                    <div className='register-password w-full text-left flex flex-col gap-1'>
                        <label htmlFor='password' className='px-1'>Senha</label>
                        <input type="password" name="password" className={
                            password == '' ? 'w-full rounded-md h-8 appearance-none py-3 px-2' :
                            checkIsPassword(password) ? 
                            'is-valid w-full rounded-md h-8 appearance-none py-3 px-2' : 'is-invalid w-full rounded-md h-8 appearance-none py-3 px-2'
                        } onChange={(e) => {
                            setPassword(e.target.value)
                            setIsValidPassword(checkIsPassword(password))
                            }} 
                            minLength="6"
                            required/>
                    </div>
                    <div className='register-password_check w-full text-left flex flex-col gap-1'>
                        <label htmlFor='passwordcheck' className='px-1'>Confirmar senha</label>
                        <input type="password" name="passwordcheck" className={
                            passwordCheck == '' ? 'w-full rounded-md h-8 appearance-none py-3 px-2' :
                            checkPasswordsIsEquals(passwordCheck, password) ?
                            'is-valid w-full rounded-md h-8 appearance-none py-3 px-2' : 'is-invalid w-full rounded-md h-8 appearance-none py-3 px-2'
                        } onChange={(e) => {
                            setPasswordCheck(e.target.value)
                            setPasswordsIsEquals(checkPasswordsIsEquals(passwordCheck, password))
                        }}
                        required/>
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