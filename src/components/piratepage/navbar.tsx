"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Searchbox from './Searchbox'
import { cn } from '@/lib/utils'
import { useNavStore } from '@/lib/store'
import { redirect } from 'next/navigation'

function PiratePageNavBar() {
  const {currentNavId, changeNavId} = useNavStore()
  const navbarElements = [{"navId":0,"navName":"Home","href":"/pirate"},{"navId":1,"navName":"Pirates","href":"/allPirates"},{"navId":2,"navName":"Pirate Crews","href":"/allCrews"},{"navId":3,"navName":"Marines","href":"/marines"},{"navId":4,"navName":"Others","href":"/others"},
    {"navId":5,"navName":"About","href":"https://www.linkedin.com/in/jayant-issar/"}
  ]
  return (
    <div id="ladingpagenavbar" className="w-full h-[10.3vh] flex items-center gap-6 justify-between py- px-3">
        <div id='logo and features' className='flex items-center gap-6'>
          <div className="flex flex-col items-center text-white/95 gap-0 hover:cursor-default" onClick={()=>{redirect('/')}}>
            <div className="font-medium md:text-2xl text-center">
                One Piece
                <h2 className='font-normal md:text-xl text-center'>
                  Pokedex 
                </h2>
            </div>
          </div>

          <div id='features' className=' text-white/90 text-lg flex gap-7 font-medium '>
            {
              navbarElements.map((nav)=>{
                return(
                  <Link onClick={(e)=>{
                    changeNavId(nav.navId)
                  }} href={nav.href}>
                    <div className={cn('p-2 hover:bg-white/10 rounded-lg',{
                      "bg-red-600/80 bg-opacity-70 hover:bg-red-600 hover:text-lg transition":currentNavId==nav.navId,
                    })}>
                      {nav.navName}
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>

        <div id="searchbox" className='w-64'>
          <Searchbox/>
        </div>
        
    </div>
  )
}

export default PiratePageNavBar