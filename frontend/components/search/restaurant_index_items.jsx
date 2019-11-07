import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
    constructor(props){
        super(props)

        //this.handleclick for access to show
    }

    //handleClick()

    render() {
        // debugger
        return (
            <div className="restaurant-ii-container">
                <div className="restaurant-ii-photo">
                    <h2>{this.props.total}</h2>
                </div>
                <div className="restaurant-info-container">
                    <div className="restaurant-ii-info">
                        <div className="restaurant-info-top-left">
                            <a href="" className="restaurant-title" >{this.props.restaurant.name}</a>
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

export default RestaurantIndexItem