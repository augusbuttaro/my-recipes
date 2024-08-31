import{useContext} from 'react'
import { GlobalContext } from '../context/global-context'
import RecipeCard from '../components/recipe-card'


export default function Favorites(){
    const {favoritesList} = useContext(GlobalContext)

    return(
        <>
            <div className="py-8 container items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    favoritesList && favoritesList.length > 0 ?
                    favoritesList.map(item => <RecipeCard item={item}/>)
                    : <p className='mx-auto text-3xl'>No favorite meals found. Click on the chef hat to add a meal to your favorites!</p>
                }
            </div>
        </>
    )
}