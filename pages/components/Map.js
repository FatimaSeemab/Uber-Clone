import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl"; 
import { useEffect } from 'react';
mapboxgl.accessToken = 'pk.eyJ1IjoiZmF0aW1hLXNlZW1hYjIwMDEiLCJhIjoiY2t3dDltamRyMWViNDJ1cmxnM3EzeTlieSJ9.BmUtmLcYV2h_GJeZDxjWpQ';

function Map({pickupCoordinates,dropoffCoordinates}) {
    console.log(pickupCoordinates);
    console.log(dropoffCoordinates);
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.29611, 39.39172],
        zoom: 3
        });
        // addToMap(map)
        if(pickupCoordinates){addToMap(map,pickupCoordinates)}
        if(dropoffCoordinates){addToMap(map,dropoffCoordinates)}  
        if(dropoffCoordinates && pickupCoordinates ){
            map.fitBounds([
                pickupCoordinates,
                dropoffCoordinates
            ],{padding:60})
        }
    },[pickupCoordinates,dropoffCoordinates]);
   
    
    const addToMap=(map,coordinates)=>{
        const marker1=new mapboxgl.Marker()
        .setLngLat(coordinates) 
        .addTo(map); 
    }
    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}
const Wrapper=tw.div`flex-1 h-1/2`

export default Map

