
import React, { useState,useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup,Marker} from 'react-leaflet';
import { latLngBounds } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { CircleMarker } from 'react-leaflet';
import { Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../addresses.json';
import Statistics from './statistics';
import SideSearch from './sideSearch';
const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});
var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

let total=data.length
let geocoded=0
let notgecoded=0
let highConfidence=0
let lowConfidence=0

function getMappable(file){
  let newarr=[]
  for(let i=0;i<=file.length-1;i++){
    if(file[i].type!="notgeocodeable"){
      newarr.push(file[i])
      geocoded++
      if(file[i].confidence>=0.5){
        highConfidence++
      }
      else{
        lowConfidence++
      }
    }
    else{
      notgecoded++
    }
  }
  return newarr
}

const jamaicaBounds = latLngBounds([18.5243, -78.3939], [17.6992, -76.1731]);
const position = [18.1020, -77.8339];
const zoom = 9.2;

export const JamaicaMap = () => {
  const [points, setpoints]=useState([])
  useEffect(()=>{
    setpoints(getMappable(data))
  },[])
  return (
    <div className='mapContainer'>
      <MapContainer center={position} zoom={zoom}  minZoom={9.2} maxZoom={30}  maxBounds={jamaicaBounds} scrollWheelZoom={false} style={{height: "90%", width: "100%"}}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        minZoom={8}
       
      />
      {points.map((point)=>{
        let iconColor
        if(point.confidence>=0.5){
          iconColor=greenIcon
        }else{
          iconColor=icon
        }
        return <Marker icon={iconColor} position={[point.latitude, point.longitude]}>
          <Popup>
            <p>Addres1: {point.address1}</p>
            <p>Address2: {point.address2}</p>
            <p>City: {point.city}</p>
            <p>State: {point.state}</p>
            <p>Country: {point.country}</p>
          </Popup>
        </Marker>
      })}
     
    </MapContainer>
    <Statistics total={total} numplot={lowConfidence+highConfidence} lowConfidence={lowConfidence} highConfidence={highConfidence} notgeocoded={notgecoded}/>
    </div>
    

  );
};