import React from 'react';
import IndexDropdown from '../nav_bar/index-dropdown';
import GreetingContainer from '../home/greeting_container';
import {withRouter} from 'react-router-dom';
class RestaurantShow extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        return(
            <div>
                <GreetingContainer />
                <IndexDropdown />
                <div className="rest-show">
                    <div className="rest-photo-show">
                        <div id="pic"></div>
                        <div id="pic"></div>
                        <div id="pic"></div>
                        <div id="pic"></div>
                    </div>
                    <div className="rest-show-info">
                        <div className="show-info-left">
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="show-info-right">
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(RestaurantShow)