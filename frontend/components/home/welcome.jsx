import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => (
    <div className="homeButtons">
        <button className="home-links1"> <Link className="links1" to="/login">Log In</Link></button >
        <button className="home-links2"> <Link className="links2" to="/signup">Sign Up</Link></button>
    </div >
);

export default Welcome