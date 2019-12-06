import React from 'react';
import  { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';
// import FilterContainer from '../nav_bar/filter_container';

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchRestaurants()
    }

    handleInput(type) {
        return (event) => {
            this.setState({ [type]: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.props.fetchRestaurants(this.state)
            .then(() => this.props.history.push('/'));
    }

    render() {


        return (
            <div className="home">
                <GreetingContainer fetchRestaurant={this.props.fetchRestaurant}/>
            </div>
        )
    }
}

export default Home