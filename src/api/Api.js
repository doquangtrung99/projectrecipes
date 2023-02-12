import axios from './config'

export default class API {

    static GetRecipe = () => axios.get('recipes')
    static CreateRecipe = (data) => axios.post('recipes', data)
}