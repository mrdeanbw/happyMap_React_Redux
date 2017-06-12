import React, { Component } from 'react';
import { connect } from 'react-redux';
import './lovemap.css';
import { Map, TileLayer } from 'react-leaflet';

const mapStateToProps = (state) => {
    return {
        location: state.location
    }
}

class Posterposition extends Component { 
    constructor(props) {
        super(props);
        
        this.state = {
            position : {
                location: 'Paris, France',
                lat: 48.856614, 
                lng: 2.3522219000000177,

            },
            cityname: 'Paris',
            countryname: 'France'
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location !== nextProps.location) {
            this.setState({ position: nextProps.location });
            let p = nextProps.location.location.split(', ');
            this.setState({ cityname: p[0]});
            this.setState({ countryname: p[p.length - 1]});
        }     
    }
	
   
  render() {
      console.log("position", this.state.position)
    return (        
        <div className="poster-position">
            {/*<div className="control-zoom">
                <a className="control-zoom-left zoom-in" href="#" title="Zoom in">+ </a>
                <a className="control-zoom-right zoom-out" href="#" title="Zoom out">- </a>
            </div>*/}
            <div className="poster borders-double orientation-portrait size-18x24">
                <Map
                    style={{height: "55vh"}}
                    center={[this.state.position.lat, this.state.position.lng]}
                    zoom={12}>
                    <TileLayer
                        url="https://api.mapbox.com/styles/v1/luckyking113/cj3o7ex8d00402rqm9j1a5xzv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVja3lraW5nMTEzIiwiYSI6ImNqM28xOXd2YzAwMG4yd3A2ejlwazV4ZGoifQ.p953hPmHj3G24x0BVMZqlw"
                        attribution="<attribution>" />
                </Map>
                <div className="poster__frame">

                    <div className="poster-border heart-shape">
                        <div className="poster__paper ">
                            <div className="poster__map__wrap__row">
                                {/*<div className="poster__map__wrap">*/}
                                    {/*<div className="poster__map">*/}                                 

                                        
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="poster__labels">
                        <h2 className="title">
                            <span>{this.state.cityname}</span>
                        </h2>   
                        <h3 className="subtitle">                            
                            <span>{this.state.countryname}</span>
                        </h3>
                        <h4 className="tagline">
                            <span>{this.state.position.lat }°N / {this.state.position.lng }°W</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default connect(mapStateToProps)(Posterposition)