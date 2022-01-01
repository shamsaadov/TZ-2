import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IProfile } from "../../interfaces/profile.interface";
import { authLogin } from "../../constants/loginPassword";
import { authPassword } from "../../constants/loginPassword";
import { IAuthInterface } from "../../interfaces/auth.interface";
import { AuthContext } from "../../context/Auth.context";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 500px;
  border-radius: 15px;
`;
const StyledLabel = styled.label`

`
const Button = styled.button`
  background: #f5f5f5;
  border-radius: 3px;
  border: 8px;
  color: black;
`;

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuthState } = useContext<IAuthInterface>(AuthContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfile>();

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = handleSubmit((data) => {
    if (authLogin === data.login && authPassword === data.password) {
      setAuthState(true);
      setLoading(true);
    } else {
      return <div className="error">Введите логин</div>;
    }
  });

  useEffect(() => {
    if (auth) {
      let timer = setTimeout(() => {
        history.push("/profile");
      }, 3000);
      return () => {
        setLoading(false);
        clearTimeout(timer);
      };
    }
  }, [auth]);

  return (
    <main>
      <form onSubmit={onSubmit}>
        <div>
          <StyledLabel htmlFor="login">Логин</StyledLabel>
          <StyledInput
            {...register("login", { required: true, maxLength: 30 })}
            id="login"
            type="text"
            onChange={handleLogin}
            value={login}
          />
          {errors.login && <div className="error">Введите логин</div>}
        </div>
        <div>
          <StyledLabel htmlFor="password">Пароль</StyledLabel>
          <StyledInput
            {...register("password", { required: true, maxLength: 30 })}
            id="password"
            type="password"
            onChange={handlePassword}
            value={password}
          />
          {errors.password && <div className="error">Введите пароль</div>}
        </div>
        <Button disabled={loading} type="submit">
          Войти
        </Button>
      </form>
    </main>
  );
};

export default Login;
