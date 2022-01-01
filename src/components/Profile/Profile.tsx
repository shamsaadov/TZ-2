import React, { useContext } from "react";
import { authLogin } from "../../constants/loginPassword";
import { IAuthInterface } from "../../interfaces/auth.interface";
import { AuthContext } from "../../context/Auth.context";
import { LOGIN_STORAGE_KEY } from "../../constants/localStorage";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: #f5f5f5;
  border-radius: 3px;
  border: 8px;
  color: black;
`;

const Profile = () => {
  const { setAuthState } = useContext<IAuthInterface>(AuthContext);
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.removeItem(LOGIN_STORAGE_KEY);
    setAuthState(false);
    history.push("/login");
  };
  return (
    <div>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Здравствуйте, <b> {authLogin}</b>{" "}
      </p>
      <Button onClick={handleLogOut}>Выйти</Button>
    </div>
  );
};

export default Profile;
