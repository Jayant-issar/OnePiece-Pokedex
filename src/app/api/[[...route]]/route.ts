import db from '@/lib/db'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', (c)=>{
    return c.json({
        message:"hello "
    })
})

app.get('/allpirates', async (c) => {
    try {
        console.log("request came for all pirates");
        
        const allPirates = await db.pirateCharacter.findMany({
            select:{
                bgImageUrl:true,
                id:true,
                name:true,
                bounty:true,
                rank:true,

            }
        })
        return c.json({
            allpirates: allPirates
        });
    } catch (error) {
        console.error("Error fetching all pirates:", error);
        return c.json({ error: "Internal Server Error"+error }, 500);
    }
})

//all crews
app.get('/allCrews', async (c) => {
    try {
        const allCrews = await db.pirateGroup.findMany({
            select:{
                bgImageUrl:true,
                name:true,
                id:true
            }
        })
        return c.json({
            allCrews: allCrews
        });
    } catch (error) {
        console.error("Error fetching all crews:", error);
        return c.json({ error: "Internal Server Error" }, 500);
    }
})

//searching devil fruit

app.get('/devilFruits', async (c)=>{
    try {
        const allDevilFruits = await db.devilFruit.findMany({
            select:{
                name:true,
                description:true,
                imageUrl:true,
                type:true,
                PirateCharacter:{
                    select:{
                        name:true
                    }
                },
                MarineCharacter: {
                    select:{
                        name:true
                    }
                },
                OtherCharacter:{
                    select:{
                        name:true
                    }
                }
                

            }
        })
        return c.json({
            allDevilFruits:allDevilFruits
        })
    } catch (error) {
        console.error("error while fetching all devil fruits ", error);
        return c.json({ error: "Internal Server Error" }, 500);
    }
})


//serach pirate group
app.get('/crew', async (c) => {
    const crewId = c.req.query("crewId")
    try {
        const allpirates = await db.pirateGroup.findUnique({
            where:{
                id:crewId
            }
        });
        return c.json({
            allpirates: allpirates
        });
    } catch (error) {
        console.error("Error pirate group:", error);
        return c.json({ error: "Internal Server Error" }, 500);
    }
})

app.get('/pirate',async (c)=>{
    const pirateId = c.req.query("pirateId")
    const piratedata = await db.pirateCharacter.findUnique({
        where:{
            id:pirateId
        },
        include:{
            DevilFruit:true,
            Haki:true,
            PirateGroup:true,
            SpecialAttack:true,
            Weapon:true
        }
    }) 
    try {
        return c.json({
            piratedata:piratedata
        })
    } catch (error) {
        console.error(error);
        console.log("no such pirate found");
        
        
    }
})

//search by name (api for search box)
app.get('/pirate/byName', async (c)=>{
    const pirateName = c.req.query('pirateName')
    try {
        const pirateData = await db.pirateCharacter.findMany({
            where:{
                name:{
                    contains:pirateName,
                    mode: 'insensitive'
                }
            },select:{
                name:true,
                id:true,
                rank:true,
                bgImageUrl:true,
                PirateGroup: {
                    select:{
                        name:true
                    }
                }
            }
        })
        return c.json({
            pirateData: pirateData
        })
    } catch (error) {
        console.log("error occured while finding a pirate with name ", pirateName);
        console.error(error);
        
    }
})







//character of a crew

app.get('/crewMembers', async (c)=>{
    const crewId = c.req.query("crewId")
    try {
        const crewMembers = await db.pirateCharacter.findMany({
            where:{
                crewId:crewId
            },select:{
                name:true,
                id:true,
                bounty:true,
                rank:true,
                bgImageUrl:true,
                imageUrl:true
            }
        })

        return c.json({
            crewMembers:crewMembers
        })
    } catch (error) {
        console.error("error find crew memners", error);
        
    }
})


//api for special attacks reqquest

app.get('/specialAttacks', async (c) => {
    const pirateId = c.req.query("pirateId")
    try {
        const specialAttacks = await db.specialAttack.findMany({
            where:{
                pirateCharacterId:pirateId
            }
        });
        return c.json({
            specialAttacks: specialAttacks
        });
    } catch (error) {
        console.error("Error finding special attacks:", error);
        return c.json({ error: "Internal Server Error" }, 500);
    }
})

app.get('/devilfruit', async (c) => {
    const pirateId = c.req.query("pirateId")
    try {
        const devilfruit = await db.devilFruit.findMany({
            where:{
                pirateCharacterId:pirateId
            }
        });
        return c.json({
            devilfruit: devilfruit
        });
    } catch (error) {
        console.error("Error finding devil fruit:", error);
        return c.json({ error: "Internal Server Error" }, 500);
    }
})

app.get('/weapons', async (c) => {
    const pirateId = c.req.query("pirateId")
    try {
        const weapons = await db.weapon.findMany({
            where:{
                pirateCharacterId:pirateId
            }
        });
        return c.json({
            weapons: weapons
        });
    } catch (error) {
        console.error("Error finding weapons:", error);
        return c.json({ error: "Internal Server Error" }, 500);
    }
})

app.get('/haki', async (c) => {
    const pirateId = c.req.query("pirateId")
    try {
        const haki = await db.pirateCharacter.findMany({
            where:{
                id:pirateId
            },select:{
                Haki:true
            }
        })
        return c.json({
            haki:haki
        });
    } catch (error) {
        console.error("Error haki:", error);
        return c.json({ error: "Internal Server Error" }, 500);
    }
})


export const GET = handle(app)
export const POST = handle(app)