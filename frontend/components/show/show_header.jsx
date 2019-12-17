import React from 'react';
import {withRouter} from 'react-router-dom';

class ShowHeader extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            show: this.props.show,
            test: ""
        }
        
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e) {
        e.preventDefault();
        localStorage.setItem("name", this.props.show.name)
        debugger
        this.props.history.push(`/restaurants/${this.props.restaurantId}/review/new`)
    }

    shouldComponentUpdate(nextState, nextProps) {
        debugger
        if(this.props.reviews[0] === undefined){
            return true
        }else if(this.props.reviews.length !== nextState.reviews.length){
            return true
        }else{
            return false
        }

    }
    //testing git

    render() {
        let stars;
        let display;
        let total=[]
        if(this.props.reviews.length === 0){
            display = (<p>Yet to be Reviewed</p>)
        }else{
            Object.values(this.props.reviews).forEach((review) => {
                if (review.stars){
                    total.push(review.stars)
                }
            })
            stars = total.reduce((a, b) => a + b, 0)/total.length
            display = (<p>{Math.floor(stars)} stars</p>)

        }

        return(
            <div className="head">
                <h1>{this.props.show.name}</h1>
                <h4>{this.props.show.description}</h4>
                    
                <div className="head-price">
                    <p>{display}</p>
                    <p> {Object.values(this.props.reviews).length} reviews</p>
                    <p>{this.props.show.price}</p>
                </div>
                <div className="head-buttons">
                    <button className="writeReview" id="show-button"><a onClick={this.handleClick}>Write a Review</a></button>
                    <button id="show-button">Add Photo</button>
                    <button id="show-button">Share</button>
                    <button id="show-button">Save</button>
                </div>
            </div>
        )
    }



}

export default withRouter(ShowHeader)