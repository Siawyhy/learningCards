//libraries

//mine
import { useCallback } from "react";
import { useChangeCardMutation, useDeleteCardMutation, useGetCardsQuery } from "../../store/fetchQuerySlice";

//components
import CardCreate from "./CardCreate.js"
import CardListItem from "./CardListItem"

//styles
import styles from '../../styles/cardlist.module.scss'

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
    
    const [setCard] = useChangeCardMutation();

    const onLikeCard = useCallback((id, {like}) => {
        like = (like) ? false : true
        setCard({id, like});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if (isLoading){
        return <h2>Карточки загружаются</h2>
    } else if (isError){
        return <><h2>Ошибка загрузки</h2><p>{error.status}</p></>
    }

    const renderCardList = (arr) => {
        if (arr.length === 0) {
            return (
                <h2>Добавьте карточку</h2>
            )
        }
        return arr.map(({id, ...props}) => {
            return (
                <CardListItem key={id} {...props}  
                    onDelete={()=> onDelete(id)} 
                    onLikeCard={()=> onLikeCard(id, {...props})}/>
            )
        })
    }
    const elements = renderCardList(cards);

    return (   
        <ul className={styles.list}>
            {elements}
            <CardCreate/>
        </ul>
    )
}

export default CardList;