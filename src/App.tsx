import React, { useState } from 'react'
import Game from './components/Game/Game';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import styles from './App.module.css'

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className={styles.container}>
            <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Routes>
                {loggedIn ? (
                    <Route path='/' element={<Game />} />
                ) : (
                    <Route path='/' element={<Login />} />
                )}
            </Routes>
        </div>
    )
}

export default App