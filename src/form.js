import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./form.css";

const Form = () => {

    const [register, setRegister] = useState(true);
    const [login, setLogin] = useState(false);

    const loginClicked = () => {setLogin(true);setRegister(false)};
    const registerClicked = () => {setRegister(true);setLogin(false)};

    return(
        <body>
            <div className="flex min-w-screen min-h-screen justify-center items-center bg-light-grey">
                <div className="w-1, m-1, xl: w-3/5, lg:w-4/6">
                    <form className="flex bg-white shadow-lg lg:rounded-md px-10 pt-8 pb-6 mb-4 mt-2">
                        <div className="hidden left lg:flex flex-1">
                            <div className="flex flex-1 justify-center items-center">
                            <img src={require('./jit_logo.png')} />
                            </div>
                        </div>
                        <div className="right flex-1 mb-4">
                            {
                                register ?                          
                            <div>
                                <div class="text-center mb-10">
                                <h1 class="font-bold text-3xl text-gray-900">Sign Up</h1>
                                <p>Register for a new account.</p>
                                </div>
                                <div className="lg:flex gap-3">
                                    <div className="lg:w-1/2">
                                        <label className="block text-gray-600 text-lg font-bold mb-2" for="first_name">
                                            First Name
                                        </label>
                                        <input className="shadow appearance-none border-2 rounded w-full py-2 px-2.5 text-gray-600 mb-3
                                        leading-tight focus:outline-none focus:border-indigo-500" id="first_name"/>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <label className="block text-gray-600 text-lg font-bold mb-2" for="last_name">
                                            Last Name
                                        </label>
                                        <input className="shadow appearance-none border-2 rounded w-full py-2 px-2.5 text-gray-600 mb-3
                                        leading-tight focus:outline-none focus:border-indigo-500" id="last_name"/>
                                    </div>
                                </div>
                                <label className="block text-gray-600 text-lg font-bold mb-2" for="email">Email
                                </label>
                                <input className="shadow appearance-none border-2 rounded w-full py-2 px-2.5 text-gray-600 mb-3
                                leading-tight focus:outline-none focus:border-indigo-500" id="email" type="email"/>
                                <label className="block text-gray-600 text-lg font-bold mb-2" for="password">Password
                                </label>
                                <input className="shadow appearance-none border-2 rounded w-full py-2 px-2.5 text-gray-600 mb-3
                                leading-tight focus:outline-none focus:border-indigo-500" id="password" type="password"/>
                                <label className="block text-gray-600 text-lg font-bold mb-2" for="password">Confirm Password
                                </label>
                                <input className="shadow appearance-none border-2 rounded w-full py-2 px-2.5 text-gray-600 mb-3
                                leading-tight focus:outline-none focus:border-indigo-500" id="password" type="password"/>
                                <ReCAPTCHA className="mt-3"
                                    sitekey="Your client site key"
                                />
                                <div className="flex mt-5">
                                    <div className="w-full mb-3">
                                    <button type="submit" class="w-full max-w-xs mx-auto outline-none bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white text-xl rounded-sm px-2 py-2.5 font-sans font-semibold">Register</button>
                                    </div>
                                </div>
                                <div className="flex mt-3">
                                    <p className="w-full text-md">Already have an account? <button onClick={loginClicked}
                                    type = "button" className="text-blue-500">Login</button></p>
                                </div>
                            </div>
                            :
                            <div>
                                <div class="text-center mb-7">
                                <h1 class="font-bold text-3xl text-gray-900">Welcome Back</h1>
                                <p>Sign in to your account.</p>
                                </div>
                                <label className="block text-gray-600 text-lg font-bold mb-2" for="email">Email
                                </label>
                                <input className="shadow appearance-none border-2 rounded w-full py-2 px-2.5 text-gray-600 mb-3
                                leading-tight focus:outline-none focus:border-indigo-500" id="email" type="email"/>
                                <label className="block text-gray-600 text-lg font-bold mb-2" for="password">Password
                                </label>
                                <input className="shadow appearance-none border-2 rounded w-full py-2 px-2.5 text-gray-600 mb-3
                                leading-tight focus:outline-none focus:border-indigo-500" id="password" type="password"/>
                                <div className="flex flex-col mt-4">
                                    <div className="flex gap-2 mb-2">
                                        <input type = "radio" id = "remember" />
                                        <label for = "remember">Remember Me</label>
                                    </div>
                                    <div className="w-full mb-3">
                                    <button type="submit" class="w-2/3 max-w-xs mx-auto outline-none bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white text-xl rounded-md px-2 py-2.5 font-sans font-semibold">Sign In</button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className="w-full text-md mb-1">New User? <button onClick={registerClicked}
                                    type = "button" className="text-blue-500">Register</button></p>
                                    <button
                                    type = "button" className="text-blue-500">Forgot Password?</button>
                                </div>
                            </div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
};

export default Form;