import React, { Component } from 'react';
import "./login.css";
import { func } from 'prop-types';
import Welcome from '../components/welcome';

let userLogedIn = false;

function LoginFrm() {
    return (
        <div className='hero  bg-base-200 min-h-screen '>
            <div className='card glass2 w-full md:max-w-sm lg:max-w-md mx-auto  shadow-2xl rounded-2xl p-6 z-10'>
                <img src='/logo.png' alt='Logo' className='my-1 mx-auto' style={{ maxWidth: 180 }} />
                <h1 className='text-center text-3xl lg:text-4xl font-bold mb-4'>FShare</h1>
                <form className='space-y-4 '>
                    <label class="input input rounded-lg flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>

                        <input type="text" className="grow rounded-lg" placeholder="Username" />
                    </label>

                    <label className='input input rounded-lg flex items-center gap-2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd"
                            />
                        </svg>


                        <input type="password" className="grow input input rounded-lg" placeholder='password' />
                    </label>


                    <label className='label'>
                        <a href='#' className='label-text-alt link link-hover'>Forgot password?</a>
                    </label>

                    <button className='btn btn-outline w-full rounded-lg'>Login</button>
                </form>
            </div>
        </div>
    );
}


export class LogIN extends React.Component {
    state = {
        userLoggedIn: false, // Use state to manage login status
    };
    handleLogin = () => {
        this.setState({ userLoggedIn: true });
    };
    render() {
        return (
            <div className='columns-1	place-content-center'>
                <div class="background" style={{ zIndex: 0 }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {this.state.userLoggedIn ? <LoginFrm /> : <Welcome onLogin={this.handleLogin} />}

            </div>

        );
    }
}
