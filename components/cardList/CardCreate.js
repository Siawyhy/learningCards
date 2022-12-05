import { useState } from "react";

import OffConvas from "../form/OffCanvasCreate";
import CardListItem from "../cardList/CardListItem"

import style from '../../styles/card.module.scss'

const CardCreate = () => {

    const [offCanvasActive, setOffCanvasActive] = useState(false)

    return (
        <>
            <li className={style.card}>
                <div className={style.body} onClick={() => setOffCanvasActive(true)}>
                    <div className={style.title}><h3 className={style.title_name}>+</h3></div>
                </div>
            </li>
            <OffConvas active={offCanvasActive} setActive={setOffCanvasActive}/>
        </>
    )
}

export default CardCreate;