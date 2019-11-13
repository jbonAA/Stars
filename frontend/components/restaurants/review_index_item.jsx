import React from 'react';

class ReviewIndexItems extends React.Component {
    constructor(props){
        super(props)
        

        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    // componentDidMount() {
    //     this.props.fetchRestaurant(localStorage.getItem("restaurantId"))
    // }

    handleSubmit(e) {
        e.preventDefault();
        
        let id = this.props.review.id;
        this.props.delete(id).then(this.props.fetchRestaurant(localStorage.getItem("restaurantId")))
    }

    render(){
        const {review} = this.props
        let display;
            if (this.props.currentUser === this.props.review.user_id){
                display = (<div>
                    <button onClick={this.handleSubmit} >Delete</button>
                </div>)
            }else{
                display = null
            }

        return (
            <div id="rev">
                <li id="review-ele">
                    <div>
                        <h2>{review.title}</h2>
                    </div>
                    
                    <div>
                        <p>{review.description}</p>
                    </div>

                    {display}
                </li>
            </div>
        )
    }

}


export default ReviewIndexItems