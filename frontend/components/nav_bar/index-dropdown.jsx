import React from 'react';

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
                            <a href="#">Link1</a>
                            <a href="#">Link2</a>
                            <a href="#">Link3</a>
                        </div>

                    </div>
                    
                    <div className="dropdown">
                        <button className="dropbtn">Home Services   
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