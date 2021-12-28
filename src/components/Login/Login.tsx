import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IProfile } from "../../interfaces/profile.interface";
import { authLogin } from "../../constants/loginPassword";
import { authPassword } from "../../constants/loginPassword";
import { IAuthInterface } from "../../interfaces/auth.interface";
import { AuthContext } from "../../context/Auth.context";
import {useHistory} from "react-router-dom";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext<IAuthInterface>(AuthContext);
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
    console.log(login, password);
    if (authLogin === data.login || authPassword === data.password) {
      setAuthState(true);
      history.push('/profile')
    } else {
      alert('error')
    }
  });

  return (
    <main>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="login">Логин</label>
          <input
            {...register("login", { required: true, maxLength: 30 })}
            id="login"
            type="text"
            onChange={handleLogin}
            value={login}
          />
          {errors.login && <div className="error">Введите логин</div>}
        </div>
        <div>
          <label htmlFor="password">Пароль</label>
          <input
            {...register("password", { required: true, maxLength: 30 })}
            id="password"
            type="password"
            onChange={handlePassword}
            value={password}
          />
          {errors.password && <div className="error">Введите пароль</div>}
        </div>
        <button type="submit">Войти</button>
      </form>
    </main>
  );
}

export default App;
