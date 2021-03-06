import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../nav_bar/header'

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            zip: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return(event) => {
            this.setState({ [type]: event.target.value })
        };
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.signUp(this.state)
            .then(() => this.props.history.push(window.location.hash.slice(1)))
    }

    handleErrors() {
        const errors = this.props.errors.map(error => (
            <li>{error}</li>
        ))
        return errors
    }


    render() {
        return (
            <div className="everything">
                <Header className="login-header" />
                <div className="root-signup">

                    <div className="signup-form" id={this.props.errors.length === 0 ? "" : ("errors-form")}>
                        <h3 className="login-title">Sign Up For Stars</h3>
                        <br/>
                        <p className="signup-links">Connect with great local restaurants </p>
                        <p className="privacy-policy">By logging in, you agree to Stars' <a className="signup-link-btn" href="">Terms of Service</a> and <br />
                            <a className="policy" href="">Privacy Policy</a></p>
                            <ul className="signup-errors">
                                {this.handleErrors()}
                            </ul>
                            <br />
                        <form className="signup">
                            <div className="login-names">
                                <input 
                                    id={this.props.errors.length === 0 ? "" : ("error")} 
                                    className="login-value-name"
                                    type="text"
                                    value={this.state.first}
                                    placeholder="  First Name"
                                    onChange={this.handleInput('first_name')}/>
                                <input
                                    id={this.props.errors.length === 0 ? "" : ("error")} 
                                    className="login-value-name"
                                    type="text"
                                    value={this.state.last}
                                    placeholder="  Last Name"
                                    onChange={this.handleInput('last_name')} />
                                <br/>
                            </div>
                            <input
                                id={this.props.errors.length === 0 ? "" : ("error")} 
                                className="login-value"
                                type="text"
                                value={this.state.email}
                                placeholder="  Email"
                                onChange={this.handleInput('email')}
                            />
                            <br />
                            <input
                                id={this.props.errors.length === 0 ? "" : ("error")} 
                                className="login-value"
                                type="password"
                                value={this.state.password}
                                placeholder="  Password"
                                onChange={this.handleInput('password')}
                            />
                            <br />
                            
                            <input
                                id={this.props.errors.length === 0 ? "" : ("error")} 
                                className="login-value" 
                                type="text"
                                value={this.state.zip}
                                placeholder="  ZIP Code"
                                onChange={this.handleInput('zip')}
                            />
                            <br/>


                            <p className="line-height">You also understand that Stars may send marketing <br/>
                                emails about Stars' products, services, and local
                                events. <br/> You can unsubscribe at any time.
                            </p>
                            <button className="signup-submit" onClick={this.handleSubmit}>Sign Up</button>
                        </form>
                        <div className="back-to-main">
                            <p className="login-links3">Already on Stars? <Link className="back-to-login" onClick={this.props.clearErrors} to="/login">Log In</Link> </p>
                            <Link className="back-to-login" onClick={this.props.clearErrors} to="/">Continue Browsing</Link>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }


}


export default Signup