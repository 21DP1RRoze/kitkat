import { useState } from "react"
import logo from "./assets/catlogo.png"
import { Link, useNavigate } from 'react-router-dom';
import UnityComponent from "./UnityComponentLogin.tsx";
import axios, { AxiosResponse } from 'axios';


const SignUp = () => {

    const [dName, setDName] = useState('');
    const [bDate, setBDate] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const navigate = useNavigate();
    const [errorMessageDisplay, setErrorMessageDisplay] = useState('d-none');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        //try {
        await axios.post('/register', {
            username: dName,
            password: inputPassword,
            email: inputEmail,
            dob: bDate 
        }).catch((error) => {
            alert(error.response.data.message);
        })
  //  }.then((response) => {
    //alert(response.data.username);
//})
    //}
    }

    return (
        <div className="d-flex align-items-center fullheight">
        <div className="signUpContainer container-lg">
            <div className="row">
                <div className="col-lg-2"></div>
                    <div className="webGLplaceholder bg col-lg-5 d-lg-block d-none d-xl-block p-1 shadow"><img className="imagelogo" src={logo}></img><UnityComponent/></div>
                <div className="signUp col-lg-4 bg p-5 text-center shadow">
                    <h1 className="txt">Welcome!</h1>
                        <p className="txt">Sign up here:</p>
                        <form onSubmit={handleSubmit}>  
                            <label className="pb-1 txt">email:</label><br/>
                            <input value={inputEmail} required onChange={(e) => setInputEmail(e.target.value)} type="email" name="email" /><br />
                            <label className="pb-1 txt">username:</label><br/>
                            <input value={dName} required onChange={(e) => setDName(e.target.value)} type="username" name="username" /><br />
                            <label className="p-1 txt">password:</label><br />
                            <input value={inputPassword} required onChange={(e) => setInputPassword(e.target.value)} minLength={8} type="password" name="password" /><br />
                            <label className="p-1 txt">date of birth:</label><br />
                            <input value={bDate} type="date" required name="bday" onChange={(e) => setBDate(e.target.value)}></input><br />
                            <button type="submit" className="m-4 btn btn-lg txt">Sign up</button>
                        </form>
                        <div id="errorBox" className={errorMessageDisplay}>{errorMessage}</div>
                    <p className="txt">--- or ---</p>
                        <Link className="loginswitch" to='/login'>Log in</Link>
                </div>
                <div className="col-lg-1"></div>
            </div>
            </div>
        </div>
    )
}

export default SignUp;