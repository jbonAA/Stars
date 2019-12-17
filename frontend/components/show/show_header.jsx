import React from 'react';


class ShowHeader extends React.Component {
    constructor(props){
        super(props)
        
    }

    shouldComponentUpdate(nextState, nextProps) {
        if(this.props.reviews[0] === undefined){
            return true
        }else if(this.props.reviews.length !== nextState.reviews.length){
            return true
        }else{
            return false
        }

    }

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
                    <button className="writeReview" id="show-button">Write a Review</button>
                    <button id="show-button">Add Photo</button>
                    <button id="show-button">Share</button>
                    <button id="show-button">Save</button>
                </div>
            </div>
        )
    }



}

export default ShowHeader