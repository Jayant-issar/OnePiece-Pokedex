import React, { CSSProperties, useEffect, useMemo, useState } from 'react'
import CrewMembersCarousel from './crewmembersCarousel'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PirateGroup } from '@/lib/types';
import { CardContainer } from '@/components/ui/3d-card';



type props = {
  id:string
  crewdata:PirateGroup
}

function CrewInfo(props:props) {
  
  
  const [crewDescriptionOpen, setCrewDescriptionOpen] = useState(false)
  const customCSS = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
  };
  //@ts-ignore
  const cssProperties: CSSProperties = customCSS
  
  const randomCrewbgImageLink = props.crewdata.bgImageUrl[Math.floor(Math.random() * props.crewdata.bgImageUrl.length)]
  return (
    <div>
      {/* about crew */}
      <div id="aboutcrew" className=' flex flex-col gap-3'>
        <div id='crewname and image' className=' text-white text-5xl text-center font-semibold'>
          {props.crewdata.name}
            <CardContainer containerClassName=' p-1'>
              <Image src={randomCrewbgImageLink} alt='Crew Image' width={500} height={450} className=' rounded-md'/>
            </CardContainer>
          
        </div>

        <div id="aboutcrew" className=' text-white'>
          <p className=' text-4xl font-semibold'>About</p>
          
          <div className=' text-lg leading-5' style={crewDescriptionOpen? undefined : cssProperties} >
            {props.crewdata.description}
          </div>
          <Button onClick={()=>setCrewDescriptionOpen(!crewDescriptionOpen)} variant="ghost" className='p-1 text-base hover:bg-transparent transition hover:text-white'>
            {crewDescriptionOpen? "Read less.." : "Read more.."}
          </Button>
          <p className=' text-3xl font-semibold mb-1'>Ship Name - {props.crewdata.shipName}</p>
          
        </div>


      </div>
      {/* more from same pirate group */}
      <div id="suggestedPirates">
        <h2 className='md:text-4xl text-5xl text-white font-semibold'>
          Crew Members
        </h2>
        <div id="crewmembers" className=' p-3 flex justify-center'>
          <CrewMembersCarousel crewId={props.id} />
        </div>

      </div>
      
    </div>
  )
}

export default CrewInfo