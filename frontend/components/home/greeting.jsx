import React from 'react';
import WelcomeContainer from './welcome_container';
import HomeFilters from './home_filters'

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleLogout = this.handleLogout.bind(this)
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

    // handleLogout(event) {
    //     event.preventDefault();
    //     this.props.logout(this.state)
    //         .then(() => this.props.history.push('/'))
    // }

    render() {

        const icon = (<img src="https://img.icons8.com/ios-glyphs/30/000000/search.png"/>)
        let display = ""
        if (window.location.hash === '#/search'){
            display = 
            (<div className="greeting-search">
                <div className="logo-title">
                    <p className="greeting-title">Stars</p>
                </div>
                <div className="greeting-search-box">
                    <label className="greeting-search-label">Find</label>
                    <input
                        className="greeting-search-form"
                        type="text"
                        value={this.state.name}
                        placeholder="restaurant name"
                        onChange={this.handleInput('name')}
                    />
                    <button className="greeting-search-submit" onClick={this.handleSubmit}>{icon}</button>
                </div>
                <div className="greeting-welcome">
                    <WelcomeContainer />
                </div>

                {/* <div className="greeting-welcome">
                    <h2 className="welcome">Welcome, {this.props.user.first_name}!</h2>
                    <button className="logout-link" onClick={this.handleLogout}>Log Out</button>
                </div> */}


            </div>)
        }else{
            display = (
            <div>
                <div className="splash-body" >
                    <div className="top-nav">
                        <div className="splash-nav-ele">
                            <p className="nav-ele">Write a review</p>
                            <p className="nav-ele">Events</p>
                            <p className="nav-ele">Talk</p>
                        </div>
                        <div>
                            {<WelcomeContainer />}
                        </div>
                    </div>
                    <div className="home-search">
                        <p className="main-title">Stars</p>

                        <div className="greeting-search-box">
                            <label className="greeting-search-label">Find</label>
                            <input
                                className="greeting-search-form"
                                type="text"
                                value={this.state.name}
                                placeholder="restaurant name"
                                onChange={this.handleInput('name')}
                            />
                            <button className="greeting-search-submit">{icon}</button>
                        </div>
                    </div>
                </div>
                <HomeFilters />
            </div> 
                )   
        }

        return (
            <div>
                {display}
            </div>
        )
    }
}


export default Greeting


