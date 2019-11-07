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
                        <li className="state-li"><a href=""></a>California</li>
                        <li className="state-li"><a href=""></a>Wyoming</li>
                        <li className="state-li"><a href=""></a>Nevada</li>
                    </ul>
            </div>
        )

    }
}

export default HomeFilters