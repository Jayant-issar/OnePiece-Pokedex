'use client'
import ContentMaster from '@/components/piratepage/contents/ContentMaster'
import Controls from '@/components/piratepage/Controls'
import PiratePageNavBar from '@/components/piratepage/navbar'
import { PirateData } from '@/lib/types'
import axios from 'axios'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


function PirateOriginPage() {
  //getting the pirateid from the search params
  const searchParams  = useSearchParams();
  let pirateId = searchParams.get("pirateId")
  if (pirateId==null){
    pirateId = "9c93a72a-006d-43ee-8c88-617cae4c4b0c"
    alert("not found any pirate id automatically set pirateId to luffy's id")
  }

  //fetching data
  const [pirateData, setPirateData] = useState<PirateData | null>(null)

  useEffect(()=>{
    const fetchPirateData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/pirate?pirateId=${pirateId}`)
        console.log(response.data.piratedata);
        setPirateData(response.data.piratedata)
        
        
      } catch (error) {
        console.error("error fetching pirate data ", error);
        
      }
    }
    fetchPirateData()
  },[pirateId])
  
  if (!pirateData) {
    return(
      <div className="h-screen w-screen bg-[url('/loadingAnimations/onePieceLoadingAnimation1.gif')] bg-cover bg-center">
      </div>
    )
  }
  
  console.log("pirate data loaded - ",pirateData );
  
  
  return (
    <div className="min-h-screen max-h-screen w-full bg-[url('https://images4.alphacoders.com/135/1352216.png')] bg-contain md:bg-cover md:bg-center">
        <div className='min-h-screen max-h-screen backdrop-blur-[8px]'>
            <div id="piratepagenavbar" className=''>
                <PiratePageNavBar/>
            </div>

            <div id='maincontent' className='h-[89.7vh] p-2 pb-0 w-full flex overflow-x-hidden'>
              <div id="informationContainer" className='k w-[40vw] h-full overflow-y-scroll '>
                
                {/* fixed error from ai on passing the prop learn whats exactly happing */}
                
                <ContentMaster {...pirateData} />
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