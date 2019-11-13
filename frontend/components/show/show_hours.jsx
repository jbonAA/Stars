import React from 'react';

class ShowHours extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        return(
            <div className="show-hours">
                <h3>Restaurant Hours</h3>
                <ul className="hours">
                    {this.props.show.hours.map(el => (
                        <li id="list-hour">{el}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ShowHours