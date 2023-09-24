import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

export const Maps = () => {

    const styles = {
        width: '100%',
        height: '400px',
        border: 'solid 10px #2A3F54'
      };

    return (
        <>
            <MapContainer style={styles} center={[4.579400, -74.157743]} zoom={18} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker  position={[4.578462, -74.158207, ]}>
                    <Popup>
                        Entrada por la diag 68D sur. <br /> Entrada Secundaria.              
                    </Popup>
                </Marker>
                <Marker  position={[4.579959, -74.159784]}>
                    <Popup>                        
                        Entrada por la AV Cra 51. <br /> Entrada Principal.
                    </Popup>
                </Marker>
            </MapContainer>

        </>
    )
}
