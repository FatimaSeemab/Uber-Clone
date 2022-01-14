import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import Map from './components/Map';
import tw from "tailwind-styled-components"
import Link from 'next/link';
export default function Home() {
  

  
  return (
   
    <Wrapper>
     <Map id="map">Map</Map>
     <ActionItems>
       <Header>
         <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
         <Profile >
           <Name>Fatima Seemab

           </Name>
           <UserImage src="/Profile.jpg"/>
         </Profile>

       </Header>
       <ActionButtons>
         <Link href="/search">
         
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
            Ride
          </ActionButton>
          </Link>

         <ActionButton>
         <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
            Wheel
          </ActionButton>
          
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
          Reserve  
          </ActionButton>
          
       </ActionButtons>
       <InputButton>
          Where to?
        </InputButton>
     </ActionItems>
    </Wrapper>
  )
}
const Wrapper=tw.div`
flex flex-col  h-screen
`
// const  Map=tw.div`
// bg-red-500 flex-1`
// const ActionItems=tw.div`
// flex-1
//  `
const ActionItems=tw.div`flex-1 bp-4`
const Header=tw.div`flex justify-between items-center`
const UberLogo=tw.img`h-28`
const Profile=tw.div`flex items-center  `
const Name=tw.div` mr-4 w-20 text-sm`
const UserImage=tw.img`h-12 w-12 rounded-full border border-gray-200 p-px`
const ActionButtons=tw.div`flex `
const ActionButton=tw.div`
bg-gray-200
m-1 h-32
items-center flex-col justify-center
rounded-lg
flex
flex-1
transform hover:scale-105 transition text-xl`
const ActionButtonImage=tw.img`h-3/5
`
const InputButton=tw.div`h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8`