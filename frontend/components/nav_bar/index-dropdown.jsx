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
                            <Link to={{ pathname: "/restaurants", query: "CA" }} style={{ textDecoration: 'none' }}>California</Link>
                            <Link to={{ pathname: "/restaurants", query: "NV" }} style={{ textDecoration: 'none' }}>Nevada</Link>
                            <Link to={{ pathname: "/restaurants", query: "WY" }} style={{ textDecoration: 'none' }}>Wyoming</Link>
                        </div>

                    </div>
                    
                    <div className="dropdown">
                        <button className="dropbtn">By Price   
                            <i className="down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Link1</a>
                            <a href="#">Link2</a>
                            <a href="#">Link3</a>
                        </div>

                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Auto Services
                            <i className="down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Link1</a>
                            <a href="#">Link2</a>
                            <a href="#">Link3</a>
                        </div>

                    </div>
                    <div className="dropdown">
                        <button className="dropbtn" id="more">More
                            <i className="down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Link1</a>
                            <a href="#">Link2</a>
                            <a href="#">Link3</a>
                        </div>

                    </div>
                    <div className="5-6-dd-filters">

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