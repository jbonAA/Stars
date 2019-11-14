import React from 'react';
import { Link } from 'react-router-dom';


class HomeFilters extends React.Component {

    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(ele){
        //handle click to render index w/ corresponding restaurants
        
    }   

    render(){
        
        return(
            <div className="home-filter-backgrounds">
                    <p className="filter-title">Find Restaurants By State</p>
                    <ul className="state-list-elements">
                        
                        <li className="state-li" id="sf-li">
                        <Link to={{ pathname: "/restaurants", query: "CA" }} style={{ textDecoration: 'none' }}>
                                <div id="ca-li">
                                    <h2 id="state">California</h2>
                                </div>
                            </Link>
                        </li>
                        <li className="state-li" id="nv-li">
                        <Link to={{ pathname: "/restaurants", query: "NV" }} style={{ textDecoration: 'none' }}>
                                <div id="ca-li">
                                    <h2 id="state">Nevada</h2>
                                </div>
                            </Link>
                        </li>

                        <li className="state-li" id="wy-li">
                            <Link to={{pathname: "/restaurants", query: "WY"}} style={{textDecoration: 'none'}}>
                                <div id="ca-li">
                                   <h2 id="state">Wyoming</h2>
                                </div>
                            </Link>
                        </li>
                        
                    </ul>
            </div>
        )

    }
}

export default HomeFilters