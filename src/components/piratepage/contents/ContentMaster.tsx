'use client'
import { useStore } from '@/lib/store'
import React, { useState } from 'react'
import CrewInfo from './CewInfo'
import GeneralInformation from './GeneralInformation'
import SpecialAttacks from './SpecialAttacks'
import DevilFruit from './DevilFruit'
import Weapons from './Weapons'
import Allies from './Allies'

import { PirateData } from '@/lib/types'
import HakiContent from './Haki'
import DevilFruitContent from './DevilFruit'

function ContentMaster(ContentMasterProps:PirateData) {
  const {controlId} = useStore()
  if (controlId==0){
    return (
      <div>
        <GeneralInformation pirateName={ContentMasterProps.name} nickname={ContentMasterProps.nickName} bounty={ContentMasterProps.bounty} description={ContentMasterProps.description} rank={ContentMasterProps.rank} pirateGroup={ContentMasterProps.PirateGroup.name} fightingStyle={ContentMasterProps.fightingStyle}/>
      </div>
    )
  }
  if (controlId==1){
    return(
      <div>
        <CrewInfo id={ContentMasterProps.crewId} crewdata={ContentMasterProps.PirateGroup}/>
      </div>
    )
  }
  if (controlId==2){
    return (
      <div>
        <SpecialAttacks pirateId={ContentMasterProps.id}  SpecialAttackdata={ContentMasterProps.SpecialAttack}/>
      </div>
    )
  }
  if (controlId==3){
    return (
      <div>
        <DevilFruitContent pirateId={ContentMasterProps.id} devilfruitdata={ContentMasterProps.DevilFruit} />
      </div>
    )
  }
  if (controlId==4){
    return (
      <div>
        <Weapons pirateId={ContentMasterProps.id} weapondata={ContentMasterProps.Weapon}/>
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
        <HakiContent hakidata={ContentMasterProps.Haki}/>
      </div>
    )
  }
  
}

export default ContentMaster