import { HStack, Stack, Input, Button, Flex, Spinner, Box } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState, useRef, useEffect } from "react"
import ItemRecipe from "../ItemRecipe"
import useRecipe from '../hooks/useRecipe'
import '../../styles/scrollitem.scss'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
const RecipeDetailPage = () => {
    const [search, setSearch] = useState('')
    const [filterOptions, setFilterOptions] = useState()
    const { loadingState, recipeList } = useRecipe(search, filterOptions)
    const [arr, setArr] = useState([])
    const inputRef = useRef()
    const focusRef = useRef()
    let newArray = recipeList && recipeList.filter(item =>
        filterOptions ?
            filterOptions === 'Ingredients < 6' ? item.ingredients.length < 6 : item.recipes.length > 4
            :
            item.name.toLowerCase().includes(search))

    const handleFilter = (e) => {
        switch (e.target.innerText) {
            case "Ingredients < 6":
                setArr(prev => [])
                setFilterOptions(prev => e.target.innerText)
                break;
            case "Tutorial steps > 4":
                setArr(prev => [])
                setFilterOptions(prev => e.target.innerText)
                break;
            case "Ingredients includes":
                const someArr = recipeList.map((element) => {
                    return { ...element, ingredients: element.ingredients.find((item) => item.name.toLowerCase().includes(focusRef.current.value)) ? element.ingredients : [] }
                })

                const arrFilter = someArr.filter(item => item.ingredients.length > 0)

                setArr(prev => arrFilter)
                break;
            default:
                break;
        }
    }

    useEffect(() => {

        const element = document.querySelector('.over')

        const checkScrollDirection = (event) => {
            if (checkScrollDirectionIsUp(event)) {
                document.getElementById("head").style.top = "0px";

            } else {
                document.getElementById("head").style.top = "-50px";
            }
        }

        function checkScrollDirectionIsUp(event) {
            if (event.wheelDelta) {
                return event.wheelDelta > 0;
            }
            return event.deltaY < 0;
        }

        element.addEventListener('wheel', checkScrollDirection)
    }, [])


    return (
        <Stack
            className="over"
            pl={5}
            h="100%"
            w="100%"
            overflowY="auto"
            overflowX="hidden"
        >
            <HStack position="sticky" w="100%" top="0" zIndex="999" id="head"  >
                <Input
                    ref={inputRef}
                    placeholder="Search As Recipe Name"
                    bg="#fff"
                    _focus={{ boxShadow: "none" }}
                />
                <Button onClick={() => {
                    setArr(prev => [])
                    setFilterOptions('')
                    setSearch(prev => inputRef.current.value)
                }}>
                    Search
                </Button>
                <Menu >
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon ml={{ 'md': '30px', 'lg': '10px', base: '30px' }} />}>
                        Filter
                    </MenuButton>
                    <MenuList onClick={(e) => handleFilter(e)}>
                        <MenuItem fontWeight="bold">Ingredients &lt; 6</MenuItem>
                        <MenuItem fontWeight="bold">Tutorial steps &gt; 4</MenuItem>
                        <MenuItem
                            fontWeight="bold"
                        >
                            <Box onMouseOver={() => {
                                focusRef.current.focus()
                            }}>
                                Ingredients includes<Input name="input" ref={focusRef} bg="#fff" size="sm" ml={2} maxW="100px" />
                            </Box>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
            <HStack
                h="100%"
                w="100%"
                flexWrap="wrap"
                gap={2}
                pt={{ base: '20px' }}
                justifyContent={{ lg: 'normal', sm: 'center' }}
                justifyItems={{ md: 'flex-start' }}
            >
                {
                    loadingState !== 'loading' && arr.length <= 0 && newArray && newArray.length > 0 && newArray.map((item) => {
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
                    <Flex flexDirection="column" alignItems="center" flexGrow={1}>
                        <Spinner size="xl" />
                        <Box fontWeight="bold">Loading ...</Box>
                    </Flex>
                }
                {
                    arr && arr.length > 0 && arr.map(item => {
                        return (
                            <ItemRecipe
                                dish={item}
                            />
                        )
                    })
                }
            </HStack>
        </Stack>

    )
}

export default RecipeDetailPage