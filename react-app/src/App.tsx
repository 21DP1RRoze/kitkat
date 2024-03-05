import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn'
import ProfileSetup from './ProfileSetup';
import Friends from './Friends';
import { Route, Routes, redirect, useNavigate } from 'react-router-dom';
import FriendSearch from './FriendSearch';
import UserProfile  from './userProfile';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.authorization = "Bearer " + localStorage.getItem("loginToken");  

function App() { 
    const navigate = useNavigate();

    axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('loginToken')}`;
        return config;
    })
    axios.interceptors.response.use(function (response) {
        return response;
    }, async function (error) {
        if (error.response.status === 401) navigate("/login");
        return Promise.reject(error);
    })
    

return (
    <div className="App">
        
        <div className="content">
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/profilesetup" element={<ProfileSetup />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/friendsearch" element={<FriendSearch />} />
                <Route path="/users/:uid" element={<UserProfile/>} />

            </Routes>

        </div>
    </div>
  
)
}

export default App;