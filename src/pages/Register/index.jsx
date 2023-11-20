import "./style.css";
import { Button } from "../../components/Button/";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import { useContext } from "react";
import { LogonStateContext } from "../../hooks/contexts/LogonStateContext";

export const Register = () => {
  const {LogonState, setLogonState} = useContext(LogonStateContext)
  const navigate = useNavigate();

  // Form State Validation
  const [formState, setFormState] = useState({
    data: {
      fullname: '',
      nickname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
      // Validation functions
    validators: {
      fullname: (fullname) => {
        return /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/.test(fullname)
      },
      nickname: (nickname) => {
        // To implement: business logic here
        return /^(?:[A-Z][a-z]{2,19})(?: [A-Z][a-z]{2,19})*$/.test(nickname)
      },
      email: (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        );
      },
      password: (password) => {
        return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/.test(password)
      },
      confirmPassword: (password, confirmPassword) => {
        return password === confirmPassword
      }
    },
    errors: {}
  })

  // Input change handler
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormState((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        [name]: value
      }
    }))
    if (name === 'fullname') {
      const isValid = formState.validators.fullname(value)
      setFormState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          fullname: isValid ? '' : 'Por favor, insira seu nome completo.'
        }
      }))
    }
    if (name === 'nickname') {
      const isValid = formState.validators.nickname(value)
      setFormState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          nickname: isValid ? '' : 'Por favor, insira um nickname aceitável.'
        }
      }))
    }
    if (name === 'email') {
      const isValid = formState.validators.email(value)
      setFormState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          email: isValid ? '' : 'Por favor, insira um endereço de e-mail válido.'
        }
      }))
    }
    if (name === 'password') {
      const isValid = formState.validators.password(value)
      setFormState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          password: isValid ? '' : 'A senha precisa conter pelo menos 8 caracteres no total, incluindo uma letra maiúscula, um número e um caractere especial.'
        }
      }))
    }
    if (name === 'confirmPassword') {
      const isValid = formState.validators.confirmPassword(formState.data.password, value)
      setFormState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          confirmPassword: isValid ? '' : "As senhas não coincidem."
        }
      }))
    }
  }

  // Input states and data states
  // const [isValidName, setIsValidName] = useState(false);
  // const [isValidEmail, setIsValidEmail] = useState(false);
  // const [isValidPassword, setIsValidPassword] = useState(false);
  // const [passwordsIsEquals, setPasswordsIsEquals] = useState(false);
  // const [fullname, setFullname] = useState("");
  // const [nickname, setNickname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordCheck, setPasswordCheck] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  // const isAllValidHook = () => {
  // return isValidEmail && isValidName && isValidPassword && passwordsIsEquals
  // }

  // Registering a new user based on data from input states
  // const registerUser = async (e) => {
  //   const isAllValid = isAllValidHook()
  //   setIsLoading(true);
  //   const newUser = {
  //     fullname,
  //     nickname,
  //     email,
  //     password,
  //     birthdate: null
  //   };
  //   if (isAllValid) {
  //     try {
  //       // setIsLoading(true)  // redundant
  //       await api.createClient(newUser);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //       // Login(api.authenticateClient({email: password}))
  //       await api.authenticateClient({email, password})
  //       setLogonState({
  //         isLoggedIn: true,
  //         token: response.accessToken
  //     })
  //       navigate("/");
  //     }
  //   }
  // };

  const handleFormSubmit = async (e) => {
    const isFullnameValid = formState.validators.fullname(formState.data.fullname)
    const isNicknameValid = formState.validators.nickname(formState.data.nickname)
    const isEmailValid = formState.validators.email(formState.data.email)
    const isPasswordValid = formState.validators.password(formState.data.password)
    const isPasswordMatchValid = formState.validators.confirmPassword(formState.data.password, formState.data.confirmPassword)

    if (isFullnameValid && isNicknameValid && isEmailValid && isPasswordValid && isPasswordMatchValid) {
      const newUser = { ...formState.data }
      delete newUser.confirmPassword
        try {
        await api.createClient(newUser);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        // Login(api.authenticateClient({email: password}))
        await api.authenticateClient({email, password})
        setLogonState({
          isLoggedIn: true,
          token: response.accessToken
      })
        navigate("/");
      }
    }
    }
  

  return (
    <section className="register absolute w-full flex justify-center items-center align-center overflow-hidden">
      <div className="register_content flex flex-col px-10 w-full md:w-2/3 lg:w-1/4 md:px-0 text-center">
        <span className="register_content-text font-bold py-6">
          Criar conta
        </span>
        <form
          className="register_content-form flex flex-col justify-between items-center w-full gap-4 text-base"
          onSubmit={(e) => {
            e.preventDefault();
            // isAllValidHook()
            // registerUser();
            handleFormSubmit()
          }}
        >
          <div className="relative register-email w-full text-left flex flex-col gap-1">
            <label htmlFor="fullname" className="px-1">
              Nome completo
            </label>
            <input
              type="text"
              name="fullname"
              className={
                formState.data.fullname == ""
                  ? "w-full rounded-md h-8 appearance-none py-3 px-2"
                  : formState.validators.fullname(formState.data.fullname)
                  ? "is-valid w-full rounded-md h-8 appearance-none py-3 px-2"
                  : "is-invalid w-full rounded-md h-8 appearance-none py-3 px-2"
              }
              // onChange={(e) => {
              //   setFullname(e.target.value);
              //   setIsValidName(checkIsName(e.target.value));
              // }}
              onChange={handleInputChange}
              value={formState.data.fullname || ''}
              minLength="2"
              required
            />
            {formState.errors.fullname && (<p className="absolute flex flex-end -bottom-5 right-0 text-red-600 font-semibold text-sm">{formState.errors.fullname}</p>)}
          </div>
          <div className="register-nickname w-full text-left flex flex-col gap-1">
            <label htmlFor="nickname" className="px-1 flex gap-2">
              Nome de exibição{" "}
              <a
                className="flex items-center"
                title="Como gostaria de ser chamado(a)?"
                tabIndex="0"
              >
                <BsFillQuestionCircleFill />
              </a>
            </label>
            <input
              type="text"
              name="nickname"
              className={
                formState.data.nickname == ""
                  ? "w-full rounded-md h-8 appearance-none py-3 px-2"
                  : formState.validators.nickname(formState.data.nickname)
                  ? "is-valid w-full rounded-md h-8 appearance-none py-3 px-2"
                  : "is-invalid w-full rounded-md h-8 appearance-none py-3 px-2"
              }
              // onChange={(e) => {
              //   setNickname(e.target.value);
              // }}
              onChange={handleInputChange}
              value={formState.data.nickname || ''}
            />
          </div>
          <div className="register-email w-full text-left flex flex-col gap-1">
            <label htmlFor="email" className="px-1">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className={
                formState.data.email == ""
                  ? "w-full rounded-md h-8 appearance-none py-3 px-2"
                  : formState.validators.email(formState.data.email)
                  ? "is-valid w-full rounded-md h-8 appearance-none py-3 px-2"
                  : "is-invalid w-full rounded-md h-8 appearance-none py-3 px-2"
              }
              // onChange={(e) => {
              //   setEmail(e.target.value);
              //   setIsValidEmail(checkIsEmail(e.target.value));
              // }}
              onChange={handleInputChange}
              value={formState.data.email || ''}
              required
            />
          </div>
          <div className="register-password w-full text-left flex flex-col gap-1">
            <label htmlFor="password" className="px-1">
              Senha
            </label>
            <input
              type="password"
              name="password"
              className={
                formState.data.password == ""
                  ? "w-full rounded-md h-8 appearance-none py-3 px-2"
                  : formState.validators.password(formState.data.password)
                  ? "is-valid w-full rounded-md h-8 appearance-none py-3 px-2"
                  : "is-invalid w-full rounded-md h-8 appearance-none py-3 px-2"
              }
              // onChange={(e) => {
              //   setPassword(e.target.value);
              //   setIsValidPassword(checkIsPassword(e.target.value));
              // }}
              onChange={handleInputChange}
              value={formState.data.password || ''}
              minLength="6"
              required
            />
          </div>
          <div className="register-password_check w-full text-left flex flex-col gap-1">
            <label htmlFor="confirmPassword" className="px-1">
              Confirmar senha
            </label>
            <input
              type="password"
              name="confirmPassword"
              className={
                formState.data.confirmPassword == ""
                  ? "w-full rounded-md h-8 appearance-none py-3 px-2"
                  : formState.validators.confirmPassword(formState.data.password, formState.data.confirmPassword)
                  ? "is-valid w-full rounded-md h-8 appearance-none py-3 px-2"
                  : "is-invalid w-full rounded-md h-8 appearance-none py-3 px-2"
              }
              // onChange={(e) => {
              //   setPasswordCheck(e.target.value);
              //   setPasswordsIsEquals(
              //     checkPasswordsIsEquals(e.target.value, password)
              //   );
              // }}
              onChange={handleInputChange}
              value={formState.data.confirmPassword || ''}
              required
            />
          </div>
          <div className="register-button mt-8 w-full">
            <Button
              text={isLoading ? "" : "Criar conta"}
              variant="primary"
              width="100%"
              fontSize="16px"
              type="submit"
              // disabled={!isAllValidHook()}
            />

            <div
              className={
                isLoading
                  ? "relative spinner -top-10 left-1/2 border-solid border-4 border-transparent border-t-5 border-t-[#545776] rounded-full animate-spin h-6 w-6"
                  : "hidden"
              }
            ></div>
          </div>
          <span className="text-sm">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-cyan-500">
              Iniciar sessão
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
};
