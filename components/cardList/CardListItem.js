import {useState, useCallback} from "react";

import { useChangeCardMutation } from "../../store/fetchQuerySlice";

import style from '../../styles/card.module.scss'

const CardListItem = ({ru, en, like, onDelete, onLikeCard}) => {

    const [name, setName] = useState (en);
    const [blur, setBlur] = useState ("")

    function reName () {
        setName(name => name === en? ru : en)
    }

    const [setCard] = useChangeCardMutation();

    const onEditCard = useCallback((id, {ru, en, like}) => {
        like = (like) ? false : true
        setCard({id, ru, en, like});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <li>
            <div className={style.body} onPointerEnter={()=>{setBlur(style.active)}} onPointerLeave={()=>{setBlur("")}} >
                <div className={style.blur_wrapper} onClick={(e) => {e.stopPropagation()}}>
                    <div className={`${style.blur} ${blur}`}></div>
                </div>
                <div className={like? style.like_active : style.like} onClick={(e) => {e.stopPropagation(onLikeCard())}}></div>
                <div className={style.title} onClick={() => reName(name)}><h3 className={style.title_name}>{name}</h3></div>
                <div className={style.button}>
                    <button className={`btn ${style.button_item} ${style.edit}`} onClick={(e) => console.log(e)}>Edit</button>
                    <button className={`btn ${style.button_item} ${style.delete}`} 
                                                                    onClick={(e) => e.stopPropagation()}
                                                                    onDoubleClick={() => onDelete()}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default CardListItem;