import {useContext} from "react";
import {imgContextProvider} from "../../../context/imgContextProvider";

const ImageCard = (props) => {
    const img = useContext(imgContextProvider);
    return (
        <img src={props.img} alt="Фон открытки" width={840} height={520}/>
    )
};

export default ImageCard;