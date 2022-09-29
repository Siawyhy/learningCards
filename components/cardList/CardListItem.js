import { useMemo, useState, useCallback } from "react";
import { useChangeCardMutation } from "../../store/fetchQuerySlice";


const CardListItem = ({ru, en, like, onDelete, onLikeCard }) => {

    const [name, setName] = useState (en);
    let statusLike;

    function reName () {
        setName(name => name === en? ru : en)
    }

    return (
        <li className="card">
            <div className="card-body" onClick={() => reName(name)}>
                <div className={like?'card_like_active':'card_like'} onClick={(e) => {e.stopPropagation(onLikeCard())}}></div>
                <div className="card-title"><h3 className="card-title-name">{name}</h3></div>
                <div className="card_button">
                    <button className="btn card_button_item like" onClick={(e) => console.log(e)}>Edit</button>
                    <button className="btn card_button_item delete" 
                                                                    onClick={(e) => e.stopPropagation()}
                                                                    onDoubleClick={() => onDelete()}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default CardListItem;