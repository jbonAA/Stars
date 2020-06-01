import React from 'react'


class Cell extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        const {info} = this.props

        return (
            <tr><th>{info[0]}:</th><td>{info[1]}</td></tr>
        )
    }
}




export default Cell