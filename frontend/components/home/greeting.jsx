import React from 'react';
import WelcomeContainer from './welcome_container';
import HomeFilters from './home_filters';
import Filter from '../nav_bar/filter';
import SearchDropdown from './searchDropdown';
import Search from '../search/search';


class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            city: '',
            current: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount() {

        window.localStorage.setItem(["[object Object]"], JSON.stringify({}))
    }

    handleInput(type) {
        debugger
        let res = [];
        return (event) => {
            let length = this.state.name.length
            Object.values(this.props.restaurants).forEach((el) => {
                // console.log(el.name.slice(0, length + 1).toLowerCase());
                if(el.name.slice(0, length + 1).toLowerCase() === `${event.target.value}`){
                    res.push(el);
                }
            })
            // console.log(this.state.current)
            this.setState({ 
                [type]: event.target.value, 
                current: res
            });
        }

    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.fetchRestaurants(this.state)
            .then(() => this.props.history.push('/'));
    }

    handleClick(event) {
        debugger

        this.setState({
            name: '',
            current: []
        })
    }

    filter(name) {
        let result = []
        Object.values(this.props.restaurants).forEach((el) => {
            if (el.name.toLowerCase() === name) {
                result.push(el)
            }
        })
        return result
    }

    handleSearchSubmit(event) {
        event.preventDefault();
        debugger


        let searched = this.filter(this.state.name)
        let id = searched[0].id
        this.props.fetchRestaurant(id)
            .then(() => this.props.history.push(`/restaurants/${id}`))
        
        
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
                                    placeholder="Restaurant by Name"
                                    onChange={this.handleInput('name')}
                                />
                                <button className="greeting-search-submit" onClick={this.handleSearchSubmit}>{icon}</button>
                            </div>
                                <div id="moveSearch">
                                    <SearchDropdown handle={this.handleClick} restaurants={this.state.current}/>
                                </div>
                        </div>
                    </div>
                    <HomeFilters />
                </div>
            )   

        }else{

            display =
                (
                <div id="dd-flex">
                    <div className="greeting-search2">
                        <div className="logo-title">
                            <p className="greeting-title">Stars</p>
                        </div>
                        <div className="greeting-search-box2">
                            <label className="greeting-search-label2">Find</label>
                            <input
                                className="greeting-search-form"
                                type="text"
                                value={this.state.name}
                                placeholder=" Restaurant by Name"
                                onChange={this.handleInput('name')}
                            />
                            <button className="greeting-search-submit" onClick={this.handleSearchSubmit}>{icon}</button>
                        </div>
                        <div className="greeting-welcome">
                            <WelcomeContainer />
                        </div>
                    </div>
                    <div id="moveSearch2">
                        <SearchDropdown handle={this.handleClick} restaurants={this.state.current} />
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


