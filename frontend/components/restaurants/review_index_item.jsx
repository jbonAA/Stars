import React from 'react';

class ReviewIndexItems extends React.Component {
    constructor(props){
        super(props)
        
    }

    render(){
        const {review} = this.props
        let display;
            if (this.props.currentUser === this.props.review.user_id){
                display = (<div>
                    <button>Delete</button>
                    <button>Edit</button>
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