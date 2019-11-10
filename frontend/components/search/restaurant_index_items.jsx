import React from 'react';
import { withRouter } from 'react-router-dom';
import RestaurantShowContainer from '../restaurants/restaurant_show_container'

class RestaurantIndexItem extends React.Component {
    constructor(props){
        super(props)
        debugger
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        debugger
        const restaurantId = this.props.restaurant.id
        this.props.history.push(`/restaurants/${restaurantId}`)
    }

    render() {
        return (
            <div className="restaurant-ii-container">
                <div className="restaurant-ii-photo">
                    <h2>{this.props.total}</h2>
                </div>
                <div className="restaurant-info-container">
                    <div className="restaurant-ii-info">
                        <div className="restaurant-info-top-left" onClick={this.handleClick}>
                            <p className="restaurant-title">{this.props.restaurant.name}</p>
                            <p>{this.props.restaurant.stars}</p>
                            <p>{this.props.restaurant.price}</p>
                            <p>{this.props.restaurant.description}</p>
                        </div>
                        <div className="restaurant-info-top-right">
                            <p>{this.props.restaurant.phone}</p>
                            <p>{this.props.restaurant.address}</p>
                            <p>{this.props.restaurant.city}, {this.props.restaurant.state}</p>
                        </div>
                        <div className="restaurant-info-review">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(RestaurantIndexItem)