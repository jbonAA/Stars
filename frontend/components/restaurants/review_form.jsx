import React from 'react';
import GreetingContainer from '../home/greeting_container';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        debugger

        this.state = {
            title: '',
            description: '',
            restaurant_id: parseInt(this.props.match.params.restaurantId),
            user_id: this.props.userId
        }
        
        this.stars = 0

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {

        return(event) => {
            this.setState({ [type]: event.target.value })
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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

                        <div className="review-stars">
                            <label> Stars: 
                            <input 
                            id="rev-form-input"
                            type="text"
                            value={this.state.stars}
                            placeholder="Enter a number 1-5"
                            onChange={this.handleInput('stars')}/>
                            </label>

                        </div>
                        <br/>

                        <div className="review-title">
                            <label> Overview: 
                            <input 
                                id="rev-form-input"
                                type="text"
                                value={this.state.title}
                                placeholder="Title"
                                onChange={this.handleInput('title')}/>
                            </label>
                        </div>

                        <br/>
                        <div>
                            <textarea
                            className="description-review"
                                id={this.props.errors.length === 0 ? "" : ("error")} 
                                value={this.state.description}
                                cols="30"
                                rows="10"
                                onChange={this.handleInput('description')}
                                placeholder="Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees"    
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