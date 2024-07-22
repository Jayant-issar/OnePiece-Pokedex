'use client'
import PirateCard from "@/components/piratepage/contents/PirateCard"
import PiratePageNavBar from "@/components/piratepage/navbar"
import axios from "axios"
import { useMemo, useState } from "react"

type AllpiratesApiResponse = {
    bgImageUrl:string[],
    id: string,
    name:string,
    bounty:number,
    rank:string
}


function AllPiratesOriginPage() {
    const [allPiratesData,SetAllPiratesData] = useState<AllpiratesApiResponse[]|null>(null)
    
    useMemo(()=>{

        async function fetchAllPiratesData() {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/allpirates`)
            SetAllPiratesData(response.data.allpirates)
        }
        fetchAllPiratesData()
    },[])

    if(!allPiratesData){
        return <div className="h-screen w-screen bg-[url('/loadingAnimations/onePieceLoadingAnimation2.gif')] bg-cover bg-center">

        </div>
    }

  return (
    <div className="min-h-screen max-h-screen w-full bg-contain md:bg-cover md:bg-center bg-[url('/landing/onepiecelanding3.jpg')]">
        <div className='min-h-screen max-h-screen bg-opacity-55 bg-zinc-800 backdrop-blur-[8px]'>
            <div id="piratepagenavbar" className=''>
                <PiratePageNavBar/>
            </div>

            <div id="allpirates" className=" p-4 flex gap-3">
                {
                    allPiratesData.map((pirate)=>{
                        return(
                            <div>
                                <PirateCard fullname={pirate.name} pirateId={pirate.id} rank={pirate.rank} imageLink={pirate.bgImageUrl[Math.floor(Math.random()*pirate.bgImageUrl.length)]} bounty={pirate.bounty} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    
    </div>
  )
}

export default AllPiratesOriginPage