import React from 'react';
import axios from 'axios';

const mapboxgl = require("mapbox-gl/dist/mapbox-gl")

class IndexMap extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            markers: [],
            map: {},
            city: []
        }
        debugger
        this.generateMap = this.generateMap.bind(this)
    }


    componentDidMount() {
        debugger
        let marks = [];
        this.props.restaurants.forEach((restaurant) => {
            if(restaurant.location === this.props.location){
                let address = restaurant.address;
                let location = `${restaurant.city}, ${restaurant.state}`
                axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}%2C%20${location}.json?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog&autocomplete=true`)
                    .then(res => {
                        console.log(res)
                        marks.push([res.data.features[0].center[0], res.data.features[0].center[1]])
                    })
                    .then(() => {
                        debugger
                        this.setState({
                            markers: marks
                        })
                    })
            }
        })
        debugger
        //create map iterate through props make markers
        //look at local storage to determine the center depends on city
        


    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if(prevProps.location !== this.props.location) {
            this.generateMap()
        }
    }


    generateMap() {
        let cty = []
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.props.location}.json?access_token=pk.eyJ1IjoiamJvbmFhIiwiYSI6ImNrMzZnaWdsdjAxaGozbm1wM254bnR5cGoifQ.zUuEvUSaf5GdH1zFqimOVw`)
            .then((res) => {
                cty.push([res.data.features[0].center[0], res.data.features[0].center[1]])
            })
            .then(() => {
                this.setState({
                    city: cty
                })
            })
            .then(() => {
                mapboxgl.accessToken = "pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog"
                var map = new mapboxgl.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: this.state.city[0],
                    zoom: 11
                })
                return map
            })
            .then((map) => {
                this.setState({
                    map: map
                })
            })
    }




    shouldComponentUpdate(nextState, nextProps) {
        debugger
        if(this.props.location !== window.localStorage.getItem){
            return true;
        }else{
            return false
        }
    }


    // shouldComponentUpdate(nextState, nextProps) {
    //     if (Object.values(nextState.restaurants).length > this.props.restaurants.length){
    //         return true
    //     }else{
    //         return false
    //     }
    // }


    render() {


        return (
            <div id="map-container">
                <div id="map" ref={el => (this.mapContainer = el)}>

                </div>
            </div>
        )
    }
 





}

export default IndexMap
