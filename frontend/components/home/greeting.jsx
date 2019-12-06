import React from 'react';
import WelcomeContainer from './welcome_container';
import HomeFilters from './home_filters';


class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            city: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {

        window.localStorage.setItem(["[object Object]"], JSON.stringify({}))
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

        if (window.location.hash.includes("/review/new")){
                display = (
                    <div className="greeting-new">
                        <div className="logo-title">
                            <p className="greeting-title">Stars</p>
                        </div>
                        <div className="greeting-welcome">
                            <WelcomeContainer />
                        </div>
                    </div>
                )
        
        
        } else if (window.location.hash === '#/'){
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
                                    placeholder="Restaurant Name"
                                    onChange={this.handleInput('name')}
                                />
                                <label className="greeting-search-label">Near</label>
                                <input
                                
                                    className="greeting-search-form"
                                    type="text"
                                    value={this.state.city}
                                    placeholder="Featured City"
                                    onChange={this.handleInput('city')}
                                />
                                <button className="greeting-search-submit">{icon}</button>
                            </div>
                        </div>
                    </div>
                    <HomeFilters />
                </div>
            )   

        }else{

            display =
                (<div className="greeting-search2">
                    <div className="logo-title">
                        <p className="greeting-title">Stars</p>
                    </div>
                    <div className="greeting-search-box2">
                        <label className="greeting-search-label2">Find</label>
                        <input
                            className="greeting-search-form"
                            type="text"
                            value={this.state.name}
                            placeholder="restaurant name"
                            onChange={this.handleInput('name')}
                        />
                        <label className="greeting-search-label2">Near</label>
                        <input  
                            className="greeting-search-form2"
                            type="text"
                            value={this.state.city}
                            placeholder="Featured City"
                            onChange={this.handleInput('city')}
                        />
                        <button className="greeting-search-submit" onClick={this.handleSubmit}>{icon}</button>
                    </div>
                    <div className="greeting-welcome">
                        <WelcomeContainer />
                    </div>

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


