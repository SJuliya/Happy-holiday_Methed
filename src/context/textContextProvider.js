import {createContext, useContext} from "react";
import {useText} from "../hooks/useText";
import {holidaysContext} from "./holidaysContext";

export const textContextProvider = createContext({});

export const TextContextProvider = ({children}) => {
    const {holiday} = useContext(holidaysContext);
    const [text] = useText(holiday);

    return (
        <textContextProvider.Provider value={{text}}>
            {children}
        </textContextProvider.Provider>
    )
}