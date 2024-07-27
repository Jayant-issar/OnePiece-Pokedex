'use client'
import ContentMaster from '@/components/piratepage/contents/ContentMaster'
import Controls from '@/components/piratepage/Controls'
import PiratePageNavBar from '@/components/piratepage/navbar'
import { useStore } from '@/lib/store'
import { PirateData, PirateGroup } from '@/lib/types'
import axios from 'axios'
import Image from 'next/image'
import { redirect, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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
    redirect("/pirate?pirateId=cjlcg4gxi0000v1ltfhz6u1v6")
  }
  const [requestFailed, setrequestFailed] = useState<boolean>(false)

  //fetching data
  const [pirateData, setPirateData] = useState<PirateData | null>(null)
  const {controlId , inc} = useStore()
  const [randomForegroundImage, setRandomForegroundImage] = useState<string>("");
  const [randomBGImage, setRandomBGImage] = useState<string>("");
  const [alliesData, setalliesData] = useState<PirateGroup[]| null>(null)
  


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

        const alliesLink = `${process.env.NEXT_PUBLIC_API_URL}/allies?searchCrewId=${response.data.piratedata.crewId}`
        const alliesResponse = await axios.get(alliesLink)
        setalliesData(alliesResponse.data.allies)
        
      } catch (error) {
        console.error("error fetching pirate data ", error);
        setrequestFailed(true)
      }
    }
    fetchPirateData()

  
  },[pirateId])
  if (requestFailed){
    return(
        <div className="h-screen w-screen bg-[url('/landing/onepiecelanding2.jpg')] bg-cover bg-center">
            <div className=" bg-zinc-900 bg-opacity-65 backdrop-blur-md text-5xl flex justify-center items-center h-screen w-screen text-white font-semibold p-4 gap-0">
                <p>The backend is down please try again after some time or contact the devloper,</p>
                <a href="https://www.linkedin.com/in/jayant-issar/" >here</a>

            </div>
        </div>
    )
}
  if (!pirateData || !alliesData) {
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
                <ContentMaster PirateData={pirateData} AliiesData={alliesData}  />
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