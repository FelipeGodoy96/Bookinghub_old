import "./style.css";
import { Button } from "../../components/Button/";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

export const Register = () => {
  const navigate = useNavigate();

  // Input states and data states
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordsIsEquals, setPasswordsIsEquals] = useState(false);
  const [fullname, setFullname] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Validating data from input states
  const checkIsName = (name) => {
    // return /^[a-z ,.'-]+$/i.test(name);
    return /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/.test(name)
  };
  const checkIsNickname = (nickname) => {
    // To implement: business logic here
    return nickname.length >= 4;
  };
  const checkIsEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
  const checkIsPassword = (password) => {
    return password.length >= 6;
  };
  const checkPasswordsIsEquals = (pwCheck, pw) => {
    return pwCheck === pw;
  };

  // Registering a new user based on data from input states
  const registerUser = async (e) => {
    setIsLoading(true);
    const newUser = {
      fullname,
      nickname,
      email,
      password,
      birthdate: null
    };
    if (isValidName && isValidEmail && isValidPassword && passwordsIsEquals) {
      try {
        setIsLoading(true)
        await api.createClient(newUser);
        // navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

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
            registerUser();
          }}
        >
          <div className="register-email w-full text-left flex flex-col gap-1">
            <label htmlFor="email" className="px-1">
              Nome completo
            </label>
            <input
              type="text"
              name="email"
              className={
                fullname == ""
                  ? "w-full rounded-md h-8 appearance-none py-3 px-2"
                  : checkIsName(fullname)
                  ? "is-valid w-full rounded-md h-8 appearance-none py-3 px-2"
                  : "is-invalid w-full rounded-md h-8 appearance-none py-3 px-2"
              }
              onChange={(e) => {
                setFullname(e.target.value);
                setIsValidName(checkIsName(e.target.value));
              }}
              minLength="2"
              required
            />
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
                nickname == ""
                  ? "w-full rounded-md h-8 appearance-none py-3 px-2"
                  : checkIsNickname(nickname)
                  ? "is-valid w-full rounded-md h-8 appearance-none py-3 px-2"
                  : "is-invalid w-full rounded-md h-8 appearance-none py-3 px-2"
              }
              onChange={(e) => {
                setNickname(e.target.value);
              }}
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
                email == ""
                  ? "w-full rounded-md h-8 appearance-none py-3 px-2"
                  : checkIsEmail(email)
                  ? "is-valid w-full rounded-md h-8 appearance-none py-3 px-2"
                  : "is-invalid w-full rounded-md h-8 appearance-none py-3 px-2"
              }
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValidEmail(checkIsEmail(e.target.value));
              }}
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
                password == ""
                  ? "w-full rounded-md h-8 appearance-none py-3 px-2"
                  : checkIsPassword(password)
                  ? "is-valid w-full rounded-md h-8 appearance-none py-3 px-2"
                  : "is-invalid w-full rounded-md h-8 appearance-none py-3 px-2"
              }
              onChange={(e) => {
                setPassword(e.target.value);
                setIsValidPassword(checkIsPassword(e.target.value));
              }}
              minLength="6"
              required
            />
          </div>
          <div className="register-password_check w-full text-left flex flex-col gap-1">
            <label htmlFor="passwordcheck" className="px-1">
              Confirmar senha
            </label>
            <input
              type="password"
              name="passwordcheck"
              className={
                passwordCheck == ""
                  ? "w-full rounded-md h-8 appearance-none py-3 px-2"
                  : checkPasswordsIsEquals(passwordCheck, password)
                  ? "is-valid w-full rounded-md h-8 appearance-none py-3 px-2"
                  : "is-invalid w-full rounded-md h-8 appearance-none py-3 px-2"
              }
              onChange={(e) => {
                setPasswordCheck(e.target.value);
                setPasswordsIsEquals(
                  checkPasswordsIsEquals(e.target.value, password)
                );
              }}
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
              disabled={isLoading}
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
