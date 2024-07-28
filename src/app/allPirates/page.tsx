'use client'
import PirateCard from "@/components/piratepage/contents/PirateCard"
import PiratePageNavBar from "@/components/piratepage/navbar"
import axios from "axios"
import Link from "next/link"
import { useMemo, useState } from "react"

type AllpiratesApiResponse = {
    bgImageUrl:string[],
    id: string,
    name:string,
    bounty:string,
    rank:string
}


function AllPiratesOriginPage() {
    const [allPiratesData,SetAllPiratesData] = useState<AllpiratesApiResponse[]|null>(null)
    const [requestFailed, setrequestFailed] = useState<boolean>(false)
    
    useMemo(()=>{

        async function fetchAllPiratesData() {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/allpirates`)
                SetAllPiratesData(response.data.allpirates)
                if(!response.data.allpirates){
                    setrequestFailed(true)
                }
            } catch (error) {
                console.log("error fetching all pirates data", error);
                setrequestFailed(true)
            }
            
        }
        fetchAllPiratesData()
    },[])
    
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

            <div id="allpirates" className=" p-4 flex gap-6 flex-wrap">
                {
                    allPiratesData.map((pirate)=>{
                        return(
                            <div key={pirate.id}>
                                <PirateCard fullname={pirate.name} pirateId={pirate.id} rank={pirate.rank} imageLink={pirate.bgImageUrl[Math.floor(Math.random()*pirate.bgImageUrl.length)]} bounty={pirate.bounty}/>
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