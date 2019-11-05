import React from 'react';
import  { Link } from 'react-router-dom';
import Welcome from './welcome'

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (event) => {
            this.setState({ [type]: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.fetchRestaurants(this.state)
            .then(() => this.props.history.push('/'));
    }

    render() {


        return (
            <div className="home">
                
                
                <div className="splash-body" >
                    <div className="top-nav">
                        <div className="splash-nav-ele">
                            <p className="nav-ele">Write a review</p>
                            <p className="nav-ele">Events</p>
                            <p className="nav-ele">Talk</p>
                        </div>
                        <div>
                            {<Welcome />}
                        </div>
                    </div>
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
                    </div>


                </div>
            </div>
        )
    }
}

export default Home