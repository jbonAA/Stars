import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../nav_bar/header';


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
    }

    handleInput(type) {
        return event => this.setState({ [type]: event.currentTarget.value });
    }

    handleSubmit(event){
        event.preventDefault();
        
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }

    handleErrors() {
        const errors = this.props.errors.map(error => (
            <li>{error}</li>
        ))
        return errors
    }

    handleGuest() {
     
        const user = {
            email: "guest@aa.io",
            password: "password"
        }
        debugger
        this.props.login(user)
            .then(() => this.props.history.push('/'));
    }

    render() {
        
        

        return (
        <div>
            <Header className="login-header" />
            <div className="everything">
                <div className="root-login">

                    <div className="login-form">
                        <h3 className="login-title">Log In to Stars</h3>
                        <p className="login-links1">New to Stars? <Link className="signup-link-btn"to="/signup">Sign Up</Link></p>
                            <p className="privacy-policy">By logging in, you agree to Stars' <a className="signup-link-btn" href="">Terms of Service</a> and <br/>
                        <a className="policy" href="">Privacy Policy</a></p>
                        <ul className="errors">
                            {this.handleErrors()}
                        </ul>
                        <form>
                            <input
                                id={this.props.errors.length === 0 ? "" : ("error")} 
                                className="login-value"
                                type="text"
                                value={this.state.email}
                                placeholder="  Email"
                                onChange={this.handleInput('email')}
                            />
                            <br/>
                            <input
                                id={this.props.errors.length === 0 ? "" : ("error")}
                                className="login-value"
                                type="password"
                                value={this.state.password}
                                placeholder="  Password"
                                onChange={this.handleInput('password')}
                            />
                            <br/>
                            <button className="login-submit" onClick={this.handleSubmit}>Log In</button>
                        </form>
                        <div className="guest-redirect">
                            <button className="guest" onClick={this.handleGuest}>Login as Guest</button>
                            <p className="login-links4">New to Stars? <Link className="signup-link-btn" onClick={this.props.clearErrors} to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login