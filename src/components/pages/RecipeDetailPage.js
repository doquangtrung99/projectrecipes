import { Box, HStack, Stack, Input, Button, Flex, Spinner } from "@chakra-ui/react"
import { useState, useRef } from "react"
import ItemRecipe from "../ItemRecipe"
import useRecipe from '../hooks/useRecipe'
import '../../styles/scrollitem.scss'

const RecipeDetailPage = () => {
    const [search, setSearch] = useState('')
    const { loadingState, recipeList } = useRecipe(search)
    const inputRef = useRef()
    const newArray = recipeList && recipeList.filter(item => item.name.toLowerCase().includes(search))

    // const arr = []
    // const someArr = recipeList.map((element) => {
    //     return { ...element, ingredients: element.ingredients.filter((item) => item.name.toLowerCase().includes('egg')) }
    // })

    // someArr.map((item, index) => {
    //     if (item.ingredients.length > 0) {

    //         arr.push(item)

    //         if (arr.indexOf(item) >= 0) {
    //             arr.pop()
    //         }

    //         if (arr.indexOf(item) === -1) {
    //             arr.push(item)
    //         }
    //     }
    // })

    return (
        <Stack pl={5} h="100%" w="100%">
            <HStack position="sticky" top="0" >
                <Input
                    ref={inputRef}
                    placeholder="Search As Dish Name"
                    bg="#fff"
                    _focus={{ boxShadow: "none" }}
                />
                <Button onClick={() => setSearch(prev => inputRef.current.value)}>Search</Button>
                <Box>Filter</Box>
            </HStack>
            <HStack h="100%" w="100%" flexWrap="wrap" >
                {
                    loadingState !== 'loading' && newArray && newArray.length > 0 && newArray.map((item) => {
                        return (
                            <ItemRecipe
                                dish={item}
                            />
                        )
                    })
                }
                {loadingState !== 'loading' && newArray.length === 0 &&
                    <Flex flexGrow="1" fontWeight="bold" justify="center" alignItems="center" fontSize="25px">
                        There are no dishes found
                    </Flex>
                }
                {loadingState === 'loading' &&
                    <Flex justify="center" flexGrow="1">
                        <Spinner size="xl" />
                    </Flex>
                }
            </HStack>
        </Stack>

    )
}

export default RecipeDetailPage