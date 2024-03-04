import { Nav, Container, Navbar } from 'react-bootstrap';
import NavBar from './Navbar'
import placeholderImage from './assets/placeholder.jpg'
import { IoPersonAddSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';



const Friends = () => {
    return (
        <div className="content">
            <NavBar />
            <div className="gradientBar shadow"></div>

            <div className="row">
                <div className="col-2"></div>
                <div className="mainContentContainer col-8">
                    <Navbar>
                        <IconContext.Provider value={{ color: 'black', size: "25", style: { verticalAlign: 'middle' } }}>
                            <Container className="ms-4 me-5 mt-3 ">
                                <Nav className="me-auto">
                                    <h1 className="txt display-4 friendsTitle"><strong>Friends</strong></h1>
                                </Nav>
                                <Nav>
                                    <div className="onlineFriends me-4 pt-1">Total friends: 0</div>
                                    <div className="onlineFriends me-4 pt-1">Online: 0</div>
                                    <Link className="colorfulBg addFriendButton" to="/friendsearch"><IoPersonAddSharp /></Link>
                                </Nav>
                            </Container>
                        </IconContext.Provider>
                </Navbar>
                    <div className="row p-3 ps-5 pe-5 d-flex justify-content-around">
                        <div className="col border text-center p-3">
                            <img className="profileimage" src={placeholderImage} />
                            <div className="profiledesc">
                                <p className="profileUsername mb-0">test123</p>
                                <button className="colorfulBg gameButton pt-1 pb-1 ps-4 pe-4 mb-2">Message</button><br/>
                                <button className="colorfulBg gameButton pt-1 pb-1 ps-4 pe-4">Unfriend</button>
                            </div>
                        </div>
                        <div className="col border"></div>
                        <div className="col border"></div>


                    p</div>

                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}

export default Friends;