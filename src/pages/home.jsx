import { useContext } from "react"
import { GlobalContext } from "../context/global-context"
import RecipeCard from '../components/recipe-card'



export default function Home(){
    const {recipeList, loading} = useContext(GlobalContext)

    if(loading) return <p>Loading, please wait...</p>

    return(
        <>
            <div className="py-8 container items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    recipeList && recipeList.length > 0 ?
                    recipeList.map(item => <RecipeCard item={item}/>)
                    : <p className="mx-auto text-3xl">No meals found. Start searching above!</p>
                }
            </div>
        </>
    )
}