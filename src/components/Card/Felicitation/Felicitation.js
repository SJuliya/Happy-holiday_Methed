import {textContextProvider} from "../../../context/textContextProvider";
import style from './Felicitation.module.css';
import {useContext} from "react";

const Felicitation = () => {
    const {text} = useContext(textContextProvider);

    return(
        <p className={style.felicitation}>
            {text}
        </p>
)};

export default Felicitation;