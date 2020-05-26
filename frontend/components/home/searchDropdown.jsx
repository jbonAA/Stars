import React from 'react';
import { Link } from 'react-router-dom';

class SearchDropdown extends React.Component {
    constructor(props) {
        super(props)


        this.handleDropdown = this.handleDropdown.bind(this)
        
    }


    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.restaurants){
            if(this.props.restaurants.length !== nextProps.restaurants.length){
                let change = document.getElementById("search-items")
                if(nextProps.restaurants.length === 0){
                    change.setAttribute("class", "transp")
                }
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }

    handleDropdown() {
    
        let display = [];
        this.props.restaurants.forEach((el, i) => {
            display.push(<Link to={{ pathname: `/restaurants/${el.id}` }} onClick={this.props.handle} key={i} style={{ textDecoration: 'none' }}>
            <p key={i}>{el.name}: {el.city}, {el.state}</p>
            </Link>)
        })

        let change = document.getElementById("search-items");
        change.setAttribute("class", "none")
    
        return display
    }


    render() {
        let list;
        if(this.props.restaurants.length > 0){
            list = this.handleDropdown()
        }else{
            list = null
        }

        return (
            <div className="transp" id="search-items">
                {list}
            </div>
        )
    }
}

export default SearchDropdown