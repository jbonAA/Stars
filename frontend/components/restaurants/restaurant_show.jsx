import React from 'react';
import IndexDropdown from '../nav_bar/index-dropdown';
import GreetingContainer from '../home/greeting_container';
import {withRouter} from 'react-router-dom';
import ReviewIndexContainer from './review_index_container';

class RestaurantShow extends React.Component {
    constructor(props){
        super(props)
        debugger
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push(`/restaurants/${this.props.restaurantId}/review/new`)
    }


    componentDidMount() {
        this.props.fetchRestaurant(this.props.restaurantId)
    }

    render() {

        return(
            <div>
                <GreetingContainer />
                <IndexDropdown />
                <div className="rest-show">
                    <div className="rest-show-info">
                        <div className="show-info-left">
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="show-info-right">
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <a onClick={this.handleClick}>Create a Review</a>
                </div>

                <div>
                    <ReviewIndexContainer/>
                </div>
            </div>
        );
    }
}

export default withRouter(RestaurantShow)