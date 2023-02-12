import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../api/Api'

const initialState = {
    loadingState: null,
    recipe: [],
}

const getRecipes = createAsyncThunk('Recipe/getRecipes', async () => {
    const recipe = await API.GetRecipe()

    return recipe.data
})

const Recipe = createSlice({
    name: 'Recipe',
    initialState,
    reducers: {},
    extraReducers: {
        [getRecipes.pending]: (state, action) => {
            state.loadingState = 'loading'
        },
        [getRecipes.rejected]: (state, action) => {
            state.loadingState = 'error'
        },
        [getRecipes.fulfilled]: (state, action) => {
            state.recipe = action.payload
            state.loadingState = 'success'
        },

    }
})

export const Recipes = {
    actions: { ...Recipe.actions, getRecipes },
    reducer: Recipe.reducer,
}