import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home'; 
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {

  return (
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} /> 
            <Route path="/friend/:friend_id" element={<FriendDetail />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
