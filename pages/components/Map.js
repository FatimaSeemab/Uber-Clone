import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl"; 
import { useEffect } from 'react';
mapboxgl.accessToken = 'pk.eyJ1IjoiZmF0aW1hLXNlZW1hYjIwMDEiLCJhIjoiY2t3dDltamRyMWViNDJ1cmxnM3EzeTlieSJ9.BmUtmLcYV2h_GJeZDxjWpQ';

function Map() {
    
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.29611, 39.39172],
        zoom: 3
        });
        });
    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}
const Wrapper=tw.div`flex-1`

export default Map
