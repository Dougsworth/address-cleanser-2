

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { latLngBounds } from 'leaflet'
import data from '../addresses.json';
console.log(data[0])

const position = [18.1020, -77.8339];
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 40],
    iconAnchor: [5, 40]
});

const jamaicaBounds = latLngBounds([18.5243, -78.3939], [17.6992, -76.1731]);
L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
    
  

    return (
        <section className='map-component'>
        <div className='map'>
        <MapContainer center={position} zoom={9.2} minZoom={9.2} maxBounds={jamaicaBounds} scrollWheelZoom={true} style={{height: "50%", width: "100vw"}}>
            <TileLayer
            accessToken = '74XNMok8CtkY6OPMWhykcRrDHS8U7ARQWI71U8feEhy4w5mWyP9TQbssyncW3oop'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}.png?access-token={accessToken}'
            minZoom={8}
            
            />
            
            <Marker position={position} icon ={DefaultIcon}>
            <Popup>
                This is Jamaica
            </Popup>
            </Marker>
        
            
        </MapContainer>
        </div>
        </section>
  )
}



export default Map;