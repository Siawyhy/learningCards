//libraries

//mine
import { useGetCardsQuery } from "../../store/fetchQuerySlice";

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
                <CardListItem key={id} {...props}/>
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