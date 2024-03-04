import { useState } from 'react';
import Navbar from './Navbar';

import { FaSearch } from "react-icons/fa";

import { Link } from 'react-router-dom';

interface SearchResult {
    id: string;
    data: {
        username: string;
    }

}


const FriendSearch = () => {

    const [searchInfo, setSearchInfo] = useState('Write username to being search...')
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        /*const docRef = doc(db, "users");
        const docSnap = await getDoc(docRef);*/
        
        setSearchInfo("")
        setResults([])
    

    }


    
    return (
        <div className="friendSearchcontent">
            <Navbar />
            <div className="gradientBar shadow"></div>
            <div className="row">
                <div className="col-2"></div>
                <div className="mainContentContainer col-8">
                    <div className="row">
                        <h1 className="txt ms-5 m-4 display-4 friendsTitle"><strong>Find friends</strong></h1>

                        <div className="col-2"></div>
                        <div className="col-8">
                            <form onSubmit={handleSubmit} className="searchForm mb-3">
                                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="searchText p-2" type="text"
                                    placeholder="Username"/>
                                <button className="searchButton p-2">
                                    Search <FaSearch />
                                </button>
                            </form>
                            <ul className="list-group">
                                {results.map((result, index) => (
                                    <Link to={`/users/${result.id}`}><li className="list-group-item" key={index}>{result.data.username}</li></Link>
                                ))}
                            </ul>
                            <p className="searchInfoText">{searchInfo}</p>
                        </div>
                        <div className="col-2"></div>
                        
                    </div>

                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}

export default FriendSearch;