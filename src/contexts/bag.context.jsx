import { createContext, useState } from "react";

export const BagContext = createContext({
    isBagOpen:false,
    setBagOpen:()=>{}
})

export const BagProvider = ({children})=>{

    const [isBagOpen,setBagOpen] = useState(false);
    const value = {isBagOpen,setBagOpen};

    return <BagContext.Provider value={value}>{children}</BagContext.Provider>
}