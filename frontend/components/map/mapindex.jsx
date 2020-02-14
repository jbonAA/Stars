import React from 'react';
import axios from 'axios';

const mapboxgl = require("mapbox-gl/dist/mapbox-gl")

class IndexMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            markers: [],
            map: {},
            city: [],
            restaurants: this.props.restaurants
        }

        debugger
        this.generateMap = this.generateMap.bind(this)
        this.generateMarkers = this.generateMarkers.bind(this)
        this.fly = this.fly.bind(this)

    }





    componentDidMount() {
        debugger
        let marks = [];
    
        // this.props.restaurants.forEach((restaurant) => {
        //     if (restaurant.city === this.props.location.split(",")[0]) {
        //         let address = restaurant.address;
        //         let location = `${restaurant.city}, ${restaurant.state}`
        //         axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}%2C%20${location}.json?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog&autocomplete=true`)
        //             .then(res => {
        //                 marks.push([res.data.features[0].center[0], res.data.features[0].center[1], restaurant.name, restaurant.address])
        //             })
        //             .then(() => {
        //                 this.setState({
        //                     markers: marks,
        //                 })
        //             })
        //     }

        // })
        this.generateMap()
        

        
        


        //create map iterate through props make markers
        //look at local storage to determine the center depends on city


    }

    componentDidUpdate(prevProps, prevState) {
        let num = this.state.markers.length
        if (prevProps.location !== this.props.location) {
            this.fly(this.state.map)
            // this.state.map.on("load", () => {
            //     this.state.map.center = this.state.markers[0]
            // })
            this.generateMarkers()
        } else if (prevProps.restaurants.length !== this.props.restaurants.length) {
            this.generateMarkers()
        }
        // window.location.reload(true)
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

                return this.state.city
            })
            .then((city) => {
                mapboxgl.accessToken = "pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog"
                var map = new mapboxgl.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: city[0],
                    zoom: 11
                })

                return map
            })
            .then((map) => {
                this.setState({
                    map: map
                })
            })
            .then(() => {
                this.generateMarkers(11)
                this.getPopups(this.state.map)
            })

    }

    fly(map) {
        map.flyTo({
            center: this.props.restaurants[0].latlng,
            zoom: 12,
            bearing: 0,
            speed: 1.0,
            curve: 2,
            easing: function(t) {
                return t;
            },
            essential: true
        })
    }

    generateMarkers() {
        
        
        for (let j = 0; j < 11; j++) {
            if (this.state.map.getSource("markers" + `${j}`)) {
                this.state.map.removeLayer("markers" + `${j}`)
                this.state.map.removeSource("markers" + `${j}`)
                
            }
        }
        // this.state.map.on("load", () => {
            this.state.map.loadImage("https://i.imgur.com/MK4NUzI.png", (error, image) => {
                if (error) throw error;
                
                this.props.restaurants.forEach((el, i) => {
                    let mk = el.latlng
                    this.state.map.addImage(`custom-marker${i}`, image);
                    this.state.map.addLayer({
                        id: "markers" + `${i}`,
                        type: "symbol",
                        source: {
                            type: "geojson",
                            data: {
                                type: 'FeatureCollection',
                                features: [
                                    {
                                        type: 'Feature',
                                        properties: {
                                            description:
                                            `<strong id="map-popup">
                                            <p>${el.name}</p>
                                            <p>${el.address}</p>
                                            </strong>`,
                                            icon: `${image}`
                                        },
                                        geometry: {
                                            type: "Point",
                                            coordinates: mk
                                        }
                                    }
                                ]
                            }
                        },
                        layout: {
                            "icon-image": `custom-marker${i}`,
                            'icon-allow-overlap': true
                        }
                        
                    })
                })
            })
        // this.getPopups(this.state.map)
        this.fly(this.state.map)

    }
    
    getPopups(map) {
        debugger
        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: true
        })

        for (let i = 0; i < this.props.restaurants.length; i++) {
            map.on('mouseenter', `markers${i}`, (e) => {
                map.getCanvas().style.cursor = 'pointer'


                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;

                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                popup
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map)

                map.on('mouseleave', function () {
                    map.getCanvas().style.cursor = "";
                    popup.remove()
                })
            })
        }



    }





    shouldComponentUpdate(nextState, nextProps) {
        debugger
        if (this.props.location !== nextState.location) {
            return true;
        } else if (this.props.restaurants.length !== nextState.restaurants.length) {
            return true
        } else {
            return false
        }
    }


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
