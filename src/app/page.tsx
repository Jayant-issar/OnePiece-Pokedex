import Landingnavbar from "@/components/landingpage/landingnavbar";
import Image from "next/image";
import landinghero from "../../public/landing/heroimages/landingheroimage4.png"


export default function Home() {
  return (
    <div className={`min-h-screen md:h-[100vh] w-full bg-[url('/landing/onepiecelanding3.jpg')] bg-contain md:bg-cover md:bg-center`} >
      <div className="h-full w-full backdrop-blur-sm flex flex-col justify-between">
        <Landingnavbar/>
        <div className="text-center
        ">
          <h1 className="text-white/90 text-pretty text-5xl font-medium md:text-7xl">
            One Piece
            <div className=" text-white/90 text-4xl md:text-5xl text-centre font-normal">
              Pokedex
            </div>
          </h1>
        </div>
        <div className="rounded-lg flex">
          <Image src={landinghero} alt="landing hero image" height={100} width={600}/>
          
        </div>  
      </div>
      
    </div>
  )
}
