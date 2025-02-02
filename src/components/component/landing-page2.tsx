/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/hq3i80ACKAA
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Search, SearchSlashIcon, ShipIcon, ShipWheel, ShipWheelIcon } from "lucide-react"

export function LandingPage2() {
  return (
    <div className="flex flex-col min-h-dvh bg-white/80">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <div className="size-6 text-red-600" />
          <span className="text-2xl font-bold text-red-600">One Piece Pokedex</span>
        </Link>
        <nav className="ml-auto text-black flex gap-4 sm:gap-6">
          <Link href="/pirate" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Characters
          </Link>
          <Link href="/pirate" className="text-sm font-medium hover:underline underline-offset-4 " prefetch={false}>
            Devil Fruits
          </Link>
          <Link href="https://www.linkedin.com/in/jayant-issar/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="https://github.com/Jayant-issar/OnePiece-Pokedex" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Github
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Admin
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full flex items-center pb-8 pt-8 md:pb-12 md:pt-14 lg:pb-20 lg:pt-20 bg-red-600/90">
          <div className="container flex items-center space-y-10 xl:space-y-16 px-4 md:px-6">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white">
                  Explore the World of One Piece
                </h1>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Dive into the rich and captivating world of One Piece, where legendary pirates, powerful Devil Fruits,
                  and epic adventures await.
                </p>
                <div className="mt-6">
                  <Link
                    href="/pirate"
                    className="inline-flex font-semibold h-9 items-center justify-center rounded-md bg-white/80 px-4 py-2 text-sm text-black/90 shadow transition-colors hover:bg-red-500/90 hover:text-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Characters
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/landing/onepiecelanding2.jpg"
                  width={400}
                  height={400}
                  alt="One Piece"
                  className="w-full max-w-[400px] rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <div className=" w-full text-center font-semibold">
          Database Seeding is still in progress, you may not find Characters you are looking for, click on Explore characters
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the detailed information on characters, weapons, crew, special attacks, devil fruits, haki,
                  and more.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/landing/OnePiecePokedexPirateInfo.PNG"
                  width={200}
                  height={200}
                  alt="Character Info"
                  className="w-auto h-auto object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Character Info</h3>
                  <p className="text-muted-foreground">
                    Detailed information on the Straw Hat Pirates and other characters, including their weapons, special
                    attacks, and more.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/08/pjimage-9-6.jpg"
                  width={200}
                  height={200}
                  alt="Devil Fruits"
                  className="w-full h-auto object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Devil Fruits</h3>
                  <p className="text-muted-foreground">
                    Explore the diverse and powerful Devil Fruits that grant users extraordinary abilities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image src="https://staticg.sportskeeda.com/editor/2023/04/0a1a4-16807424922904-1920.jpg" width={200} height={170} alt="Haki" className="w-auto h-auto object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Haki</h3>
                  <p className="text-muted-foreground">
                    Discover the mysterious and powerful Haki abilities that some characters possess.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://beebom.com/wp-content/uploads/2023/02/featured-8.jpg?w=750&quality=75"
                  width={200}
                  height={200}
                  alt="Marines"
                  className="w-full h-44 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Marines</h3>
                  <p className="text-muted-foreground">
                    Learn about the powerful Marines and their role in the world of One Piece (under development).
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className=" text-center text-4xl font-semibold">
              And many more...
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6 text-red-600">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-red-500 text-white p-3">
                    <Search/>
                  </div>
                  <h3 className="text-2xl font-bold">Character Search</h3>
                </div>
                <p className=" text-black/80">
                  Find any character from the One Piece universe with our powerful search tool.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black/90 shadow transition-colors hover:bg-red-500/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Search Characters
                </Link>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-red-500 p-3 text-white">
                    <ShipIcon/>
                  </div>
                  <h3 className="text-2xl font-bold">Pirate Crews</h3>
                </div>
                <p className="text-muted-foreground">
                  Explore the different pirate crews and their members in the One Piece world.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black/90 shadow transition-colors hover:bg-red-500/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Pirate Crews
                </Link>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-red-500 p-3 text-white">
                    <ShipWheel/>
                  </div>
                  <h3 className="text-2xl font-bold">About Marines</h3>
                </div>
                <p className="text-muted-foreground">
                  Learn more about the Marines, the law enforcement organization in the One Piece world.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black/90 shadow transition-colors hover:bg-red-500/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explore Marines <div className="text-sm text-muted-foreground ml-4">(Under Development)</div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">
                  Meet the Straw Hat Crew
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the diverse and captivating characters that make up the legendary Straw Hat Pirates.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://i.pinimg.com/736x/c9/43/b0/c943b003a2f644037821087bf7cb35e3.jpg"
                  width={200}
                  height={200}
                  alt="Monkey D. Luffy"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Monkey D. Luffy</h3>
                  <p className="text-muted-foreground">
                    The captain of the Straw Hat Pirates, known for his boundless energy and dream of becoming the King
                    of the Pirates.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://i.pinimg.com/736x/01/33/0b/01330b5f4e7cf4dc31c46f16fe54cd21.jpg"
                  width={200}
                  height={200}
                  alt="Roronoa Zoro"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Roronoa Zoro</h3>
                  <p className="text-muted-foreground">
                    The first mate of the Straw Hat Pirates, a skilled swordsman with an unwavering determination.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image src="https://i.pinimg.com/564x/85/b4/ff/85b4ff574be958f5d12b2cbe4cbdeefb.jpg" width={200} height={200} alt="Nami" className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Nami</h3>
                  <p className="text-muted-foreground">
                    The navigator of the Straw Hat Pirates, known for her exceptional navigational skills and cunning
                    tactics.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image src="https://i.pinimg.com/736x/78/73/07/78730784e6335107f0af5cd57b40cf59.jpg" width={200} height={200} alt="Usopp" className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Usopp</h3>
                  <p className="text-muted-foreground">
                    The sniper of the Straw Hat Pirates, a skilled marksman and storyteller with a knack for invention.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image src="https://i.pinimg.com/564x/ba/aa/4b/baaa4b6465701df2c075971928315893.jpg" width={200} height={200} alt="Sanji" className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Sanji</h3>
                  <p className="text-muted-foreground">
                    The cook of the Straw Hat Pirates, known for his culinary expertise, chivalry, and fierce fighting
                    abilities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://i.pinimg.com/564x/a7/b9/f8/a7b9f861399a6b21d7251aa03a93c1d5.jpg"
                  width={200}
                  height={200}
                  alt="Tony Tony Chopper"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Tony Tony Chopper</h3>
                  <p className="text-muted-foreground">
                    The doctor of the Straw Hat Pirates, a reindeer-human hybrid with the ability to transform and use
                    various medicinal techniques.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://i.pinimg.com/564x/88/75/d2/8875d2afe14f4076e34f479ec1a1524e.jpg"
                  width={200}
                  height={200}
                  alt="Nico Robin"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Nico Robin</h3>
                  <p className="text-muted-foreground">
                    The archaeologist of the Straw Hat Pirates, a former member of the Baroque Works organization with
                    the ability to sprout multiple body parts.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://i.pinimg.com/564x/e6/ef/7d/e6ef7d58233a7ca84c5d4cdbe2122649.jpg"
                  width={200}
                  height={200}
                  alt="Franky"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-red-600">Franky</h3>
                  <p className="text-muted-foreground">
                    The shipwright of the Straw Hat Pirates, a cyborg with impressive mechanical and engineering skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold text-red-600">One Piece</h3>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Characters
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Devil Fruits
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-red-600">Resources</h3>
            <Link href="https://onepiece.fandom.com/wiki/One_Piece_Wiki" className="text-muted-foreground hover:underline" prefetch={false}>
              Wiki
            </Link>
            <Link href="https://onepiece.fandom.com/wiki/One_Piece_Wiki" className="text-muted-foreground hover:underline" prefetch={false}>
              One Piece Fandom
            </Link>
            <Link href={'https://gamerant.com/'}  className="text-muted-foreground hover:underline">
              Game Rant
            </Link>

            
            <Link href="#" prefetch={false} />
          </div>

          <div className="grid gap-1">
            <h3 className="font-semibold text-red-600">About</h3>
            <Link href="https://www.linkedin.com/in/jayant-issar/" className="text-muted-foreground hover:underline" prefetch={false}>
              Devloper - Jayant Issar
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
