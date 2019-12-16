import React from 'react';

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
        console.log(this.props.restaurants)
        let display = [];
        this.props.restaurants.forEach((el) => {
            display.push(<li>{el.name}</li>)
        })
        console.log(display)
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
            <div>
                {list}
            </div>
        )
    }
}

export default SearchDropdown