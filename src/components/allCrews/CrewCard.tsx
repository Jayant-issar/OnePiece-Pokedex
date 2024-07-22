"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    fullname:string | undefined
    imageLink:string | ""
    crewId:string 
}

function CrewCard(props:props) {
  return (
    <div className='w-48 text-white bg-transparent'>
        {/* todo : make the page go to the general GeneralInformation tab */}
        <Link href={`/crew?crewId=${props.crewId}`}>
            <div className='bg-zinc-800 text-white border-none flex flex-col items-center rounded-md h-44'>
                <div className=' p-1 min-h-[6.5rem] w-auto h-[6.5rem] overflow-clip'>
                    <Image src={props.imageLink} alt='pirate image' width={200} height={200} className='min-h-[4.5rem] overflow-clip rounded-sm h-auto w-auto'/>
                </div>
                <div className=' mt-5'>
                    <p className=' text-base text-center font-semibold'>{props.fullname}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default CrewCard