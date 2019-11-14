import React from 'react';

class ShowHeader extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        let stars;
        let total=[]
        Object.values(this.props.reviews).forEach((review) => {
            if (review.stars){
                total.push(review.stars)
            }
        })
        
        stars = total.reduce((a, b) => a + b, 0)/total.length

        return(
            <div className="head">
                <h1>{this.props.show.name}</h1>
                <div className="head-price">
                    <p>{Math.floor(stars)} stars,  {Object.values(this.props.reviews).length} reviews</p>
                    <p>{this.props.show.price} {this.props.show.description}</p>
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