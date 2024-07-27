'use client'
import { useStore } from '@/lib/store'
import React, { useState } from 'react'
import CrewInfo from './CewInfo'
import GeneralInformation from './GeneralInformation'
import SpecialAttacks from './SpecialAttacks'
import Weapons from './Weapons'
import Allies from './Allies'

import { PirateData, PirateGroup } from '@/lib/types'
import HakiContent from './Haki'
import DevilFruitContent from './DevilFruit'

type ContentMasterProps = {
  PirateData:PirateData;
  AliiesData:PirateGroup[]
}

function ContentMaster(ContentMasterProps:ContentMasterProps) {
  const {controlId} = useStore()
  if (controlId==0){
    return (
      <div>
        <GeneralInformation pirateName={ContentMasterProps.PirateData.name} nickname={ContentMasterProps.PirateData.nickName} bounty={ContentMasterProps.PirateData.bounty} description={ContentMasterProps.PirateData.description} rank={ContentMasterProps.PirateData.rank} pirateGroup={ContentMasterProps.PirateData.PirateGroup.name} fightingStyle={ContentMasterProps.PirateData.fightingStyle}/>
      </div>
    )
  }
  if (controlId==1){
    return(
      <div>
        <CrewInfo id={ContentMasterProps.PirateData.crewId} crewdata={ContentMasterProps.PirateData.PirateGroup}/>
      </div>
    )
  }
  if (controlId==2){
    return (
      <div>
        <SpecialAttacks pirateId={ContentMasterProps.PirateData.id}  SpecialAttackdata={ContentMasterProps.PirateData.SpecialAttack}/>
      </div>
    )
  }
  if (controlId==3){
    return (
      <div>
        <DevilFruitContent pirateId={ContentMasterProps.PirateData.id} devilfruitdata={ContentMasterProps.PirateData.DevilFruit} />
      </div>
    )
  }
  if (controlId==4){
    return (
      <div>
        <Weapons pirateId={ContentMasterProps.PirateData.id} weapondata={ContentMasterProps.PirateData.Weapon}/>
      </div>
    )
  }
  if(controlId==5){
    return(
      <Allies id={ContentMasterProps.PirateData.id} AlliesData={ContentMasterProps.AliiesData} />
    )
  }
  if (controlId==6){
    return (
      <div>
        <HakiContent hakidata={ContentMasterProps.PirateData.Haki}/>
      </div>
    )
  }
  
}

export default ContentMaster