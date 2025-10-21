import { Children, createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../libs/axios";

export const AppContext = createContext();


export const AppContextProvider = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [posts, setPosts] = useState([])
    
    const fetchPosts = async() => {
        const datas = await api.get('/posts')
        setPosts(datas.data)
    }









    useEffect(() => {
        fetchPosts()
    }, [location.key])


    const value = {navigate, posts, setPosts}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}