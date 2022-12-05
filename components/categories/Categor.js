import Link from "next/link"
import { useState } from "react";

const Categ = () => {

    const [cat1, setback] = useState("")
    const [cat2, setback2] = useState("")
    const [cat3, setback3] = useState("")
    const [cat4, setback4] = useState("")
    const [cwrap, setsw] = useState("")

    function getout (id) {
        setsw("t")
        console.log(id)
        if(id==1){
            setback("_act");
            setback2("t");
            setback3("t");
            setback4("t");
        }
        if(id==2){
            setback("t");
            setback2("_act");
            setback3("t");
            setback4("t");
        }
        if(id==3){
            setback("t");
            setback2("t");
            setback3("_act");
            setback4("t");
        }
        if(id == 4){
            setback("t");
            setback2("t");
            setback3("t");
            setback4("_act");
        }
    }

    return (
        <>
        <div className="categ">
            <div className={`cwrap${cwrap}`} >
            <ul className="table">
                <li className={`cat${cat1}`} onPointerEnter={()=>getout(1)}>
                    <div className="cata">Noun</div>
                    <div className={`cot${cat1}`}>
                    <div className="tec">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </div>
                    <Link href="/"><div className="bacat">Learn</div></Link>
                    </div>
                </li>
                <li className={`cat${cat2}`} onPointerEnter={()=>getout(2)}>
                    <div className="cata">Adjectives</div>
                    <div className={`cot${cat2}`}>
                    <div className="tec">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                    <Link href="/"><div className="bacat">Learn</div></Link>
                    </div>
                </li> 
                <li className={`cat${cat3}`} onPointerEnter={()=>getout(3)}>
                    <div className="cata">Verbs</div>
                    <div className={`cot${cat3}`}>
                    <div className="tec">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </div>
                    <Link href="/"><div className="bacat">Learn</div></Link>
                    </div>
                </li>
                <li className={`cat${cat4}`} onPointerEnter={()=>getout(4)}>
                    <div className="cata">Other</div>
                    <div className={`cot${cat4}`}>
                    <div className="tec">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </div>
                    <Link href="/"><div className="bacat">Learn</div></Link>
                    </div> 
                </li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default Categ;