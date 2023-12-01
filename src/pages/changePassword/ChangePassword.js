import React, { useState } from "react";
import "./ChangePassword.scss";

// COMPONENTS
import Card from "../../components/card/Card";
import PasswordInput from "../../components/passwordInput/passwordInput";

// ASSETS

import PageMenu from "../../components/pageMenu/PageMenu";

const initialState = {
  oldPassword: "",
  password: "",
  password2: ""
 
};

const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);

  const {oldPassword, password, password2} = formData

  const handleInputChange = () => {};

  return (
    <div className="container">
      <PageMenu />
      <h2 className="--flex-center">Change Password</h2>
      <div className="--flex-center profile">
        <Card cardClass={"card"}>
          <>
            <form>
              <p>
                <label>Current Password:</label>
                <PasswordInput
                  placeholder="Current Password"
                  name="password"
                  value={oldPassword}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <label>New Password:</label>
                <PasswordInput
                  placeholder="New Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <label>Confirm New Password:</label>
                <PasswordInput
                  placeholder="Confirm NewPassword"
                  name="password2"
                  value={password2}
                  onChange={handleInputChange}
                />
              </p>

              <button className="--btn --btn-danger --btn-block">
                Change Password
              </button>
            </form>
          </>
        </Card>
      </div>
    </div>
  );
};

export default ChangePassword;
