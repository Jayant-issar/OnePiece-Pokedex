import React from 'react'
import { Button } from '../ui/button'

function Controls() {
    const controls = [{"ControlName":"Crew","controlId":1},{"ControlName":"Special Attacks","controlId":2},{"ControlName":"Devil Furit","controlId":3,},{"ControlName":"Weapons","controlId":4},{"ControlName":"Allies","controlId":4},{"ControlName":"Haki","controlId":6}]
  return (
    <div className=' h-full w-full flex justify-center items-end'>
        <div className='  flex flex-col justify-end'>
            <h2 className=' text-white/90 text-5xl leading-tight font-medium'>Controls..</h2>
            <div className=' flex flex-col items-end gap-3'>
                {
                    controls.map((control)=>{
                        return(
                            <Button className=' text-3xl text-white/90 font-normal leading-tight bg-transparent hover:bg-white/20 p-2 rounded-lg text-end'>
                                {control.ControlName}
                            </Button>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Controls