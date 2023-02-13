import { useDispatch, useSelector } from 'react-redux';
import { Recipes } from '../../redux/slice/Recipe'
import { useEffect } from 'react';

const useRecipe = (reRender, filterOptions) => {

    const dispatch = useDispatch()

    const loadingState = useSelector(state => state.Recipe.loadingState)
    const recipeList = useSelector(state => state.Recipe.recipe)

    useEffect(() => {
        dispatch(Recipes.actions.getRecipes())
    }, [reRender, filterOptions])
    return {
        recipeList,
        loadingState
    }
}

export default useRecipe