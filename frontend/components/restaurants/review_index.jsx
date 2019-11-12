import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)


    }

    

    render(){
        const { reviews } = this.props
        return (
            <div>
                <ul>
                    {
                        reviews.reverse().map(review => (
                            <ReviewIndexItem
                            key = {`review${review.id}`}
                            review={review}
                            currentUser={this.props.currentUser} />
                            )
                        )
                    }
                </ul>
                
               
            </div>
        )
    }

}

export default ReviewIndex