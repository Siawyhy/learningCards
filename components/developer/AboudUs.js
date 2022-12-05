import background from '../../public/stars/backgroundgar.jpg'
import starname from '../../public/stars/starname.png'

import CardList from '../cardList/CardList'
import Image from 'next/image';

import { useState } from "react";


const DevAbout = () => {

    const [backActive, setBackActive] = useState("")
    
    const onBackout = (e) => {
        let wheelDelta = e.deltaY||e.deltaX
        
        if (wheelDelta > 0){
            setBackActive("_active")
        }
    }

    return (
        <>
            <main>
                <section className={`dev_background${backActive}`} onWheel={(e) => onBackout(e)}>
                    <div className='dev_wrapback'>
                        <Image 
                            src={background}
                            alt="background"
                            layout="fill"
                            sizes='100vh'
                            quality={100}
                            priority='true'
                        />
                        <div className='dev_starname'>
                        <Image
                            src={starname}
                            width={starname.width}
                            height={starname.height}
                            alt="name"
                            layout='responsive'
                            priority='false'
                        />
                        </div>
                    </div>
                </section>
                <section className={backActive? "content" : "secret"}>
                    <CardList/>
                </section>
            </main>
        </>
        
    )
}

export default DevAbout;