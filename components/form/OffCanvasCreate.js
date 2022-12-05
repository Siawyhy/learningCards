import { useId, useState } from "react"
import { useAddCardMutation } from "../../store/fetchQuerySlice";

import style from "../../styles/card.module.scss"
import styleModal from '../../styles/modal.module.scss'


const OffConvas = ({active, setActive, en, ru, like=false}) => {
    const [nameEn, setNameEn] = useState (en);
    const [nameRu, setNameRu] = useState (ru);
    const [name, setName] = useState ( en || ru || "Example" );
    const [createCard, {isError}] = useAddCardMutation();


    const onSubmitCreate = (e) => {
        e.preventDefault();
        const setCard = {
            id: useId,
            en: nameEn,
            ru: nameRu,
            like: like,
        }
        createCard(setCard).unwrap();
        if (isError) {     
        } else {
        setNameEn("");
        setNameRu("");
        setName("Example");}
    }

    return (
        <div className={active ? styleModal.background_active: styleModal.background} onClick={() => setActive(false)}>
            <div className={styleModal.modal} onClick = {e => e.stopPropagation()}>
                <form onSubmit={onSubmitCreate}>
                    <div className={styleModal.wrapper}>
                        <label className={styleModal.label}>The word in English</label>
                        <input required type="text" 
                            name="en_name" 
                            className={styleModal.inputText} 
                            id="en" 
                            placeholder="In English"
                            value={nameEn}
                            autoComplete="off"
                            pattern="[A-z 0-9]{1,25}"
                            onChange={(e) => {
                                setNameEn(e.target.value);
                                setName(e.target.value)}}
                            />
                        <label className={styleModal.label}>Слово на Русском</label>
                        <input required type="text" 
                            name="ru_name" 
                            className={styleModal.inputText}
                            id="ru" 
                            placeholder="По-русски"
                            autoComplete="off"
                            pattern="[А-я 0-9]{1,25}"
                            value={nameRu}
                            onChange={(e) => {
                                setNameRu(e.target.value);
                                setName(e.target.value)}}
                            />
                        {/* <input type="checkbox"/> */}
                        <button type="submit" className={`btn ${styleModal.submit}`}>Create</button>
                    </div>
                </form>
                <div className={`${style.body} ${style.demo}`}>
                    <div className={style.blur_wrapper}>
                        <div className={style.blur_active}></div></div>
                    <div className={style.like_demo}></div>
                    <div className={style.title}><h3 className={style.title_name_demo}>{name}</h3></div>
                    <div className={style.button}>
                        <button className={`btn ${style.button_item} ${style.edit} ${style.demo}`}>Edit</button>
                        <button className={`btn ${style.button_item} ${style.delete} ${style.demo}`}>Delete</button>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default OffConvas