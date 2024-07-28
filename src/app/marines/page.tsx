
import MarineCharacterExpandeble from '@/components/MarinesComponenets/MarinesExpandableCard'

import PiratePageNavBar from '@/components/piratepage/navbar'
import React from 'react'
export const runtime = 'edge'
function MarinesOriginPage() {
  return (
    <div>
        <div className="min-h-screen max-h-screen w-full bg-contain md:bg-cover md:bg-center bg-[url('/devilfruits.png')]">
        <div className='min-h-screen max-h-screen bg-opacity-55 bg-zinc-800 backdrop-blur-[8px]'>
            <div id="piratepagenavbar" className=''>
                <PiratePageNavBar/>
            </div>
            <MarineCharacterExpandeble/>
        </div>
        </div>
    </div>
  )
}

export default MarinesOriginPage