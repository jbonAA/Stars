import React from 'react';
import Cell from './hoursCell'

class HoursTable extends React.Component {
    constructor(props){
        super(props)
        //taking split hours as props
    }

    renderRow() {
        const {rows} = this.props

        return (
            <table>
                <tbody>
                    {rows.map((cell, cellIndex) => {
                        return (
                            <Cell key={cellIndex} info={cell}/>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    render() {
        this.renderRow = this.renderRow.bind(this)
        const tbodyMarkup = this.renderRow()

        return (
            <div>
                {tbodyMarkup}
            </div>
        )
    }
}

export default HoursTable