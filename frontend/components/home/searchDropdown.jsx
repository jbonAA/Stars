import React from 'react';
import { Link } from 'react-router-dom';

class SearchDropdown extends React.Component {
    constructor(props) {
        super(props)
        debugger


        this.handleDropdown = this.handleDropdown.bind(this)
        
    }


    shouldComponentUpdate(nextProps, nextState) {
        debugger
        if(nextProps.restaurants){
            if(this.props.restaurants.length !== nextProps.restaurants.length){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }

    handleDropdown() {
        // console.log(this.props.restaurants)
        let display = [];
        this.props.restaurants.forEach((el, i) => {
            display.push(<Link to={{ pathname: `/restaurants/${el.id}` }} onClick={this.props.handle} key={i} style={{ textDecoration: 'none' }}>
            <p key={i} >{el.name}: {el.city}, {el.state}</p>
            </Link>)
        })
        // console.log(display)
        let change = document.getElementById("search-items");
        debugger
        if(display !== []) {
            change.setAttribute("class", "none")
        }else{
            change.setAttribute("class", "transp")

        }
        return display
    }


    render() {
        let list;
        debugger
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