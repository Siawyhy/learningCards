import { useId, useState } from "react"
import { useAddCardMutation } from "../../store/fetchQuerySlice";


const OffConvas = ({active, setActive}) => {
    const [nameEn, setNameEn] = useState ("");
    const [nameRu, setNameRu] = useState ("");
    const [name, setName] = useState ("Example");
    const [createCard, {isError}] = useAddCardMutation();

    const onSubmitCreate = (e) => {
        e.preventDefault();
        const setCard = {
            id: useId,
            en: nameEn,
            ru: nameRu,
            like: false,
        }
        createCard(setCard).unwrap();
        if (isError) {     
        } else {
        setNameEn("");
        setNameRu("");
        setName("Example");}
    }

    return (
        <div className={active ? 'offCanvas_background_active': "offCanvas_background"} onClick={() => setActive(false)}>
            <div className="offCanvas_modal" onClick = {e => e.stopPropagation()}>
                <form onSubmit={onSubmitCreate}>
                    <div className="offCanvas_wrapper">
                        <h1>the word in English</h1>
                        <input required type="text" 
                            name="en_name" 
                            className="offCanvas_inputText" 
                            id="en" 
                            placeholder="In English"
                            value={nameEn}
                            onChange={(e) => {  setNameEn(e.target.value);
                                                setName(e.target.value);}}
                            />
                        <h1>Слово на Русском</h1>
                        <input required type="text" 
                            name="ru_name" 
                            className="offCanvas_inputText" 
                            id="ru" 
                            placeholder="По-русски"
                            value={nameRu}
                            onChange={(e) => {  setNameRu(e.target.value);
                                                setName(e.target.value)}}
                            />
                        <button type="submit" className="btn offCanvas_submit">Create</button>
                    </div>
                </form>
                <div className="card-body demo">
                    <div className='card_like'></div>
                    <div className="card-title"><h3 className="card-title-name">{name}</h3></div>
                    <div className="card_button">
                        <button className="btn card_button_item like">Edit</button>
                        <button className="btn card_button_item delete">Delete</button>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default OffConvas