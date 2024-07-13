import Controls from '@/components/piratepage/Controls'
import PiratePageNavBar from '@/components/piratepage/navbar'
import Image from 'next/image'
import React from 'react'

function PirateOriginPage() {
  return (
    <div className="min-h-screen max-h-screen w-full bg-[url('https://images4.alphacoders.com/135/1352216.png')] bg-contain md:bg-cover md:bg-center">
        <div className='min-h-screen max-h-screen backdrop-blur-[8px]'>
            <div id="piratepagenavbar" className=''>
                <PiratePageNavBar/>
            </div>

            <div id='maincontent' className='h-[89.7vh] p-2 pb-0 w-full flex overflow-x-hidden'>
              <div id="informationContainer" className='k w-[40vw] h-full overflow-y-scroll '>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quisquam hic nulla, repellat quis blanditiis excepturi non dignissimos quasi natus totam iste rem sunt fugit facilis quas ipsum eum. Cumque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, magnam quia! Sequi, doloribus repudiandae aliquam incidunt corrupti voluptas sed neque maxime qui libero quibusdam, quia natus minus aspernatur quae iusto.
                Quaerat animi facilis nam nobis et quibusdam necessitatibus vero obcaecati similique ullam neque, iste voluptatibus libero quo, accusantium perspiciatis nostrum ratione, reiciendis quas totam. Nulla commodi officiis veritatis accusamus expedita.
                Voluptas culpa harum quo aperiam odio illum laborum assumenda, suscipit ipsam mollitia iure saepe sint cum. Non quia, autem eos labore doloremque praesentium asperiores cupiditate, sint soluta reiciendis nam unde?
                Aliquid alias, repellendus est dolorem animi quae cupiditate, corrupti fuga voluptates quisquam eligendi sapiente. Incidunt explicabo perferendis sit sunt omnis quis ad, rerum nihil aut. Laborum mollitia vero repellat esse!
                Neque, at consectetur culpa magni dolorum quos ex veniam voluptatum aliquam quis deleniti itaque rerum rem. Delectus porro, corrupti doloremque ut incidunt voluptatem repellat quo ex necessitatibus impedit dolor amet.
                Cupiditate debitis, dolorum adipisci ipsa eligendi facere vitae fuga officia dolor, voluptatibus consequuntur quas molestiae sequi saepe? Rem deleniti, inventore neque ab assumenda veritatis veniam voluptate esse quos, eaque ipsam?
                Dolor voluptatibus minus dolores corrupti vitae sint molestiae culpa quidem sunt amet esse optio architecto illum aliquid adipisci tempore fugiat tenetur tempora praesentium sapiente animi eum, est exercitationem? Animi, obcaecati!
                Maxime pariatur illo rem ipsam voluptate sint laboriosam enim recusandae a non libero, nisi inventore architecto vitae sed. Blanditiis modi facere quos nulla natus dicta officia iure debitis id sed.
                Temporibus illum tempora accusamus autem, nemo delectus, optio quae sapiente quo ipsam hic in. Obcaecati officiis voluptatem neque sed harum totam culpa. Vero officiis esse alias, adipisci eveniet vitae voluptate.
                Aspernatur excepturi adipisci, amet ullam magni a quas, sunt, tenetur eius provident consectetur quos nisi. Eius enim numquam culpa quibusdam, saepe asperiores doloribus iure est blanditiis labore fugiat tenetur voluptatem!
                Consequuntur id libero cum aliquam laudantium dicta culpa reprehenderit recusandae fugit odit quis, cumque aliquid consequatur laboriosam quo aperiam ipsum temporibus optio ipsam nam nemo quia debitis sapiente unde! Eveniet?
                Quasi, nostrum nesciunt? Qui earum ullam esse quaerat hic laboriosam commodi. Delectus accusantium error nesciunt expedita similique iste eos quae odit assumenda, hic repellat amet, velit saepe id illo omnis.
                Doloribus, accusamus. Molestiae consectetur atque officiis qui velit alias accusantium modi obcaecati odio dolorem nemo ut, quis nostrum voluptatem maxime, pariatur dolorum veniam beatae in soluta assumenda nobis. Porro, consequatur.
                Ab exercitationem architecto debitis laborum sequi nesciunt nostrum, perspiciatis laudantium itaque deserunt repudiandae deleniti sint veniam, dolores fugiat excepturi cum quaerat in reiciendis nihil voluptas. Enim quidem beatae sequi animi!
                Beatae nihil delectus ad nam fuga ratione assumenda deleniti aut, est nesciunt, iusto qui tempora ipsa alias autem maiores eaque eos enim veniam corrupti laboriosam! Aliquid dolorem porro reprehenderit quo?
                Officia totam at, nemo doloribus ea voluptas dicta, quos quia eaque iste delectus, laboriosam beatae expedita commodi ducimus quas ullam dolorum odit. Ab inventore consectetur perspiciatis facere libero quisquam culpa!
                Provident eum ad accusamus alias perspiciatis neque similique eos itaque, consequatur id atque quibusdam asperiores saepe ex suscipit doloribus sed a esse quos hic ea voluptates ipsum voluptate? Maxime, iste.
                Rem, placeat? Perspiciatis doloremque voluptates laudantium, incidunt rerum consequuntur accusantium eum ex quam beatae minus odio quasi debitis necessitatibus quod facere blanditiis error autem esse assumenda sapiente tempore temporibus quis?
                Ea nihil doloremque delectus nobis molestias nisi ducimus quia ab? Dignissimos quibusdam soluta eaque recusandae expedita? Fugit ipsum natus provident quia laudantium? Quae porro atque ducimus facilis fuga magni eveniet.
                Dolore ratione dicta in, quas quia id cum a, tempore unde doloribus ducimus dolorem temporibus! Architecto excepturi, quae commodi provident tempora rem voluptate quis sit repellendus soluta, natus, quibusdam minima!
              </div>

              <div id="characterphotocontainer" className=' w-[40vw] '>
                <div className=''>
                  <Image src={'/characterimages/luffy2.png'} alt='characterimage' width={550} height={900} className=''/>
                </div>
              </div>

              <div id="controlscontainer" className='w-[20vw]'>
                <Controls/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PirateOriginPage