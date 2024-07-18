'use client'
import { useStore } from '@/lib/store'
import React, { useState } from 'react'
import CrewInfo from './CewInfo'
import GeneralInformation from './GeneralInformation'
import SpecialAttacks from './SpecialAttacks'
import DevilFruit from './DevilFruit'
import Weapons from './Weapons'
import Allies from './Allies'
import Haki from './Haki'
import { PirateData } from '@/lib/types'

function ContentMaster(ContentMasterProps:PirateData) {
  const {controlId} = useStore()
  if (controlId==0){
    return (
      <div>
        <GeneralInformation pirateName={ContentMasterProps.name} nickname={ContentMasterProps.nickName} bounty={ContentMasterProps.bounty} description={ContentMasterProps.description} rank={ContentMasterProps.rank} pirateGroup={ContentMasterProps.PirateGroup.name}/>
      </div>
    )
  }
  if (controlId==1){
    return(
      <div>
        <CrewInfo/>
      </div>
    )
  }
  if (controlId==2){
    return (
      <div>
        <SpecialAttacks/>
      </div>
    )
  }
  if (controlId==3){
    return (
      <div>
        <DevilFruit/>
      </div>
    )
  }
  if (controlId==4){
    return (
      <div>
        <Weapons/>
      </div>
    )
  }
  if(controlId==5){
    return(
      <Allies/>
    )
  }
  if (controlId==6){
    return (
      <div>
        <Haki/>
      </div>
    )
  }
  
}

export default ContentMaster