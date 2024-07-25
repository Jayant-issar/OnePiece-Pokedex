import ExpandableCardDemo from '@/components/blocks/expandable-card-demo-grid'
import PiratePageNavBar from '@/components/piratepage/navbar'
import React from 'react'

function DevilFruitPage() {
  return (
    <div>
        <div className="min-h-screen max-h-screen w-full bg-contain md:bg-cover md:bg-center bg-[url('/devilfruits.png')]">
        <div className='min-h-screen max-h-screen bg-opacity-55 bg-zinc-800 backdrop-blur-[8px]'>
            <div id="piratepagenavbar" className=''>
                <PiratePageNavBar/>
            </div>
            <ExpandableCardDemo/>
        </div>
        </div>
    </div>
  )
}

export default DevilFruitPage