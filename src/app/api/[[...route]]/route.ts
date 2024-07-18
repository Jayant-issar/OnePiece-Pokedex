import db from '@/lib/db'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/allpirates', async (c) => {
    try {
        const allpirates = await db.pirateCharacter.findMany();
        return c.json({
            allpirates: allpirates
        });
    } catch (error) {
        console.error("Error fetching all pirates:", error);
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

export const GET = handle(app)
export const POST = handle(app)