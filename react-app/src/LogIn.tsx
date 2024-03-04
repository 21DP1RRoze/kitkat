import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from "./assets/catlogo.png";
import UnityComponent from "./UnityComponentLogin.tsx";
import axios from "axios";




const LogIn = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const navigate = useNavigate();
    const [errorMessageDisplay, setErrorMessageDisplay] = useState('d-none');
    const [errorMessage, setErrorMessage] = useState('');

    // form submit
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await axios.post('/login', {
            email: inputEmail,
            password: inputPassword,
        }).then(async (response) => {
            const token = response.data.token;
            localStorage.setItem("loginToken", token);
            await axios.get('/user', {
            }).then(response => {
                console.log(response.data);
            })
            navigate("/");
        })
    }
    return (
        <div className="d-flex align-items-center fullheight">
            <div className="signUpContainer container-lg">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="webGLplaceholder bg col-lg-5 d-lg-block d-none d-xl-block p-1 shadow"><img className="imagelogo" src={logo}></img><UnityComponent /></div>
                    <div className="signUp col-lg-4 bg p-5 text-center shadow">
                        <h1 className="txt">Welcome back!</h1>
                        <p className="txt">Log in here:</p>
                        <form onSubmit={handleSubmit}>
                            <label className="pb-1 txt">email:</label><br />
                            <input value={inputEmail} required onChange={(e) => setInputEmail(e.target.value)} type="email" name="email" /><br />
                            <label className="p-1 txt">password:</label><br />
                            <input value={inputPassword} required onChange={(e) => setInputPassword(e.target.value)} minLength={8} type="password" name="password" /><br />
                            <button type="submit" className="m-4 btn btn-lg txt">Log in</button>
                        </form>
                        <div id="errorBox" className={errorMessageDisplay}>{errorMessage}</div>
                        <p className="txt">--- or ---</p>
                        <Link className="loginswitch" to='/signup'>Sign up</Link>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;