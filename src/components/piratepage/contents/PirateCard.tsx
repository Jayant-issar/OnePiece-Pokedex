import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    fullname:string | undefined
    imageLink:string | ""
    pirateId:string | undefined
    bounty:number | undefined
    rank:string | undefined
}

function PirateCard(props:props) {
  return (
    <div className='w-48 text-white bg-transparent'>
        {/* todo : make the page go to the general GeneralInformation tab */}
        <Link href={`/pirate?pirateId=${props.pirateId}`}>
            <div className='bg-zinc-800 text-white border-none flex flex-col items-center rounded-md h-48'>
                <div className=' p-1 w-full'>
                    <Image src={props.imageLink} alt='pirate image' width={250} height={250}/>
                </div>
                <div className=''>
                    <p className=' text-base text-center font-semibold'>{props.fullname}</p>
                    <p className=' text-center text-base'>{props.rank}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default PirateCard