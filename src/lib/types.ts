export interface Weapon {
    id: string;
    name: string;
    pirateCharacterId?: string;
    imageUrl: string[];
}

export interface DevilFruit  {
    id: string;
    name: string;
    description: string;
    type: string;
    imageUrl: string;
    pirateCharacterId: string;
}
export interface Haki {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}
export interface PirateGroup {
    id: string;
    name: string;
    description: string;
    shipName: string;
    orgType: string;
    imageUrl: string[];
    bgImageUrl: string[];
}
export interface SpecialAttack  {
    id: string;
    name: string;
    description: string;
    pirateCharacterId: string;
    imageUrl: string[];
}
export interface PirateData {
    id: string;
    name: string;
    description: string;
    nickName: string;
    bounty: string;
    fightingStyle: string;
    rank: string;
    crewId: string;
    imageUrl: string[];
    bgImageUrl: string[];
    DevilFruit:DevilFruit[];
    Haki: Haki[];
    PirateGroup: PirateGroup;
    SpecialAttack:SpecialAttack[];
    Weapon: Weapon[];
}

export interface CrewMemberApiInterface {
    name?: string;
    id?: string;
    bounty?: string;
    rank?:string;
    imageUrl?: string[];
    bgImageUrl:string[]
}
  

export type SpecialAttackApiResponse = {
    id: string;
    name: string;
    description: string;
    pirateCharacterId?: string;
    imageUrl: string[];
};

export type DevilfruitApiResponseType = {
    id: string;
    name:string;
    description:string;
    type:string
    imageUrl:string
    pirateCharacterId:string
}

export type weaponsApiResponse = {
    id: string;
    name:string
    imageUrl:string[]
    pirateCharacterId:string

}