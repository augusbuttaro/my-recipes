import { Link } from "react-router-dom"

export default function RecipeCard({item}){
    return(
        <div className="flex bg-brown mx-auto text-cream flex-col rounded-lg w-80 overflow-hidden p-5">
            <div className="h-40 flex justify-center overflow-hidden items-center">
                <img src={item.strMealThumb} alt='recipe' className="block w-full" />
            </div>
            <div>
                <h2 className="text-2xl font-medium my-4">{item.strMeal}</h2>
                <Link className='p-2 hover:bg-orange hover:duration-300 bg-cream text-brown px-4 rounded-lg' to={`/recipe/${item.idMeal}`}>Recipe Details</Link>
            </div>
        </div>
    )
}