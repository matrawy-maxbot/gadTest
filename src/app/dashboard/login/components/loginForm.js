"use client";
import Image from 'next/image';
import { ApiClient } from '../../../api/api';

const LoginForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usernameElement = document.getElementById('username');
        const passwordElement = document.getElementById('password');

        usernameElement.classList.remove('warn');
        passwordElement.classList.remove('warn');

        const username = usernameElement.value;
        const password = passwordElement.value;

        const api = new ApiClient("http://localhost:4000");

        let loginResult = await api.login(null, username, password);

        console.log("login result : ", loginResult);

        if(loginResult?.data?.token){
            api.setToken(loginResult.data?.token);
            window.location.href = "/dashboard/admin";
        } else {
            usernameElement.classList.add('warn');
            passwordElement.classList.add('warn');
            passwordElement.value = "";
            api.logout();
        }

    }

    return (
        <form id="login-form">
            <div className="logo">
                <Image
                    src="/images/first_section/logo.png"
                    alt="GAD"
                    width={101}
                    height={48}
                />
                <span>Dashboard</span>
            </div>
            <div className="field">
                <input type="text" id="username" name="user" defaultValue="" placeholder="username" required/>
            </div>
            <div className="field">
                <input type="password" id="password" name="pass" defaultValue="" placeholder="password" required/>
            </div>
            <input type="submit" defaultValue="Log In" onClick={handleSubmit}/>
        </form>
    );
}

export default LoginForm;