import React, { CSSProperties, useEffect, useMemo, useState } from 'react'
import CrewMembersCarousel from './crewmembersCarousel'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PirateGroup } from '@/lib/types';
import { CardContainer } from '@/components/ui/3d-card';




type props = {
  id:string
  AlliesData:PirateGroup[]
}

function Allies(props:props) {
  console.log(props.AlliesData);
  
  
  
  

  return (
    <div className=' flex flex-col gap-3'>
      {
        props.AlliesData.map((ally)=>{
          const [randomBGImage, setrandomBGImage] = useState<string>("")
          useMemo(()=>{
            const randomCrewbgImageLink = ally.bgImageUrl[Math.floor(Math.random() * ally.bgImageUrl.length)]
            setrandomBGImage(randomCrewbgImageLink)
            
          },[])
          const [crewDescriptionOpen, setCrewDescriptionOpen] = useState(false)
          
          const customCSS = {
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            display: '-webkit-box'
          };
          //@ts-ignore
          const cssProperties: CSSProperties = customCSS
  
          
          return (
            <div className=' bg-zinc-900 bg-opacity-75 rounded-xl p-3'>
            {/* about crew */}
              <div id="aboutcrew" className=' flex flex-col gap-3' key={ally.id}>
                <div id='crewname and image' className=' text-white text-5xl text-center font-semibold'>
                  {ally.name}
                    <CardContainer containerClassName=' p-1'>
                      <Image src={randomBGImage} alt='Crew Image' width={500} height={450} className=' rounded-md'/>
                    </CardContainer>
                  
                </div>

                <div id="aboutcrew" className=' text-white'>
                  <p className=' text-4xl font-semibold'>About</p>
                  
                  <div className=' text-lg leading-5' style={crewDescriptionOpen? undefined : cssProperties} >
                    {ally.description}
                  </div>
                  <Button onClick={()=>setCrewDescriptionOpen(!crewDescriptionOpen)} variant="ghost" className='p-1 text-base hover:bg-transparent transition hover:text-white'>
                    {crewDescriptionOpen? "Read less.." : "Read more.."}
                  </Button>
                  <p className=' text-3xl font-semibold mb-1'>Ship Name - {ally.shipName}</p>
                  
                </div>


              </div>
              {/* more from same pirate group */}
              <div id="suggestedPirates">

                <div id="crewmembers" className=' p-3 flex justify-center'>
                  <CrewMembersCarousel crewId={ally.id} />
                </div>

              </div>
          
        </div>
            )
          })
        
        }
      </div>
    )
}

export default Allies