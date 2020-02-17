import React from 'react';

class ShowHours extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        let display;
        if (this.props.show.hours){
            display = (
                <div id="center-head">
                    <h3>Restaurant Hours and Info</h3>
                    <div className="hoursandInfo">
                        <ul className="hours">
                            {this.props.show.hours.map(el=> (
                                <li id="list-hour" key={this.props.show.hours.indexOf(el)}>{el}</li>
                            ))}
                        </ul>
                        <div id="info">
                            <p>Phone: {this.props.show.phone}</p>
                            <p>Address: {this.props.show.address}</p>
                            <p>City, State: {this.props.show.city}, {this.props.show.state} {this.props.show.zip}</p>
                        </div>
                    </div>
                </div>
            )
        }else{
            display = null
        }
        return(
            <div className="show-hours">
               {display}
            </div>
        )
    }
}

export default ShowHours