import React from 'react';


const Greeting = ({currentUser, logout}) => {(

    <div className="home-search">
        <p className="main-title">Stars</p>

        <div className="search">
            <label className="search-label">Find</label>
            <input
                className="search-form"
                type="text"
                value={this.state.name}
                placeholder="Restaurant Name"
                onChange={this.handleInput('name')}
            />
            <button className="search-submit" onClick={this.handleSubmit}>Logo</button>
        </div>
        <div className="greeting">
            <h2 className="welcome">Welcome Back, {currentUser.name}!</h2>
            <button className="home-links1" onClick={logout}>Log Out</button>
        </div>
    </div>
)};

export default Greeting


