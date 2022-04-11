import React from 'react'
import useLocalStorage from 'use-local-storage'

import './index.css'

function Login() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <div className='login'>
        <h1> Login</h1>
        <div className='container'>
          <form>
            <label>E-mail</label>
            <input type='email' placeholder='Enter your email' />
            <label>Password</label>
            <input type='password' placeholder='Enter your password' />
            <div className='remember'>
              <br/>
              <input type="checkbox" id="switch" class="checkbox" />
              <label for="switch" class="toggle"></label>
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password?</p>
            <a href='/' className="reset">Reset Password</a>
          </div>
          <p className='divider'><span className="divi-text">Or continue with</span></p>
          <div className='top'>
            <img className="img1" src="https://banner2.cleanpng.com/20180324/sww/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg" alt= "google"/>
            <img className="img2" src="http://www.freeiconspng.com/uploads/facebook-logo-2.png" alt = "fb" />
            <img className="img3" src="https://tous-logos.com/wp-content/uploads/2017/05/Twitter-logo.png" alt = "twitter" />
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
