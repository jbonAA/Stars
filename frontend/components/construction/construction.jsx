import React from 'react'
import GreetingContainer from '../home/greeting_container'

class ConstructionComponent extends React.Component {
    constructor(props) {
        super(props)

        this.handleReturn = this.handleReturn.bind(this)
    }

    handleReturn(e) {
        e.preventDefault();
        debugger
        window.history.back()
    }

    render() {

        return (
            <div id="constructionpage">
                <GreetingContainer />
                <div id="constoptions">
                    <h1>Sorry Buster, Temporarily Under Construction</h1>
                    <br/>
                    <button onClick={this.handleReturn}>Return to Last Page</button>
                    
                </div>
            </div>
        )
    }
}

export default ConstructionComponent