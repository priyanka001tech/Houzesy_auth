import React from 'react'
import useLocalStorage from 'use-local-storage'

import './index.css';

function Login() {
  const { useState } = React;
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  const [eye, seteye] = useState(true);
  const [inpass, setinpass] = useState("password");
  const [warning, setwarning] = useState(false);

  const [inputText, setInputText] = useState({
    email: "",
    password: ""
  });

  const [wemail, setwemail] = useState(false);
  const [wpassword, setwpassword] = useState(false);

  const Eye = () => {
    if (inpass === "password") {
      setinpass("text");
      seteye(false);
      setwarning(true);
    }
    else {
      setinpass("password");
      seteye(true);
      setwarning(false);
    }
  }
  const inputEvent = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setInputText((lastValue) => {
      return {
        ...lastValue,
        [name]: value
      }
    });

  }

  const submitForm = (e) => {

    e.preventDefault();

    setwemail(false);
    setwpassword(false);
    if (inputText.email === "") {
      setwemail(true);
    }
    else if (inputText.password === "")
      setwpassword(true);
    else {
      alert("form submitted");
    }
  }

  return (
    <div className="app" data-theme={theme}>
      <div className='login'>
        <h1> Login</h1>
        <div className='container'>
          <form onSubmit={submitForm}>
            <div className="input-text">
              <label>E-mail</label><br />
              <input className={`${wemail ? "text-warning" : ""}`} value={inputText.name} onChange={inputEvent} type="email" placeholder='Enter your email' />
            </div>
            <div className="input-text">
              <label>Password</label><br />
              <input type={inpass} className={`pass ${wpassword ? "warning" : ""}  $ {type ? "type_password" : "" }`} placeholder="Enter your password" value={inputText.value} onChange={inputEvent} name="password" />
              <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"} icon`}></i>
            </div>
            <div className='remember'>
              <br />
              <input type="checkbox" id="switch" class="checkbox" />
              <label for="switch" class="toggle"></label>
              <p>Remember Me</p>
            </div>
            <button className="button2">Log In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password?</p>
            <a href='/' className="reset">Reset Password</a>
          </div>
          <p className='divider'><span className="divi-text">Or continue with</span></p>
          <div className="social">
            <button className="auth">
              <span><img className="img1" src="https://banner2.cleanpng.com/20180324/sww/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg" alt="google" /><p className="authtext">Login with Google</p></span>
            </button>
          </div>
        </div>

        <div className='theme-toggle'>
          <h2>{theme} theme &nbsp; &nbsp; <i onClick={switchTheme} class='fas fa-adjust'></i> </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
