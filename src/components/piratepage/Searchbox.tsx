'use client'

import React, {  useState } from 'react'

import {AiOutlineSearch} from 'react-icons/ai'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

type SearchApiResponse = {
    name:string;
    id:string
    rank:string;
    bgImageUrl:string[];
    PirateGroup: {
        name:string
    }
}

const Searchbar = () => {

    const [activeSearch, setActiveSearch] = useState<SearchApiResponse[]>([])
    
    // useMemo(()=>{
        
    // },[])

    const handleSearch = (e:any) => {
        if(e.target.value == ''){
            setActiveSearch([])
            return false
        }

        async function fetchData() {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pirate/byName?pirateName=${e.target.value}`)
            setActiveSearch(response.data.pirateData.slice(0,8))
        }
        fetchData()
    }

  return (
    <form className='w-full relative'>
        <div className="relative">
            <input type="search" placeholder='Search Pirates...' className='w-full p-4 rounded-full bg-zinc-800 h-12 opacity-90 active:border-none active:outline-none focus:outline-none text-white' onChange={(e) => handleSearch(e)}/>
            <div className='absolute right-1 top-1/2 -translate-y-1/2 p-4 h-10 w-auto flex items-center bg-zinc-600 rounded-full'>
                <AiOutlineSearch className='' />
            </div>
        </div>

        {   

            activeSearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-black bg-opacity-80 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                    {
                        activeSearch.map(pirate => (
                            <Link href={`pirate?pirateId=${pirate.id}`}>
                                <div className=' text-white h-[4.5rem] w-full rounded-lg flex items-center pl-2 gap-2 hover:bg-white/20'>
                                    <div id="imageContainer" className=''>
                                        <Image src={pirate.bgImageUrl[0]} alt='image' height={50} width={70} className=' h-10 w-14 overflow-clip rounded-sm'/>
                                    </div>
                                    <div className=' text-sm'>
                                        {pirate.name}
                                        <p className='text-[0.7rem]'>{pirate.rank} · {pirate.PirateGroup.name}  </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            )
        }        
    </form>
  )
}

export default Searchbar