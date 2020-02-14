import React from 'react';
//refactor
// import RestaurantIndex from './restaurant_index';


import HomeContainer from '../home/home_container'
import Filter from '../nav_bar/filter';
import IndexDropdown from '../nav_bar/index-dropdown';
import IndexMap from '../map/index_map'

class Search extends React.Component {
    constructor(props){
        super(props)
        debugger

        this.location = ""

        this.handleClick = this.handleClick.bind(this)
    }

    //handle with function scope needs to set state with new query on click in index dropdown

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleClick(e) {
        debugger
        let newlocat = e.target.textContent
        let state;
        if(newlocat === "California"){
            state = "CA"
        }else if(newlocat === "Nevada"){
            state = "NV"
        }else{
            state = "WY"
        }
        window.localStorage.setItem(location, state)
        this.forceUpdate()
    }


    render() {
        let display;
        if (this.props.restaurants){
            display = (
                <div>
                    <Filter
                        restaurants = {this.props.restaurants}
                        loc={this.props.location.query}
                        fetchRestaurants={this.props.fetchRestaurants}
                        fetchRestaurant={this.props.fetchRestaurant}
                    />
                </div>
            )
        }else{
            display = null
        }

        return (
            <div>
                <HomeContainer />
                <IndexDropdown handle={this.handleClick}/>
                {/* <br/>
                <br/> */}
                {display}
            </div>
        )
    }
}
export default Search;