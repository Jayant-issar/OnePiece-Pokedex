"use client";
import Image from "next/image";
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import axios from "axios";
import Link from "next/link";
import { DevilFruit, Haki, SpecialAttack, Weapon } from "@/lib/types";


type MarineCharacter = {
    id: string;
    name: string;
    description: string;
    rank: string;
    imageUrl: string[];
    bgImageUrl: string[];
    DevilFruit: DevilFruit[]|[];
    Haki: Haki[]|[];
    SpecialAttack: SpecialAttack[] | [];
    Weapon: Weapon[] | [];
  };



export default function MarineCharacterExpandeble() {
  const [active, setActive] = useState< MarineCharacter | boolean | null>(
    null
  );
  const [requestFailed, setrequestFailed] = useState<boolean>(false)

  const [MarineCharacter, setMarineCharacter] = useState<MarineCharacter[]|null>(null)
  
  useMemo(()=>{
    async function fetchData() {
      try {
        const link = `${process.env.NEXT_PUBLIC_API_URL}/allMarines`
        console.log(link);
        
        const response = await axios.get(link)
        setMarineCharacter(response.data.allMarines)
        if(!response.data.allMarines){
          setrequestFailed(true)
        }
        

        
      } catch (error) {
        console.log("error loading devil OtherCharacters data", error);
        if (!MarineCharacter){
          setrequestFailed(true)
        }
        
      }      
    }
    fetchData()
  },[])

  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  if (requestFailed){
    return(
      <div className=" text-white/90 text-5xl text-center w-full">
        The backend is down, please try again later or contact the devloper, <Link href={"https://www.linkedin.com/in/jayant-issar/"}>here</Link>
      </div>
    )
  }
  
  if(!MarineCharacter){
    
    setTimeout(() => {
      return(
        <div className="h-[100vh] w-screen bg-transparent bg-cover bg-center text-4xl flex justify-center items-center">
          Request time out. Sorry the server seems be to be down please contact the devloper {<Link href={'https://www.linkedin.com/in/jayant-issar/'}>Here</Link>}
        </div>
      )
    },10000);

    return <div className="h-screen w-screen bg-[url('/loadingAnimations/onePieceLoadingAnimation2.gif')] bg-cover bg-center">
        
    </div>
}
  

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-zinc-800 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-zinc-800 dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.bgImageUrl[0]}
                  alt={active.name}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className=" bg-opacity-80 bg-zinc-800/80">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="font-medium text-white/90 dark:text-neutral-200 text-base"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.rank}-${id}`}
                      className="text-white/80 text-base"
                    >
                      {active.rank}
                    </motion.p>
                   
                  </div>

                  {/* <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={'/'}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-red-600 text-white/90"
                  >
                    {"See User"}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white/80 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.description === "string"
                      ? active.description
                      : active.description}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="flex flex-wrap gap-4 p-4">
        {MarineCharacter.map((MarineCharacter, index) => (
          <motion.div
            layoutId={`card-${MarineCharacter.name}-${id}`}
            key={MarineCharacter.name}
            onClick={() => setActive(MarineCharacter)}
            className="p-4 flex flex-col bg-zinc-800 bg-opacity-70  hover:bg-white/20 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-48">
              <motion.div layoutId={`image-${MarineCharacter.name}-${id}`} className=" flex justify-center">
                <Image
                  width={200}
                  height={100}
                  src={MarineCharacter.bgImageUrl[0]}
                  alt={MarineCharacter.name}
                  className="h-28 w-80 rounded-lg"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${MarineCharacter.name}-${id}`}
                  className="font-medium text-white/90 dark:text-neutral-200 text-center md:text-left text-sm"
                >
                  {MarineCharacter.name}
                </motion.h3>
                <motion.p
                  layoutId={`description-${MarineCharacter.rank}-${id}`}
                  className="text-white/80 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {MarineCharacter.rank}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

