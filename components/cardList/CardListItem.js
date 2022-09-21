import { useMemo, useState } from "react";


const CardListItem = ({ru, en, like}) => {

    const [name, setName] = useState (en);
    const [likeActive, setLike] = useState (like); 

    function reName () {
        setName(name => name === en? ru : en)
    }
    
    function Like () {
        setLike (like => like === true? false : true);
        
    }

    function reLike (likeActive) {
        if (likeActive){
            return "_active"
        } else{
            return ""
        } 
    }
    
    const statusLike = useMemo (() => {
        return reLike(likeActive)
    }, [likeActive])

    return (
        <li className="card">
            <div className="card-body" onClick={() => reName(name)}>
                <div className={`card_like${statusLike}`} onClick={(e) => e.stopPropagation(Like(like))}></div>
                <div className="card-title"><h3 className="card-title-name">{name}</h3></div>
                <div className="card_button">
                    <button className="btn card_button_item like" onClick={(e) => e.stopPropagation(console.log("deleted"))}>Edit</button>
                    <button className="btn card_button_item delete"onClick={(e) => e.stopPropagation(console.log("deleted"))}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default CardListItem;