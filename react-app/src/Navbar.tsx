import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { TiHome } from "react-icons/ti";
import { HiUsers } from "react-icons/hi2";
import { FaPaintBrush } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { IconContext } from "react-icons";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const NavbarComp = () => {
    const navigate = useNavigate();

    const logOut = async () => {
        await axios.post("/logout");
        localStorage.removeItem("loginToken");
        navigate("/login");
    }

    return (
        <Navbar expand="lg" className="navbarBg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <IconContext.Provider value={{ color: 'white', size: "35", style: { verticalAlign: 'middle' } }}>

                        <Nav className="me-auto">
                        <Link className="navIcon me-3 p-3" to="/"><TiHome /></Link>
                        <Link className="navIcon me-3 p-3" to="/Friends"><HiUsers /></Link>
                        <Link className="navIcon me-3 p-3" to="/"><FaPaintBrush /></Link>
                        <Link className="navIcon me-3 p-3" to="/"><BsFillBagFill /></Link>

                    </Nav>

                        <Nav>
                            <div className="coinsCounter me-5">Coins: 0</div>
                            <button className="colorfulBg gameButton pt-1 pb-1 ps-4 pe-4 me-5">Play game</button>
                            <div className="dropdown">
                                <button className="settingsButton" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <IoIosSettings/>
                                </button>
                                <ul className=" colorfulBg dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li><button onClick={logOut} className="dropdown-item" type="button">Sign out</button></li>
                                    <li><button className="dropdown-item" type="button">Another action</button></li>
                                    <li><button className="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </div>
                    </Nav>
                </IconContext.Provider>
                </Navbar.Collapse>
            </Container>

        </Navbar>
           
    );
}

export default NavbarComp;


