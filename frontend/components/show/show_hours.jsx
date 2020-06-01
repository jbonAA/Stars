import React from 'react';
import HoursTable from '../tables/hoursTable'

class ShowHours extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        let display;
        if (this.props.show.hours){

            const rowData = [];
            this.props.show.hours.forEach((el) => {
                rowData.push(el.split(": "))
            })
            
            display = (
                <div id="center-head">
                    <h3>Restaurant Hours and Info</h3>
                    <div className="hoursandInfo">
                        <HoursTable rows={rowData} />
                        
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