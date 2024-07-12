'use client'

import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { words } from "@/lib/data"
// Remember to import words or whatever you're using to store all the words the user can search for

const Searchbar = () => {

    const [activeSearch, setActiveSearch] = useState<string[]>([])

    const handleSearch = (e:any) => {
        if(e.target.value == ''){
            setActiveSearch([])
            return false
        }
        setActiveSearch(words.filter((w)=>{
            return(w.includes(e.target.value))
        }).slice(0,8))
    }
  return (
    <form className='w-full relative'>
        <div className="relative">
            <input type="search" placeholder='Search Pirates...' className='w-full p-4 rounded-full bg-slate-800 opacity-90 active:border-none active:outline-none focus:outline-none text-white' onChange={(e) => handleSearch(e)}/>
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full'>
                <AiOutlineSearch />
            </button>
        </div>

        {   
            activeSearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                    {
                        activeSearch.map(s => (
                            <span>{s}</span>
                        ))
                    }
                </div>
            )
        }        
    </form>
  )
}

export default Searchbar