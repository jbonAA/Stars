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
        
        this.props.fetchRestaurant(localStorage.getItem("restaurantId"))
        if(this.props.show){
            localStorage.setItem("name", this.props.show.name)
        }
    }




    render() {
        let display;
        if (this.props.show) {
            display = (<div>
                <GreetingContainer />
                <IndexDropdown />
                <div className="rest-show">
                    <div className="show-pics">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="rest-show-info">
                        <div className="show-info-left">
                            <div id="main-info">
                                <div>
                                    <h2></h2>
                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="show-info-right">
                            <div id="right-info">
                                <div>
                                    {this.props.show.phone}
                                </div>
                                <div>
                                    <p>{this.props.show.address}</p>
                                    <p>{this.props.show.city}, {this.props.show.state} {this.props.show.zip}</p>
                                </div>
                                <div>
                                    <a href="">View Menu</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="test">
                        <a onClick={this.handleClick}>Create a Review</a>
                        <div id="review-index">
                            <ReviewIndexContainer />
                        </div>
                    </div>
                </div>
            </div>)
        }else{
            display = null;
        }

        return(
            <div>
                {display}
            </div>
        )
    }
}

export default withRouter(RestaurantShow)