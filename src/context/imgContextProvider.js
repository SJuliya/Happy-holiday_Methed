import {createContext, useState} from "react";

export const imgContextProvider = createContext({});

export const ImgContextProvider = ({children}) => {
    const [img, setImg] = useState();
    return (
        <imgContextProvider.Provider value={{img, setImg}}>
            {children}
        </imgContextProvider.Provider>
    )
}