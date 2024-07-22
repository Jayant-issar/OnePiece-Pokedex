import { Haki } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

type props = {
  hakidata:Haki[]
}


function HakiContent(props:props) {
  return (
    <div className=' flex flex-col gap-3 pt-4'>
      {
        props.hakidata.map((haki)=>{
          return(
            <div className='text-white p-2 flex flex-col gap-3 bg-zinc-800 bg-opacity-70 rounded-lg' key={haki.id}>
              <div className=' flex justify-center pt-6'>
                <Image src={haki.imageUrl} alt='haki image' width={500} height={450} className=' rounded-xl'/>
              </div>
              <div className=' text-5xl font-semibold text-center'>
                {haki.name}
              </div>
              <div className=' text-lg leading-5 text-center'>
                {haki.description}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default HakiContent