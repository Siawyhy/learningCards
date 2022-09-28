import { useState } from "react";
import OffConvas from "./OffCanvasCreate";

const CardCreate = () => {

    const [offCanvasActive, setOffCanvasActive] = useState(false)

    return (
        <>
            <li className="card">
                <div className="card-body" onClick={() => setOffCanvasActive(true)}>
                    <div className="card-title"><h3 className="card-title-create ">+</h3></div>
                </div>
            </li>
            <OffConvas active={offCanvasActive} setActive={setOffCanvasActive}/>
        </>
    )
}

export default CardCreate;