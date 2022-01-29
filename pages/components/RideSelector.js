import React,{useState,useEffect} from 'react';
import tw from "tailwind-styled-components";
import {carList} from "../Data/carList.js"
 function RideSelector({pickupCoordinates,dropoffCoordinates}) {
     const [rideDuration, setRideDuration] = useState(0);
     useEffect(() => {
       //get ride duration from mapbox on basis of pickup and dropoff coordinates 
       rideDuration=fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZmF0aW1hLXNlZW1hYjIwMDEiLCJhIjoiY2t3dDltamRyMWViNDJ1cmxnM3EzeTlieSJ9.BmUtmLcYV2h_GJeZDxjWpQ`).
       then(res=>res.json())
       .then(data=>setRideDuration(data.routes[0].duration/100))
     }, [pickupCoordinates,dropoffCoordinates]);
     
  return <Wrapper>
            <Title>
                Choose a ride, or swap up for more
            </Title>
            <CarList>
                {
                  carList.map((car,index)=>(
                    <Car key={car,index}>
                        <CarImage src={car.imgUrl}/>
                        <CarDetails>
                            <Service>
                               {car.service}
                            </Service>
                            <Time>
                                20 min
                            </Time>
                            
                        </CarDetails>
                        <Price>{"$"+(rideDuration*car.multiplier).toFixed(2)}</Price>
                    </Car>
                  ))
                }
                
            </CarList>
        </Wrapper>;
}

export default RideSelector;


const Wrapper=tw.div ` flex flex-col flex-1 overflow-y-scroll`

const CarList=tw.div ` overflow-y-scroll `

const Car=tw.div `flex  `

const CarDetails=tw.div `items-center p-4  flex-1`

const Service= tw.div`font-medium`

const Time=tw.div`text-xs text-blue-500 `

const Price =tw.div`text-sm `

const CarImage=tw.img `h-14 mr-2`

const Title=tw.div ` text-gray-500 text-cdenter text-xs py-2 border-b `