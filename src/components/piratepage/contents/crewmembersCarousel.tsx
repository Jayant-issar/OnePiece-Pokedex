import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { CrewMemberApiInterface } from '@/lib/types'
import axios from 'axios'
import CardSkeleton from './CardSkeleton'
import PirateCard from './PirateCard'

type props = {
  crewId : string | null
}

function CrewMembersCarousel({crewId}:props) {

  const [crewMembers,setCrewMembers] = useState<CrewMemberApiInterface[] |null>(null)

  useEffect(()=>{
    async function fetchCrewMembers(){
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/crewMembers?crewId=${crewId}`)
      console.log(JSON.stringify(response.data.crewMembers,null,2));
      setCrewMembers(response.data.crewMembers)
    }
    fetchCrewMembers()
  },[crewId])

  if(!crewMembers){
    return (
      <div className=' flex gap-3'>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </div>
    )
  }
  
  if (crewMembers.length==0){
    return(
      <></>
    )
  }
  
  return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[26rem]"
      >
        <CarouselContent>
          
              {
                crewMembers.map((crewMember)=>{
                  let imageArr = ["/"]

                  if (crewMember.imageUrl){
                    imageArr = crewMember.bgImageUrl
                  }else{
                    console.log("image url array not found of character - ", crewMember.name);
                  }
                  const randomIndex = Math.floor(Math.random() * imageArr.length)
                   
                  return(
                    <CarouselItem  className="md:basis-1/2" key={crewMember.id}>
                      <div className="p-1 max-w-48">
                        <PirateCard rank={crewMember.rank} bounty={crewMember.bounty} fullname={crewMember.name} imageLink={imageArr[randomIndex]} pirateId={crewMember.id} />
                      </div>
                    </CarouselItem>
                  )
                })
              }
            
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
}

export default CrewMembersCarousel