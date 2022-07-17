import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  return (
    <div className="merchContainer">
      <div className="merchCard">
        <div className="text-3xl">
          If you want to access the Merch Store, you have to Login.
        </div>
        <br></br>
        <LoginForm />
        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push("/registration");
            }}
          >
            Register
          </button>
        </center>
      </div>
    </div>
  );
}

export default LoginPage;
