import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import loginImg from "../../assets/images/login-1.png";
import "./Login.css";

function Login() {
  return (
    <>
      <Header />
      <section className="login container flex">
        <section className="card">
          <h1>Log in to your Cerebrum account</h1>
          <hr />
          <form className="login-form form-container">
            <div className="input-container">
              <span>
                <MdEmail />
              </span>
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="input-container">
              <span>
                <MdLock />
              </span>
              <input type="password" placeholder="Password" className="input" />
            </div>
            <h6>Forgot password?</h6>
            <button className="bttn bttn-primary">Log In</button>
          </form>
          <hr />
          <h5>
            Don’t have an account? <span>Sign Up</span>
          </h5>
        </section>
        <div className="login-image">
          <img src={loginImg} alt={"login img1"} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
