import React, { useEffect, useState } from 'react'
import Loading from '../culinary/Loading'
import RecipeCard from '../culinary/RecipeCard'
import { fetchRecipes } from '../../assets/culinary/utils/index'
import Button from '../culinary/Button'
import RecipeItems from './RecipeItems'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('Vegan')
    const [limit, setLimit] = useState(30)
    const [loading, setLaoding] = useState(false)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const fetchRecipe = async () => {
        try {
            const data = await fetchRecipes({ query, limit })

            setRecipes(data)

            setLaoding(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLaoding(false)
        }
    }

    const showMore = () => {
        setLimit(prev => prev + 10)
        fetchRecipe()
    }

    useEffect(() => {
        setLaoding(true)

        fetchRecipe()

    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div className='w-full'>
            {
                recipes?.length > 0 ? (
                    <>
                        <div className='w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                            {
                                recipes?.map((item, index) => (
                                    <RecipeCard recipe={item} key={index} />))
                            }
                        </div>

                        <div className='flex w-full items-center justify-center py-10'>

                            <Button
                                title="Show More"
                                containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
                                handleClick={showMore}
                            />
                        </div>
                    </>
                ) : <div className='text-white w-full items-center justify-center py-10'>
                    <RecipeItems/>
                </div>
            }
        </div>
    )
}

export default Recipes