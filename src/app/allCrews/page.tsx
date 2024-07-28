'use client'
import CrewCard from "@/components/allCrews/CrewCard"
import PiratePageNavBar from "@/components/piratepage/navbar"
import axios from "axios"
import { useMemo, useState } from "react"

type AllCrewsApiResponse = {
    bgImageUrl:string[],
    id: string,
    name:string,

}

export const runtime = 'edge'
function AllCrewOriginPage() {
    const [allCrewData,SetallCrewData] = useState<AllCrewsApiResponse[]|null>(null)
    
    useMemo(()=>{

        async function fetchallCrewData() {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/allCrews`)
            SetallCrewData(response.data.allCrews)
        }
        fetchallCrewData()
    },[])

    if(!allCrewData){
        return <div className="h-screen w-screen bg-[url('/loadingAnimations/onePieceLoadingAnimation2.gif')] bg-cover bg-center">

        </div>
    }

  return (
    <div className="min-h-screen max-h-screen w-full bg-contain md:bg-cover md:bg-center bg-[url('/landing/onepiecelanding7.jpeg')]">
        <div className='min-h-screen max-h-screen bg-opacity-55 bg-zinc-800 backdrop-blur-[8px]'>
            <div id="piratepagenavbar" className=''>
                <PiratePageNavBar/>
            </div>

            <div id="allpirates" className=" p-4 flex gap-3">
                {
                    allCrewData.map((pirate)=>{
                        return(
                            <div key={pirate.id}>
                                <CrewCard fullname={pirate.name} crewId={pirate.id}  imageLink={pirate.bgImageUrl[Math.floor(Math.random()*pirate.bgImageUrl.length)]} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    
    </div>
  )
}

export default AllCrewOriginPage