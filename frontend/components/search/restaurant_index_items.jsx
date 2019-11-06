import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
    constructor(props){
        super(props)

        //this.handleclick for access to show
    }

    //handleClick()

    render() {
        debugger
        return (
            <div className="restaurant-ii-container">
                <div className="restaurant-ii-photo">
                    <h2>{this.props.restaurant.name}</h2>
                </div>
                <div className="restaurant-ii-info">
                    <div className="restaurant-info-top-left">
                        <h4>{this.props.restaurant.name}</h4>
                        <br/>
                        <h4>{this.props.restaurant.description}</h4>
                    </div>
                    <div className="restaurant-info-top-right">
                        <p>{this.props.restaurant.phone}</p>
                        <p>{this.props.restaurant.address}</p>
                        <p>{this.props.restaurant.city}</p>
                    </div>
                    <div className="restaurant-info-review">

                    </div>
                </div>

            </div>
        )
    }
}

export default RestaurantIndexItem