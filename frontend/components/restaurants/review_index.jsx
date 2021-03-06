import React from 'react';
import ReviewIndexItem from './review_index_item';


class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
        


    }

    

    

    render(){
        const { reviews } = this.props
        return (
            <div id="reviews-ul">
                <ul>
                    {
                        Object.values(reviews).reverse().map(review => (
                            <ReviewIndexItem
                            fetchRestaurant={this.props.fetchRestaurant}
                            review={review}
                            key={Object.values(reviews).indexOf(review)}
                            delete={this.props.delete}
                            currentUser={this.props.currentUser} 
                            update={this.props.update}/>
                            )
                        )
                    }
                </ul>


            </div>
        )
    }

}

export default ReviewIndex