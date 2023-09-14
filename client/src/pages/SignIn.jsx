import "./SignIn.css";
import axios from "axios";
import React, { useState } from "react";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/signin", { name, password });
    } catch (err) {}
  };
  return (
    <div className="SignIn_Container">
      <div className="SignIn_Wrapper">
        <div className="SignIn_Title">Sign in</div>
        <div className="SignIn_SubTitle">to continue to CraigTube</div>
        <input
          className="SignIn_Input"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="SignIn_Input"
          type="password"
          placeholder="password"
        />
        <div className="SignIn_Button" onClick={handleLogin}>
          Sign in
        </div>
        <div className="SignIn_Title">or</div>
        <input
          className="SignIn_Input"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="SignIn_Input"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="SignIn_Input"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="SignIn_Button">Sign up</div>
      </div>
      <div className="SignIn_More">
        English
        <div className="SignIn_Links">
          <div className="SignIn_Link">Help</div>
          <div className="SignIn_Link">Privacy</div>
          <div className="SignIn_Link">Terms</div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
