import React from 'react';

class ShowHours extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        let display;
        if (this.props.show.hours){
            display = (
                <div>
                    <h3>Restaurant Hours</h3>
                    <ul className="hours">
                        {this.props.show.hours.map(el => (
                            <li id="list-hour">{el}</li>
                        ))}
                    </ul>
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