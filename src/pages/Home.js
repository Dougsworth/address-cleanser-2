import React from "react";
import Map from "../components/map";
import Top from "../components/Top";
import Map2 from "../components/map2";
import { JamaicaMap } from "../components/map2";
import MapControls from "../components/mapcontrols";
import Statistics from "../components/statistics";
import SideSearch from "../components/sideSearch";
const Home=()=>{
    return(
        <div className="Home-page">
            <Top/>  
            <div className="map-bar">
                <JamaicaMap/>
                <SideSearch/>
            </div>
           

        </div>
    )
}
export default Home