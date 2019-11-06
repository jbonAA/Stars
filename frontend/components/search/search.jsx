import React from 'react';
import RestaurantIndex from './restaurant_index';


class Search extends React.Component {
    constructor(props){
        super(props)
        this.props.fetchRestaurants()
    }

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render() {
        let display;
        if (this.props.restaurants){
            display = (
                <div className="search-restaurant-index">
                    <RestaurantIndex restaurants={this.props.restaurants} />
                </div>
            )
        }else{
            display = null
        }
        debugger
        return (
            <div>
                {display}
            </div>
        )
    }
}
export default Search;