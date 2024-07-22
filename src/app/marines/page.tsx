import PiratePageNavBar from '@/components/piratepage/navbar'
import React from 'react'

function MarinesOriginPage() {
  return (
    <div className="min-h-screen max-h-screen w-full bg-contain md:bg-cover md:bg-center bg-[url('https://e0.pxfuel.com/wallpapers/471/141/desktop-wallpaper-one-piece-ost-one-piece-marine.jpg')]">
        <div className='min-h-screen max-h-screen bg-opacity-55 bg-zinc-800 backdrop-blur-[8px]'>
            <div>
                <PiratePageNavBar/>
            </div>
            
            <div className=' flex flex-col items-center justify-center h-[89.7vh]'>
            <p className=' text-white/90 text-3xl text-center md:text-6xl font-semibold'>Work is in Progress Please wait till the next update </p>
            <p className='text-white/90 text-2xl md:text-5xl font-semibold'>Thankyou</p>
            </div>
            
        </div>
    </div>
  )
}

export default MarinesOriginPage