//libraries

//mine
import { useCallback } from "react";
import { useDeleteCardMutation, useGetCardsQuery } from "../../store/fetchQuerySlice";

//components
import CardCreate from "./CardCreate.js"
import CardListItem from "./CardListItem"


const CardList = () => {

    const {
        data: cards = [],
        isLoading,
        isError,
        error
    } = useGetCardsQuery()

    const [deleteCard] = useDeleteCardMutation()

    const onDelete = useCallback((id) => {
        deleteCard(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if (isLoading){
        return <h1>Карточки загружаются</h1>
    } else if (isError){
        return <><h1>Ошибка загрузки</h1><p>{error.status}</p></>
    }

    const renderCardList = (arr) => {
        if (arr.length === 0) {
            return (
                <h1>Добавьте карточку</h1>
            )
        }
        return arr.map(({id, ...props}) => {
            return (
                <CardListItem key={id} {...props} onDelete={()=> onDelete(id)}/>
            )
        })
    }
    const elements = renderCardList(cards);

    return (
        
        <ul className="card_list">
            {elements}
            <CardCreate/>
        </ul>
    )
}

export default CardList;