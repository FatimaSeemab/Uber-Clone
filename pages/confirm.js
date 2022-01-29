
import React from 'react';
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Map from './components/Map';
import { useState } from 'react';
import RideSelector from './components/RideSelector';
function Confirm() {
    const router=useRouter()
    const {pickup,dropoff}=router.query
    const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);
    const getPickupCoordinates=(pickup)=>{
        const PickupLocation=pickup
        //Fetch Function
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${PickupLocation}.json?`+
        new URLSearchParams({
            access_token:"pk.eyJ1IjoiZmF0aW1hLXNlZW1hYjIwMDEiLCJhIjoiY2t3dDltamRyMWViNDJ1cmxnM3EzeTlieSJ9.BmUtmLcYV2h_GJeZDxjWpQ",
            limit:1
        })
        )
        .then(response =>response.json())
        .then(data=>{setPickupCoordinates(data.features[0].center)})
    }

    const getDropoffCoordinates=(dropoff)=>{
        const DropoffLocation=dropoff
        //Fetch Function
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${DropoffLocation}.json?`+
        new URLSearchParams({
            access_token:"pk.eyJ1IjoiZmF0aW1hLXNlZW1hYjIwMDEiLCJhIjoiY2t3dDltamRyMWViNDJ1cmxnM3EzeTlieSJ9.BmUtmLcYV2h_GJeZDxjWpQ",
            limit:1
        })
        )
        .then(response =>response.json())
        .then(data=>{setDropoffCoordinates(data.features[0].center)})
    }
   useEffect(() => {
     getPickupCoordinates(pickup);
     getDropoffCoordinates(dropoff);
   }, [pickup,dropoff]);
   console.log(pickupCoordinates);
   console.log(dropoffCoordinates);

  return <Wrapper>
             <ButtonContainer>
                 <Link href="/search" passHref>
                 <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                 </Link>
             </ButtonContainer>
            <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}/>
                <ConfirmButtonContainer>
                    <ConfirmButton>Confirm Uber X</ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
       </Wrapper>;
}

export default Confirm;
const Wrapper=tw.div`
h-screen
flex flex-col`

const ConfirmButton=tw.div`
bg-black text-white text-center text-xl m-4  py-4 
`
const ConfirmButtonContainer=tw.div`border-t-2`
const RideContainer=tw.div`flex-1 h-1/2 flex flex-col
`
const ButtonContainer=tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md hover:pointer `
const BackButton=tw.img`
h-full object-contain`