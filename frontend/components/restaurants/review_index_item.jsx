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
        debugger
            if(this.props.review !== undefined){
                if (this.props.currentUser === this.props.review.user_id){
                    display = (<div id="rev">
                        <li id="review-ele">
                            <div id="rev-container">
                                <div id="user-info-rev">
                                    <h4>{review.username}</h4>
                                    <p>{review.total} reviews</p>
                                </div>
                                <div id="info-rev">
                                    <div>
                                        <p>{review.stars} stars</p>
                                        <br />
                                        <h2>{review.title}</h2>
                                    </div>
                                    <div>
                                        <p>{review.description}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <div>
                            <button onClick={this.handleSubmit} >Delete</button>
                        </div>
                        <br />
                        <br />
                    </div>)
                }else{
                    display = (<div id="rev">
                        <li id="review-ele">
                            <div id="rev-container">
                                <div id="user-info-rev">
                                    <h4>{review.username}</h4>
                                    <p>{review.total} reviews</p>
                                </div>
                                <div id="info-rev">
                                    <div>
                                        <p>{review.stars} stars</p>
                                        <br />
                                        <h2>{review.title}</h2>
                                    </div>
                                    <div>
                                        <p>{review.description}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <br />
                        <br />
                    </div>)
                }
            }else{
                display = null
            }

        return (
            <div>
                {display}
            </div>
        )
    }

}


export default ReviewIndexItems