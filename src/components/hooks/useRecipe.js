import { useDispatch, useSelector } from 'react-redux';
import { Recipes } from '../../redux/slice/Recipe'
import { useEffect } from 'react';

const useRecipe = (reRender) => {

    const dispatch = useDispatch()

    const loadingState = useSelector(state => state.Recipe.loadingState)
    const recipeList = useSelector(state => state.Recipe.recipe)

    useEffect(() => {
        dispatch(Recipes.actions.getRecipes())
    }, [reRender])
    return {
        recipeList,
        loadingState
    }
}

export default useRecipe