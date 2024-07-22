'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useStore } from '@/lib/store'
import { cn } from '@/lib/utils'

function Controls() {
    const {controlId , inc} = useStore()
    const controls = [{"ControlName":"General Information","controlId":0},{"ControlName":"Crew","controlId":1},{"ControlName":"Special Attacks","controlId":2},{"ControlName":"Devil Furit","controlId":3,},{"ControlName":"Weapons","controlId":4},{"ControlName":"Allies","controlId":5},{"ControlName":"Haki","controlId":6}]
  return (
    <div className=' h-full w-full flex justify-center items-end'>
        <div className='  flex flex-col justify-end'>
            <h2 className=' text-white/90 text-5xl leading-tight font-medium'>Controls..</h2>
            <div className=' flex flex-col items-end gap-2'>
                {
                    controls.map((control)=>{
                        
                        return(
                            <div key={control.controlId}>
                                <Button className={cn('text-3xl text-white/90 flex items-center font-normal leading-tight bg-transparent hover:bg-white/20 p-3 rounded-lg text-end',{
                                "bg-red-600/80 bg-opacity-70 hover:bg-red-600  transition":controlId==control.controlId,
                                })}
                                onClick={()=>{
                                    inc(control.controlId)
                                }}
                                >
                                    {control.ControlName}
                                </Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Controls