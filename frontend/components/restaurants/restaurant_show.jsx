import React from 'react';
import IndexDropdown from '../nav_bar/index-dropdown';
import GreetingContainer from '../home/greeting_container';
import {withRouter} from 'react-router-dom';
import ReviewIndexContainer from './review_index_container';
import ShowHeader from '../show/show_header'
import ShowHours from '../show/show_hours';
import ShowMap from '../map/showmap';

class RestaurantShow extends React.Component {

    constructor(props){
        super(props)
        debugger

        this.state = {
            show: this.props.show,
            test: ""
        }

        debugger
        
        
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        localStorage.setItem("name", this.props.show.name)
        debugger
        this.props.history.push(`/restaurants/${this.props.restaurantId}/review/new`)
    }


    componentDidMount() {
        window.scrollTo(0, 0)
        const res = this.props.fetchRestaurant(localStorage.getItem("restaurantId"))
            .then((res) => {
                this.setState({
                    show: res
                })
            })
    }





    render() {
        let map;
        if(this.props.show.name) {
            map = (
            <ShowMap restaurants={[this.props.show]} locat={`${this.props.show.city}, ${this.props.show.state}`} />
            )
        }else{
            map = null
        }
        let display;
        if (this.props.show.id) {
            display = (<div>
                <GreetingContainer />
                <IndexDropdown />
                <div className="rest-show">
                    <div className="show-pics">
                        <div className="pic"><img src={this.props.show.photoUrls[1]}/></div>
                        <div className="pic"><img src={this.props.show.photoUrls[2]} /></div>
                        <div className="pic"><img src={this.props.show.photoUrls[3]} /></div>
                        <div className="pic"><img src={this.props.show.photoUrls[4]} /></div>
                    </div>
                    <div className="rest-show-info">
                        <div className="show-info-left">
                            <div id="main-info">
                                <div>
                                    <ShowHeader 
                                    show={this.props.show}
                                    reviews={this.props.reviews}/>
                                </div>
                                <div>
                                    <ShowHours
                                    show={this.props.show} />
                                </div>
                            </div>
                        </div>
                        <div className="show-info-right">
                            <div id="right-info">
                                <h3>Restaurant Info</h3>

                                <div>
                                    {this.props.show.phone}
                                    <p>{this.props.show.address}</p>
                                    <p>{this.props.show.city}, {this.props.show.state} {this.props.show.zip}</p>
                                </div>
                                <div>
                                    <a id="" href="">View Menu</a>
                                </div>
                            </div>
                        </div>
                        {map}
                    </div>

                    <div id="test">
                        <div id="rev-button">
                            <h2>Reviews</h2>
                            <h2 id="but"><a onClick={this.handleClick}>Create a Review</a></h2>
                        </div>
                        <div id="review-index">
                            <ReviewIndexContainer
                            reviews={this.props.reviews} />
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