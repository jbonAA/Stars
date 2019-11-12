import React from 'react';
import IndexDropdown from '../nav_bar/index-dropdown';
import GreetingContainer from '../home/greeting_container';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            description: '',
            stars: '',
            restaurant_id: parseInt(this.props.match.params.restaurantId),
            user_id: this.props.userId
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {

        return(event) => {
            this.setState({ [type]: event.target.value })
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const review = Object.assign({}, this.state)
        this.props.createReview(review)
            .then(() => this.props.history.push(`/restaurants/${this.props.match.params.restaurantId}`))

    }

    handleErrors() {
        const errors = this.props.errors.map(error => (
            <li>{error}</li>
        ))
        return errors
    }

    render () {


        return(
            <div>
                <GreetingContainer />
                <div id="new-review">
                    <div id="title-rev">
                        <h2>{localStorage.getItem("name")}</h2>
                        <a id="rev-a" href="">Read our Review Guidelines</a>
                    </div>
                    <div>

                        <div className="review-title">
                            <input 
                                id={this.props.errors.length === 0 ? "" : ("error")}
                                type="text"
                                value={this.state.title}
                                placeholder="temp"
                                onChange={this.handleInput('title')}/>
                        </div>
                        <div>
                            <textarea
                            className="description-review"
                                id={this.props.errors.length === 0 ? "" : ("error")} 
                                value={this.state.description}
                                cols="30"
                                rows="10"
                                onChange={this.handleInput('description')}    
                                >
                            </textarea>
                        </div>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>

                </div>
                
            </div>
        )


    }
}

export default withRouter(ReviewForm)