import ExpandableCards from '@/components/blocks/expandable-card-demo-grid'
import OtherCharacterExpandeble from '@/components/OtherCharacter/OtherCharacterExpandeble'
import PiratePageNavBar from '@/components/piratepage/navbar'
import React from 'react'

function OtherCharacterOriginPage() {
  return (
    <div>
        <div className="min-h-screen max-h-screen w-full bg-contain md:bg-cover md:bg-center bg-[url('/devilfruits.png')]">
        <div className='min-h-screen max-h-screen bg-opacity-55 bg-zinc-800 backdrop-blur-[8px]'>
            <div id="piratepagenavbar" className=''>
                <PiratePageNavBar/>
            </div>
            <OtherCharacterExpandeble/>
        </div>
        </div>
    </div>
  )
}

export default OtherCharacterOriginPage