import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from './Navbar.tsx';
import axios from 'axios';

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();

    useEffect (() => {
        const response = axios.get('/user', {
        }).then(response => {
            console.log(response.data);
            setIsAuthenticated(true);
        }).catch(error => {
            setIsAuthenticated(false);
            return null;
        })

        // const fetchData = async () => {
        //     await axios.get('/user');
        // }
        // fetchData();
    }, []);

    if(!isAuthenticated) {
        return null;
    }

    return (
        <div className="home">
            <NavBar />
            <div className="gradientBar shadow"></div>

            <div className="row">
                <div className="col-2"></div>
                <div className="mainContentContainer col-8">
                    <div className="row">
                        <div className="col-3">
                            <div className="mt-2 pfpBox"></div>
                        </div>
                        <div className="col-6">
                            <h1>Hello</h1>
                        </div>
                        <div className="col-3">
                            <div className="mt-2 friendsBox"></div>
                        </div>

                    </div>
                    
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}

export default Home;

