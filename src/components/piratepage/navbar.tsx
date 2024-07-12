import Link from 'next/link'
import React from 'react'
import Searchbox from './Searchbox'

function PiratePageNavBar() {
  return (
    <div id="ladingpagenavbar" className="w-full h-16 flex items-center gap-6 justify-between py- px-3">
        <div id='logo and features' className='flex items-center gap-6'>
          <div className="flex flex-col items-center text-white/95 gap-0">
            <div className="font-medium md:text-2xl text-center">
                One Piece
                <h2 className='font-normal md:text-xl text-center'>
                  Pokedex
                </h2>
            </div>
          </div>

          <div id='features' className=' text-white/90 text-lg flex gap-8 font-medium '>
            <div><Link href={"/allpirates"}> Pirates </Link></div>
            <div><Link href={"/crews"}>Pirate Crews</Link></div>
            <div><Link href={"/marines"}>Marines</Link></div>
            <div><Link href={"others"}>Others</Link></div>
          </div>
        </div>

        <div id="searchbox" className='w-64'>
          <Searchbox/>
        </div>
        
    </div>
  )
}

export default PiratePageNavBar