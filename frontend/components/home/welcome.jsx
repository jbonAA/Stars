import React from 'react'
import { Link } from 'react-router-dom'

class Welcome extends React.Component {

    constructor(props){
        super(props)

        this.handleLogout = this.handleLogout.bind(this)
    }


    handleLogout(event) {
        event.preventDefault();
        this.props.logout(this.state)
            .then(() => this.props.history.push('/'))
    }

    render(){
    
        let display;
        if (this.props.currentUser){
            display = 
            (<div className="greeting-welcome">
                <h2 className="welcome">Welcome, {this.props.user.first_name}!</h2>
                <button className="logout-link" onClick={this.handleLogout}>Log Out</button>
            </div>)
        }else{
            display = 
            (<div className="homeButtons">
                <button className="home-links1"> <Link className="links1" to="/login">Log In</Link></button >
                <Link className="links2" to="/signup"><button className="home-links2"> Sign Up</button>  </Link>
            </div >)
    
        }         
    
        return (
            <div>
                {display}
            </div>
        )


    }

}

export default Welcome