import { SpecialAttack, SpecialAttackApiResponse } from '@/lib/types'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import GeneralContentSkeleton from './GeneralContentSkeleton'
import SpecialAttackCarousel from './SpecialAttackCarousel'

type props = {
  pirateId:string
  SpecialAttackdata:SpecialAttack[]

}


function SpecialAttacks(props:props) {

  if (props.SpecialAttackdata.length==0){
    return(
      <div className=' text-white text-5xl leading-tight font-semibold'>
        Special Attacks are Not yet known
      </div>
    )
  }

  return (
    <div className=' flex flex-col gap-3 '>
      {
        props.SpecialAttackdata.map((specialAttack)=>{
          return(
            <div key={specialAttack.name} className=' text-white p-2 flex flex-col bg-zinc-800 bg-opacity-70 rounded-lg'>
                  <div id="carouselcontainer" className='flex justify-center text-black'>
                    <SpecialAttackCarousel imageurlarr={specialAttack.imageUrl}/>
                  </div>
                  <div className='text-4xl mt-2 font-semibold text-center'>
                    {specialAttack.name}
                  </div>
                  <div id="specialattackdescription" className='mt-3 text-lg leading-5 p-3 text-center'>
                    {specialAttack.description}
                  </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SpecialAttacks