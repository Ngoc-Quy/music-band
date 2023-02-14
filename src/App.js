import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from '~/components/Home';
import Admin from '~/components/Admin';
import User from '~/components/User';
import Profile from '~/components/Profile';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
