import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapComp = () => {
    const defaultProps = {
        center: {
            lat: 40.177628,
            lng: 44.512546,
        },
        zoom: 11
    };

    return (
        <section className="map">
            <div className="container">
                <div className="map__content">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                 >
                    <AnyReactComponent
                    lat={40.177628}
                    lng={44.512546}
                    text="My Marker"
                    />
                </GoogleMapReact>
                </div>
            </div>
        </section>
    );
};

export default MapComp;