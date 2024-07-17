import ContentMaster from '@/components/piratepage/contents/ContentMaster'
import GeneralInformation from '@/components/piratepage/contents/GeneralInformation'
import Controls from '@/components/piratepage/Controls'
import PiratePageNavBar from '@/components/piratepage/navbar'
import Image from 'next/image'
import React from 'react'

function PirateOriginPage() {
  return (
    <div className="min-h-screen max-h-screen w-full bg-[url('https://images4.alphacoders.com/135/1352216.png')] bg-contain md:bg-cover md:bg-center">
        <div className='min-h-screen max-h-screen backdrop-blur-[8px]'>
            <div id="piratepagenavbar" className=''>
                <PiratePageNavBar/>
            </div>

            <div id='maincontent' className='h-[89.7vh] p-2 pb-0 w-full flex overflow-x-hidden'>
              <div id="informationContainer" className='k w-[40vw] h-full overflow-y-scroll '>
                <ContentMaster/>
              </div>

              <div id="characterphotocontainer" className=' w-[40vw] '>
                <div className=''>
                  <Image src={'/characterimages/luffy2.png'} alt='characterimage' width={550} height={900} className=''/>
                </div>
              </div>

              <div id="controlscontainer" className='w-[20vw]'>
                <Controls/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PirateOriginPage