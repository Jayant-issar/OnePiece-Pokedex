import { DevilFruit } from "@/lib/types"
import React from "react"
import Image from "next/image"


type props = {
  pirateId: string
  devilfruitdata:DevilFruit[]
}
function DevilFruitContent(props:props) {


  if(props.devilfruitdata.length==0){
    return(
      <div className=" text-white flex justify-center text-center items-center text-5xl">
        <p>Bro does not have a Devil Fruit</p>
      </div>
    )
  }

  return (
    <div className="">
      {
        props.devilfruitdata.map((devilfruit)=>{
          return(
            <div key={devilfruit.id} className=" flex flex-col gap-3 text-white ">
              <div className=" flex justify-center">
                <Image src={devilfruit.imageUrl} alt="devil fruit image" width={200} height={200} className="center rounded-lg"/>
               </div>
               <div className=" text-center text-4xl font-semibold flex flex-col items-center">
                  {devilfruit.name}
                  <div className=" text-2xl p-3 w-3/5 bg-zinc-800 bg-opacity-70 rounded-full">
                    {devilfruit.type}
                  </div>
               </div>
               <div className=" text-lg leading-5 text-center">
                {devilfruit.description}
               </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default DevilFruitContent