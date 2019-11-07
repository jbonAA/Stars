import React from 'react';


class HomeFilters extends React.Component {

    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        //handle click to render index w/ corresponding restaurants
    }

    render(){

        return(
            <div className="home-filter-backgrounds">
                    <p className="filter-title">Find Restaurants By State</p>
                    <ul className="state-list-elements">
                        <li className="state-li" id="sf-li">
                            <div id="ca-li">
                                <a href=""></a>
                                <h2 id="state">California</h2>
                            </div>
                        </li>
                        <li className="state-li" id="nv-li">
                            <div id="ca-li">
                                <a href=""></a>
                                <h2 id="state">Nevada</h2>
                            </div>
                        </li>
                        <li className="state-li" id="wy-li">
                            <div id="ca-li">
                                <a href=""></a>
                            <h2 id="state">Wyoming</h2>
                            </div>
                        </li>
                    </ul>
            </div>
        )

    }
}

export default HomeFilters