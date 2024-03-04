import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn'
import ProfileSetup from './ProfileSetup';
import Friends from './Friends';
import { Route, Routes } from 'react-router-dom';
import FriendSearch from './FriendSearch';
import UserProfile  from './userProfile';
import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.authorization = "Bearer " + localStorage.getItem("loginToken");  

function App() { 

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