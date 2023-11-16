import React from "react";
import Head from "next/head";


const LoginCard = () => {
  return (
    <div className="login-card">
      <h1>Login Card</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </div>
  );
};

const SignUpCard = () => {
  return (
    <div className="signup-card">
      <h1>Sign Up Card</h1>
      <input type="name" placeholder="Name" />

      <input type="email" placeholder="Email" />

      <input type="password" placeholder="Password" />

      <button type="submit">Sign Up</button>
    </div>
  );
};

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Login and Sign Up Cards</title>
      </Head>
      <div className="container">
        <LoginCard />
        <SignUpCard />
      </div>
    </div>
  );
};

export default Auth;
