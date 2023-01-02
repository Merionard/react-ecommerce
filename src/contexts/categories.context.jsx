import { createContext, useState,useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categories:{}
})

export const CategoriesProvider = ({children})=>{
    const[categories,setCategories] = useState({});
    const value = {categories};

    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments();
            setCategories(categoryMap);
        }

        getCategoriesMap();
    },[]);

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}