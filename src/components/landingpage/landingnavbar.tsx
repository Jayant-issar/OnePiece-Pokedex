import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function Landingnavbar() {
  return (
    <div id="ladingpagenavbar" className="w-full h-14 flex items-center justify-between gap-3 p px-2">
        <div className="flex flex-col items-center text-white/95 leading-tight">
        <div className="font-medium">
            One Piece
        </div>
        <div className=" font-normal">
            Pokedex
        </div>
        </div>
        <div className="">
        <Link href={""} className="text-white hover:bg-slate-50/20 transition p-2 rounded-lg mr-2">
            About
        </Link>
        <Button className=' bg-blue-500'>
            Login..
        </Button>
        </div>
    </div>
  )
}

export default Landingnavbar