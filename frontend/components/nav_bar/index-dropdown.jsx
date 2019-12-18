import React from 'react';
import { Link } from 'react-router-dom';

class IndexDropdown extends React.Component{
    constructor(props){
        super(props)

        
    }


   

    render(){

        return(
            <div className="dropdown-house">
                <div className="navbar">

                    <div className="dropdown">
                        <button className="dropbtn">Restaurants
                            <i className="down"></i>
                        </button>
                        <div className="dropdown-content">
                            <br/>
                            <p id="dropdown-tt">By Featured State</p>
                            <br/>
                            <Link to={{ pathname: "/restaurants", query: "CA" }} onClick={this.props.handle} style={{ textDecoration: 'none' }}>California</Link>
                            <Link to={{ pathname: "/restaurants", query: "NV" }} onClick={this.props.handle} style={{ textDecoration: 'none' }}>Nevada</Link>
                            <Link to={{ pathname: "/restaurants", query: "WY" }} onClick={this.props.handle} style={{ textDecoration: 'none' }}>Wyoming</Link>
                        </div>

                    </div>
                    
                
                </div>

                <div className="dd-links">
                    <div className="dd-review">
                        <a href="">Write A Review</a>
                    </div>
                    <div className="dd-review">
                        <a href="">For Businesses</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default IndexDropdown