import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersPage from './UsersPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/users" element={<UsersPage />} />
            </Routes>
        </Router>
    );
};

export default App;