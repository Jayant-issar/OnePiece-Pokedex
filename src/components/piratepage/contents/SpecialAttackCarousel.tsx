import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

type props = {
    imageurlarr: string[] | []
}

function SpecialAttackCarousel(props:props) {
    return (
        <Carousel className="w-full max-w-[26rem]">
          <CarouselContent>
            {
                props.imageurlarr.map((image)=>{
                    return(
                        <CarouselItem>
                           <div className=' flex justify-center mt-2 overflow-clip'>
                                <Image src={image} alt='Specail Attack' width={500} height={450} className=' relative h-56 overflow-clip'/>
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

export default SpecialAttackCarousel