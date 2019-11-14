import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick() {
        
        const {id} = this.props.restaurant
        localStorage.setItem("restaurantId", id)
        this.props.fetchRestaurant(id).then(() => this.props.history.push(`/restaurants/${id}`))
    }

    render() {
        const revs = this.props.restaurant.reviewIds
        let display;
        if(revs.length === 0){
            display = <p>No Reviews</p>
        }else{
            display = revs.reduce((a, b) => a + b, 0) / revs.length
        }

        return (
            <div className="restaurant-ii-container">
                <div className="restaurant-ii-photo">
                    <img src={this.props.restaurant.photoUrls[0]} alt=""/>
                </div>
                <div className="restaurant-info-container">
                    <div className="restaurant-ii-info">
                        <div className="restaurant-info-top-left" onClick={this.handleClick}>
                            <p className="restaurant-title">{this.props.restaurant.name}</p>
                            <p>{display}</p>
                            <p>{this.props.restaurant.price}</p>
                            <p>{this.props.restaurant.description}</p>
                        </div>
                        <div className="restaurant-info-top-right">
                            <p>{this.props.restaurant.phone}</p>
                            <p>{this.props.restaurant.address}</p>
                            <p>{this.props.restaurant.city}, {this.props.restaurant.state}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(RestaurantIndexItem)