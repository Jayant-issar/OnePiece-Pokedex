import { Weapon} from '@/lib/types'
import SpecialAttackCarousel from './SpecialAttackCarousel'

type props = {
  pirateId:string
  weapondata:Weapon[]
}





function Weapons(props:props) {
  if(props.weapondata.length==0){
    return <div className=' text-white text-5xl text-center font-semibold'>
      Bro is a free hand fighter
    </div>
  }

  return (
    <div className=' flex flex-col gap-3'>
      {
        props.weapondata.map((weapon)=>{
          return(
            <div key={weapon.name} className=' text-white p-2 flex flex-col bg-zinc-800 bg-opacity-70 rounded-lg'>
                  <div id="carouselcontainer" className='flex justify-center text-black'>
                    <SpecialAttackCarousel imageurlarr={weapon.imageUrl}/>
                  </div>
                  <div className='text-4xl mt-2 font-semibold text-center'>
                    {weapon.name}
                  </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Weapons