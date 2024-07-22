'use client'
import ContentMaster from '@/components/piratepage/contents/ContentMaster'
import Controls from '@/components/piratepage/Controls'
import PiratePageNavBar from '@/components/piratepage/navbar'
import { useStore } from '@/lib/store'
import { PirateData } from '@/lib/types'
import axios from 'axios'
import Image from 'next/image'
import { redirect, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type imagesType = {
  foregroundImageUrl : string;
  backgroundImageUrl:string ;
}

function PirateOriginPage() {
  //getting the pirateid from the search params
  const searchParams  = useSearchParams();
  let pirateId = searchParams.get("pirateId")

  //redirecting to luffy if there is no pirateId found
  if (pirateId==null){
    redirect("/pirate?pirateId=9c93a72a-006d-43ee-8c88-617cae4c4b0c")
  }

  //fetching data
  const [pirateData, setPirateData] = useState<PirateData | null>(null)
  const {controlId , inc} = useStore()
  const [randomForegroundImage, setRandomForegroundImage] = useState<string>("");
  const [randomBGImage, setRandomBGImage] = useState<string>("");


  useEffect(()=>{
    const fetchPirateData = async () => {
      setPirateData(null) // setting the piratedata to null again to trigger reload animation
      inc(0) // setting the controlId to 0 (general information tab)
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pirate?pirateId=${pirateId}`)
        console.log(response.data.piratedata);
        setPirateData(response.data.piratedata)
        
        const randomForeground = response.data.piratedata.imageUrl[Math.floor(Math.random() * response.data.piratedata.imageUrl.length)];
        const randomBackground = response.data.piratedata.bgImageUrl[Math.floor(Math.random() * response.data.piratedata.bgImageUrl.length)];
        setRandomForegroundImage(randomForeground);
        setRandomBGImage(randomBackground);
        
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
  
  
  
  return (

        <div
        className="min-h-screen max-h-screen w-full bg-contain md:bg-cover md:bg-center"
        style={{ backgroundImage: `url(${randomBGImage})`}}
          >
        <div className='min-h-screen max-h-screen bg-opacity-55 bg-zinc-800 backdrop-blur-[8px]'>
            <div id="piratepagenavbar" className=''>
                <PiratePageNavBar/>
            </div>

            <div id='maincontent' className='h-[89.7vh] p-2 pb-0 w-full flex overflow-x-hidden'>
              <div id="informationContainer" className='k w-[40vw] h-full overflow-y-scroll '>
                
                {/* fixed error from ai on passing the prop learn whats exactly happing */}
                <ContentMaster {...pirateData} />
              </div>

              <div id="characterphotocontainer" className=' w-[40vw] flex justify-center '>
                <div className=''>
                  <Image src={randomForegroundImage} alt='characterimage' lazyBoundary='true' width={600} height={900} loading='lazy' className=' max-h-full h-auto w-auto overflow-auto'/>
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