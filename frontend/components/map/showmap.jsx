import React from 'react';
import axios from 'axios';



const mapboxgl = require("mapbox-gl/dist/mapbox-gl")
class ShowMap extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            markers: [],
            map: {},
            city: [],
            restaurants: this.props.restaurants
        }

        
        this.generateMap = this.generateMap.bind(this)
        this.generateMarkers = this.generateMarkers.bind(this)
        this.fly = this.fly.bind(this)

    }

    componentDidMount() {
        this.generateMap()
    }

    componentDidUpdate(prevProps, prevState) {
        
        let num = this.state.markers.length
        if (prevProps.location !== this.props.location) {
            
            // console.log("hello")
            this.fly(this.state.map)
            // this.state.map.on("load", () => {
            //     this.state.map.center = this.state.markers[0]
            // })
            this.generateMarkers(this.state.map)
        } else if (prevProps.restaurants.length !== this.props.restaurants.length) {
            // console.log("hello")
            this.generateMarkers()
        } else if (prevProps.restaurants[0].name !== this.props.restaurants.name){
            // console.log("hello")
            this.fly(this.state.map)
            this.generateMarkers(this.state.map)
        }
        // window.location.reload(true)
    }

    generateMap() {
        
        mapboxgl.accessToken = "pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog"
        var map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: this.props.restaurants[0].latlng,
            zoom: 11
        })
        this.generateMarkers(map)
        // this.getPopups(map)
        this.setState({
            map: map
        })

    }

    fly(map) {
        map.flyTo({
            center: this.props.restaurants[0].latlng,
            zoom: 12,
            bearing: 0,
            speed: 1.0,
            curve: 2,
            easing: function (t) {
                return t;
            },
            essential: true
        })
    }

    generateMarkers(map) {
        // console.log(map)


        for (let j = 0; j < 11; j++) {
            if (map.getSource("markers" + `${j}`)) {
                map.removeLayer("markers" + `${j}`)
                map.removeSource("markers" + `${j}`)

            }
        }
        // map.on("load", () => {
        map.loadImage("https://i.imgur.com/MK4NUzI.png", (error, image) => {
            if (error) throw error;

            this.props.restaurants.forEach((el, i) => {
                let mk = el.latlng
                map.addImage(`custom-marker${i}`, image);
                map.addLayer({
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
        // this.fly(this.state.map)

    }

    // getPopups(map) {
    //     debugger
    //     var popup = new mapboxgl.Popup({
    //         closeButton: false,
    //         closeOnClick: true
    //     })

    //     for (let i = 0; i < this.props.restaurants.length; i++) {
    //         map.on('mouseenter', `markers${i}`, (e) => {
    //             map.getCanvas().style.cursor = 'pointer'


    //             var coordinates = e.features[0].geometry.coordinates.slice();
    //             var description = e.features[0].properties.description;

    //             while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //                 coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    //             }

    //             popup
    //                 .setLngLat(coordinates)
    //                 .setHTML(description)
    //                 .addTo(map)

    //             map.on('mouseleave', function () {
    //                 map.getCanvas().style.cursor = "";
    //                 popup.remove()
    //             })
    //         })
    //     }



    // }
    shouldComponentUpdate(nextState, nextProps) {
        
        if (this.props.location !== nextState.location) {
            return true;
        } else if (this.props.restaurants.length !== nextState.restaurants.length) {
            return true
        }else if(this.props.restaurants[0].name !== nextState.restaurants[0].name){
            return true 
        }else {
            return false
        }
    }

    render() {


        return (
            <div id="map-container">
                <div id="map2" ref={el => (this.mapContainer = el)}>

                </div>
            </div>
        )
    }




}

export default ShowMap