import React, { useEffect, useState } from 'react'
import CrewMembersCarousel from './crewmembersCarousel'
import axios from 'axios';
import GeneralContentSkeleton from './GeneralContentSkeleton';

type props = {
  id: string;
  name?: string;
  description?: string;
  shipName?: string;
  orgType?: 'Pirates' | 'Marines' | 'Other';  // Assuming orgType is an enum with these values
  imageUrl?: string[];
  bgImageUrl?: string[];
}

function CrewInfo(props:props) {
  
  const [crewData,setCrewData] = useState<props|null>()

  useEffect(()=>{

    async function fetchCrewData() {

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/crew?crewId=${props.id}`)
      console.log("the crew data is - ", response.data.allpirates);
      setCrewData(response.data.allpirates)
    }
    fetchCrewData()
  },[])
  
  if(!crewData){
    return(
        <div className=' flex justify-center'>
          <GeneralContentSkeleton/>
        </div>

    )
  }
  console.log("set crew data is ", crewData);
  
  return (
    <div>
      {/* about crew */}
      <div id="aboutcrew">
        <div className=' text-white text-5xl text-center font-semibold'>
          {crewData.name}
          <div>
            
          </div>
        </div>
      </div>
      {/* more from same pirate group */}
      <div id="suggestedPirates">
        <h2 className='md:text-4xl text-5xl text-white font-semibold'>
          Crew Members
        </h2>
        <div id="crewmembers" className=' p-3 flex justify-center'>
          <CrewMembersCarousel crewId={props.id} />
        </div>

      </div>
      
    </div>
  )
}

export default CrewInfo