//libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

//mine
import { fetchCards } from "../../store/cardsSlice";

//components
import CardCreate from "./CardCreate.js"
import CardListItem from "./CardListItem"


const CardList = () => {

    const cards = useSelector(state => state.cards.cards);
    const cardsLoadingStatus = useSelector(state => state.cards.cardsLoadingStatus)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards())
        //eslint-disable-next-line
    },[]);

    if (cardsLoadingStatus === "loading"){
        return <h1>Карточки загружаются</h1>
    } else if (cardsLoadingStatus === "error"){
        return <><h1>Ошибка загрузки</h1><p>Т_Т</p></>
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

    // const card = [
    //     {id:1, en:"Ilya", ru:"какашка", like:false},
    //     {id:2, en:"blade", ru:"меч", like: true},
    //     {id:3, en:"flame", ru:"пламя", like:false},
    //     {id:4, en:"bug", ru:"жук", like:false},
    //     {id:5, en:"туалет", ru:"Какать", like:true},
    //     {id:6, en:"протон", ru:"цифара", like:false},
    //     {id:7, en:"вапва", ru:"цвапра", like:false},
    //     {id:8, en:"2122в", ru:"цифывфа", like:false},
    //     {id:10, en:"Пук", ru:"првь", like:false},
    //     {id:11, en:"2пп3", ru:"цапрапр", like:false},
    //     {id:12, en:"2фыв5", ru:"фпва", like:false},
    //     {id:13, en:"2иеи6", ru:"фывфара", like:false},
    //     {id:14, en:"2121241241241247sadasdasda", ru:"цифывф", like:false},
    //     {id:15, en:"П3а3п", ru:"Кыфвь", like:false},
    // ]npx 