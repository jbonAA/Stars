import React from 'react';
import { Link } from 'react-router-dom';

class IndexDropdown extends React.Component{
    constructor(props){
        super(props)

        // this.handleClick = this.handleClick.bind(this)
    }


    // handleClick(e) {
    //     e.preventDefault()
    //     if(e.TextContent === "California"){

    //     }
    // }

    //fixing
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
                            <Link to={{ pathname: "/restaurants", query: "CA" }} style={{ textDecoration: 'none' }}>California</Link>
                            <Link to={{ pathname: "/restaurants", query: "NV" }} style={{ textDecoration: 'none' }}>Nevada</Link>
                            <Link to={{ pathname: "/restaurants", query: "WY" }} style={{ textDecoration: 'none' }}>Wyoming</Link>
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