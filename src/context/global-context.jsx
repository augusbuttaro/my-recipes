import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){

    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] =  useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const [favoritesList, setFavoritesList] = useState([])

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`)
        const data = await res.json()
        if(data.meals){
            setRecipeList(data.meals)
            setLoading(false)
            setSearchParam('')
            navigate('/')
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
        setSearchParam('')
      }
    }

    function handleAddToFavorites(getCurrentRecipe){
        console.log(getCurrentRecipe)
        let copyFavoritesList = [...favoritesList]
        const index = copyFavoritesList.findIndex(item => item.idMeal === getCurrentRecipe.idMeal)

        if(index === -1){
            copyFavoritesList.push(getCurrentRecipe)
        }else{
            copyFavoritesList.splice(index)
        }

        setFavoritesList(copyFavoritesList)
    }

    console.log(favoritesList, 'favList')

    return  <GlobalContext.Provider 
    value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorites,
        favoritesList
        }}>
                {children}
            </GlobalContext.Provider>;
}0