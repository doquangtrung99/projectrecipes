import { Box, Button, HStack, VStack, Text } from "@chakra-ui/react"
import imgExcess from '../img/download.jpg'
import { useState } from "react"
import '../styles/overwrite.scss'
export const ItemIngredient = ({ img, content, BG }) => {

    return (
        <VStack
            className="overwrite"
            maxW="80px"
            textAlign="center"
            bg={BG ? "yellow.300" : "pink"}
            justify="center"
            alignItems="center"
            borderRadius="10px"
            maxH="100px"
            h="100px"
        >
            <Box display="flex" justifyContent="center" pt={2} w="80px" maxW="80px" height="58px">
                {!BG ?
                    <img
                        src={img}
                        style={{ width: "80%", height: "100%" }}
                    />
                    :
                    <img
                        src={img}
                        style={{ width: "80%", height: "58px" }}
                    />
                }


            </Box>
            <Box>
                {content.charAt(0).toUpperCase() + content.slice(1)}
            </Box>
        </VStack>
    )
}


const ItemRecipe = ({ dishData, dish }) => {

    const [isShow, setIsShow] = useState(false)

    return (
        <VStack
            minW="280px"
            maxW="280px"
            bg="#fff"
            borderRadius="25px"
            minH="378px"
            maxH="380px"
            overflowY="auto"
            overflowX="hidden"
            className="overwrite"
        >
            {!isShow ?
                <>

                    <VStack w="100%">
                        <HStack justify="flex-start" w="100%" pl={3} pb={3} mb={2}>
                            <Box maxW="80px" height="70px" maxH="80px" mt={4}>
                                <img
                                    src={dishData ? dishData.imgUrl : dish.imgUrl}
                                    alt="img1"
                                    style={{
                                        width: "100%",
                                        height: '100%'
                                    }}
                                />
                                <Text fontWeight="bold" minW="200px"  >Ingredients</Text>
                            </Box>
                            <VStack>
                                <Text>
                                    {dishData && dishData.name}
                                    {dish && dish.name}
                                </Text>
                                <Text>
                                    {dishData && dishData.calories}
                                    {dish && dish.calories}
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>
                    <HStack minH="200px" maxH="210px" overflow="auto" flexWrap="wrap" justify="flex-start" pl={3} gap={2} >
                        {dishData && dishData.ingredients.map((item, index) => {
                            if (index < 5) {
                                return (
                                    <ItemIngredient
                                        img={item.imgUrl}
                                        content={item.name}
                                    />
                                )
                            } else if (index === 6) {
                                return (
                                    <ItemIngredient
                                        BG={true}
                                        img={imgExcess}
                                        content={`+ ${dishData.ingredients.length - 5} more`}
                                    />
                                )
                            }
                        })}
                        {
                            dish && dish.ingredients.map(item => {
                                return (
                                    <ItemIngredient
                                        img={item.imgUrl}
                                        content={item.name}
                                    />
                                )
                            })
                        }
                    </HStack>
                    <HStack justifyContent="space-between" w="100%" pl={3} pr={5} pb={2}>
                        <Button
                            bg="orange.300"
                            borderRadius="25px"
                            p={2}
                            cursor="pointer"
                            _hover={{ bg: "orange" }}
                            onClick={() => setIsShow(prev => !prev)}
                        >
                            See tutorials
                        </Button>
                        <Box>Steps {dishData ? dishData.recipes.length : dish.recipes.length} </Box>
                    </HStack>
                </>
                :
                <VStack pl={5} pt={5} >
                    {dishData && dishData.recipes.length > 0 && dishData.recipes.map(item => {
                        return (
                            <Box>
                                <Text fontWeight="bold">
                                    {item.step}
                                </Text>
                                {item.content}
                            </Box>
                        )
                    })}
                    {dish && dish.recipes.length > 0 && dish.recipes.map(item => {
                        return (
                            <Box>
                                <Text fontWeight="bold">
                                    {item.step}
                                </Text>
                                <Box>
                                    {item.content}
                                </Box>
                            </Box>

                        )
                    })}
                    <Button
                        bg="orange.300"
                        borderRadius="25px"
                        p={2}
                        minW="150px"
                        cursor="pointer"
                        _hover={{ bg: "orange" }}
                        onClick={() => setIsShow(prev => !prev)}
                    >
                        Back
                    </Button>
                </VStack>
            }
        </VStack>
    )
}
export default ItemRecipe