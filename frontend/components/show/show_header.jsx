import React from 'react';
import {withRouter} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

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
        debugger
        console.log(this.state.show.id)
        e.preventDefault();
        localStorage.setItem("name", this.props.show.name)
        this.props.history.push(`/restaurants/${this.state.show.id}/review/new`)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.reviews[0] === undefined){
            return true
        }else{
            return false
        }

    }
    
    //testing git

    render() {
        let stars;
        console.log(this.props.reviews)
        let display;
        let total=[]
        if(this.props.reviews.length === 0){
            display = (<p>Yet to be Reviewed</p>)
        }else if(this.props.reviews[0] === undefined) {
            display = null
        }else{
            Object.values(this.props.reviews).forEach((review) => {
                if (review.stars){
                    total.push(review.stars)
                }
            })
            stars = total.reduce((a, b) => a + b, 0)/total.length
            // display = `${Math.floor(stars)} stars`
            
            display = <StarRatingComponent 
                name="rate2"
                editing={false}
                starCount={5}
                value={stars}
                starColor={"#e80f0f"}
            />

        }

        return(
            <div className="head">
                <h1>{this.props.show.name}</h1>
                <h4>{this.props.show.description}</h4>
                    
                <div className="head-price">
                    {display}
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