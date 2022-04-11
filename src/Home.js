import { Link } from "react-router-dom";
import React from 'react'
import './index.css';
import useLocalStorage from 'use-local-storage'

function Home() {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }
    return (
        <>
            <div className="nav" data-theme={theme}>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                <Link to="/login">
                    <button className="btn-primary m-20" type="button">
                        Login
                    </button>
                </Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Link to="/register">
                    <button className="btn-primary m-2" type="button">
                        Register
                    </button>
                </Link>
            </div>
            <div className="app" data-theme={theme}>

                <div className='theme-toggle'>
                    <h2>{theme} theme &nbsp; &nbsp; <i onClick={switchTheme} class='fas fa-adjust'></i> </h2>
                </div>
            </div>
        </>
    );
}

export default Home;
