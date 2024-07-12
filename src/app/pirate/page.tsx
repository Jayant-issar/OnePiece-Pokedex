import PiratePageNavBar from '@/components/piratepage/navbar'
import React from 'react'

function PirateOriginPage() {
  return (
    <div className="min-h-screen max-h-screen w-full bg-[url('https://images4.alphacoders.com/135/1352216.png')] bg-contain md:bg-cover md:bg-center">
        <div className='min-h-screen max-h-screen backdrop-blur-[8px]'>
            <div id="piratepagenavbar" className=''>
                <PiratePageNavBar/>
            </div>
            <div id='maincontent' className='h-full w-full border-2 border-black'>
              <div id="informationContainer" className=' border-2 border-white w-[40vw] h-full overflow-y-auto'>
                
              </div>

              <div id="characterphotocontainer">

              </div>

              <div id="controlscontainer">

              </div>
            </div>
        </div>
    </div>
  )
}

export default PirateOriginPage