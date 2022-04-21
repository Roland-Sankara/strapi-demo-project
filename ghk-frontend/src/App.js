<<<<<<< HEAD
import React from 'react';
import './App.css';
import PostContainer from './components/postContainer';
=======
import "./App.css";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
>>>>>>> 04cc9ede41130ce5c1e93532a285855180305484

function App() {
  return (
    <div>
<<<<<<< HEAD
    <PostContainer/>
=======
      <Router>
        <NavMenu />
        <div className="App">
          <Routes>
            <Route path="/" /*element={<Home />}*/ />
          </Routes>
        </div>
        <Footer />
      </Router>
>>>>>>> 04cc9ede41130ce5c1e93532a285855180305484
    </div>
  );
}

export default App;
