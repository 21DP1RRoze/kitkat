import whiteS from "./assets/whitecolorselection.png"
import blackS from "./assets/blackcolorselection.png"
import orangeS from "./assets/orangecolorselection.png"
import grayS from "./assets/graycolorselection.png"


import { useState } from "react";

import { useNavigate } from "react-router-dom";



const ProfileSetup = () => {

    const [dName, setDName] = useState('');
    const [bDate, setBDate] = useState('');
    const [catColor, setCatColor] = useState('');
    const navigate = useNavigate();
   

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    return (
        <div className="d-flex align-items-center fullheight">
            <div className="col-lg-2"></div>
            <div className="container-lg bg">
                <div className="row">
                    <div className="welcometxt m-5 mb-1"><h2 className="txt">Welcome to your new purrfect journey!</h2>
                    <p className="txt">Just a few more things...</p></div>
                </div>
                <div className="row">
                    <div className="col-lg-7 text-center">
                        <form onSubmit={handleSubmit}>
                            <label className="txt mb-1 mt-4">Enter your username!</label><br />
                            <input minLength={3} value={dName} type="text" required name="displayName" onChange={(e) => setDName(e.target.value)}></input><br />
                            <label className="txt mb-1 mt-3">Enter your birthday!</label><br />
                            <input value={bDate} type="date" required name="bday" onChange={(e) => setBDate(e.target.value)}></input><br />
                            <label className="txt mb-1 mt-3">Choose your kitten's color!</label><br />
                            <label><input checked={catColor === "white"} value="white" onChange={e => { setCatColor(e.target.value); }} className="m-2" type="radio" id="color-wh" name="cat-color"></input> <img src={whiteS} /></label>
                            <label><input checked={catColor === "black"} value="black" onChange={e => { setCatColor(e.target.value);  }} className="m-2" type="radio" id="color-bl" name="cat-color"></input><img src={blackS} /></label>
                            <label><input checked={catColor === "orange"} value="orange" onChange={e => { setCatColor(e.target.value); } } className="m-2" type="radio" id="color-or" name="cat-color"></input><img src={orangeS} /></label>
                            <label><input checked={catColor === "gray"} value="gray" onChange={e => { setCatColor(e.target.value);}} className="m-2" type="radio" id="color-gr" name="cat-color"></input><img src={grayS} /></label><br />
                            <label className="mt-2 txt"><input type="checkbox" required /> I agree to the terms of service </label><br />
                            <label className="mt-2 txt"><input type="checkbox" required /> I agree to the privacy policy</label><br />
                            <button className="txt btn mt-3 mb-5">Start your adventure</button>
                        </form>
                    </div>
                    <div className="col-lg-5">WebGL placeholder</div>
                </div>
            </div>
            <div className="col-lg-2"></div>
        </div>
    )


}

export default ProfileSetup;