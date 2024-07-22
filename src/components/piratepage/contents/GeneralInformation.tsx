'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { CSSProperties } from 'react';
import CrewMembersCarousel from './crewmembersCarousel';
type GeneralInformationProps ={
  pirateName : string;
  nickname : string;
  bounty: number;
  description: string;
  pirateGroup: string;
  rank:string;
  fightingStyle:string;
}

function GeneralInformation({pirateName,nickname,bounty,description,pirateGroup,rank,fightingStyle}:GeneralInformationProps) {
  const customCSS = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
  };

  //@ts-ignore
  const cssProperties: CSSProperties = customCSS
  const [descriptionOpen, setDescriptionOpen] = useState(false)
  const allbadegs = ["Pirate",pirateGroup,rank,fightingStyle]
  return (
    <div className='p-3 flex flex-col gap-3'>
      
      <div id="badges" className=' flex justify-start'>
          {
            allbadegs.map((badge)=>{
              return(
                <div key={badge} className=' bg-slate-700 p-3 md:text-sm text-lg bg-opacity-90 mr-3 text-white rounded-full'>
                  {badge}
                </div>
              )
            })
          }
      </div>

      {/* name of the pirate */}
      <div id="name" className=' text-white text-6xl leading-tight font-semibold'>
        {pirateName}
        <div id="nickname" className=' text-3xl font-medium text-white/95'>
          {nickname}
        </div>
      </div>
      
      {/* bounty of the pirate */}
      <div id="bounty" className=' text-white text-3xl bg-slate-800 bg-opacity-80 p-3 rounded-full text-center'>
        Bounty - {bounty} <span className='text-2xl'>berry</span>
      </div>

      {/* description of the pirate */}
      <div id="descrription" className=' text-white text-xl leading-6 p-2 rounded-lg backdrop-blur-3xl'>
    
        <div style={descriptionOpen? undefined : cssProperties}>
          {description}
        </div>
        <div className=' w-16'>
          <Button onClick={()=>setDescriptionOpen(!descriptionOpen)} variant="ghost" className='p-1 text-base hover:bg-transparent transition hover:text-white'>
              {descriptionOpen? "Read less.." : "Read more.."}
          </Button>
        </div>
      </div>

      
      
    </div>
  )
}

export default GeneralInformation