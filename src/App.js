import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import SearchBar from './pages/SearchBar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Genres from './pages/Genres';
import Streaming from './pages/Streaming';
import Sidebar from './pages/Sidebar';
import Login from './pages/login';
import Register from './pages/Register';
import {movies_db} from './pages/Home';
import {MovieList} from './pages/Home';
import Search from './pages/Search';
import Checkbox from './pages/Checkbox';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchResults, setSearchResults] = useState("");


 const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
    return (
        <div>
        <header className="header">
                     <h1>Movie Match </h1>
                     <h5>Your guide to finding your new favorite movies!!!</h5>
                 </header>                 
        <Router>
            <div className='main-content-2'>
   <nav className='header-2'>

   All Movies
   </nav>
   </div>
        <div className="app-container">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Checkbox/>
            <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
           
              <Search/>
            
            </div>
            <Routes>
              <Route path="/genres" element={<Genres />} />
              <Route path="/streaming" element={<Streaming />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
                   <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="*" element={<Home />} />  // Fallback to Home for undefined paths */}
                    <Route path="/Login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
        </div>
      </Router>
      </div>
    );
}

export default App;
