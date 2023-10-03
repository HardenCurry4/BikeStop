import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export const Maps = () => {

    const styles = {
        width: '100%',
        height: '44vh',
        border: 'solid 10px #2A3F54'
      };

      const customIcon = new Icon({
        iconUrl: "https://as2.ftcdn.net/v2/jpg/05/73/61/47/1000_F_573614707_S0hAeNHyfytOzdUFoB29pbEI5yC4aXYn.webp",
        iconSize: [30, 40],
      })

    return (
        <>
            <MapContainer style={styles} center={[4.5791046476566954, -74.1581195659773]} zoom={17} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={customIcon} position={[4.578561896985571, -74.15819734998752]}>
                    <Popup>
                        Entrada por la diag 68D sur. <br /> Entrada Secundaria.              
                    </Popup>
                </Marker>
                <Marker icon={customIcon} position={[4.580048444586082, -74.15979594642728]}>
                    <Popup>                        
                        Entrada por la AV Cra 51. <br /> Entrada Principal.
                    </Popup>
                </Marker>
            </MapContainer>

        </>
    )
}
