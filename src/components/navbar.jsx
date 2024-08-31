import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../context/global-context"
import logoSrc from '../assets/my-recipes-logo.png'

export default function Navbar(){

    const{searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)

    console.log(searchParam)

    return(
        <>
            <nav className="flex bg-[#FF9431] justify-between items-center mb-8 py-2 px-12 flex-col lg:flex-row gap-5 lg:gap-0">
                <img className="h-32" src={logoSrc} />
                <form onSubmit={handleSubmit}>
                    <input 
                    type='text'
                    name='search'
                    placeholder="Find your recipe"
                    className="px-12 py-4 rounded-full outline-none focus:shadow-cream"
                    value={searchParam}
                    onChange={(e)=>{
                        setSearchParam(e.target.value)
                    }}
                    />
                </form>
                <ul className="flex text-brown gap-8 text-2xl">
                    <li className="">
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favorites'>Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}