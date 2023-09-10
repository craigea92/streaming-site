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
    <div className="Container">
      <div className="Wrapper">
        <div className="Title">Sign in</div>
        <div className="SubTitle">to continue to CraigTube</div>
        <div className="Input"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="Input" type="password" placeholder="password" />
        <div className="Button" onClick={handleLogin}>Sign in</div>
        <div className="Title">or</div>
        <div className="Input"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="Input" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <div className="Input"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="Button">Sign up</div>
      </div>
      <div className="More">
        English(USA)
        <div className="Links">
          <div className="Link">Help</div>
          <div className="Link">Privacy</div>
          <div className="Link">Terms</div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
