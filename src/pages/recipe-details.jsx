import { useContext,useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context/global-context"
import favOn from "../assets/fav-on.png"
import favOff from "../assets/fav-off.png"

export default function RecipeDetails(){

    const params = useParams()
    const {recipeDetailsData, setRecipeDetailsData, favoritesList, handleAddToFavorites} = useContext(GlobalContext)

    console.log(params)

    useEffect(()=>{
        async function getRecipeDetails(){
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            const data = await response.json()

            if(data.meals){
                setRecipeDetailsData(data.meals[0])
            }
        } 
        getRecipeDetails()
    },[])
    if (!recipeDetailsData) {
        return <div>Loading...</div>;
    }

    const instructions = recipeDetailsData.strInstructions.split('\r\n');

    return(
        <>
            <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="row-start-2 lg:row-start-auto">
                    <div className="h-120 overflow-hidden rounded-xl group">
                        <img className="object-cover w-full h-full" src={recipeDetailsData.strMealThumb} />
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-12">
                        <h2 className="text-3xl font-semibold mr-4 ml-8">{recipeDetailsData.strMeal}</h2>
                        <button onClick={()=> handleAddToFavorites(recipeDetailsData)}>
                            <img className="h-8" src=
                            {
                                favoritesList.findIndex(item => item.idMeal === recipeDetailsData.idMeal) !== -1 ? favOn : favOff
                            } />
                        </button>
                    </div>
                    <div className="m-8 font-medium">
                        <p>Instructions:</p>
                        <ul className="list-disc list-inside">
                            {instructions.map((instruction, index) => (
                                instruction && (
                                <li key={index} className="my-2">
                                    {instruction}
                                </li>)
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}