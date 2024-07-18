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
    bounty: number;
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