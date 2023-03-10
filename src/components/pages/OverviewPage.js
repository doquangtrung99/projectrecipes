import { Flex, Box, VStack, HStack, Text, Spinner } from "@chakra-ui/react"
import { ItemRecipe } from '../index'
import bannerFood from '../../img/bannerFood.jpg'
import '../../styles/overview.scss'
import { useNavigate } from "react-router-dom"
import useRecipe from '../hooks/useRecipe'
import food from '../../img/food.jpg'
import food1 from '../../img/food1.jpg'

const OverViewPage = () => {

    const navigate = useNavigate()
    const { loadingState, recipeList } = useRecipe()

    return (
        <Flex
            height="100%"
        >
            <VStack
                w={{ base: "100%", md: "97%", lg: "70%" }}
                h="100%"
                bg="#E0E0E0"
            >
                <VStack w="100%" h="35%">
                    <Box
                        mt={5}
                        w="100%"
                        maxW="565px"
                        h="100%"
                        position="relative"
                        cursor="pointer"
                        overflow="hidden"
                        borderRadius="35px"
                        onClick={() => navigate('/recipes', { replace: true })}
                    >
                        <img
                            className="banner"
                            src={bannerFood}
                            alt="bannerFood"
                        />
                        <Text
                            position="absolute"
                            top={{ base: "0", md: "5", lg: "0" }}
                            right="35%"
                            fontWeight="bold"
                            fontSize={{ base: "25px", md: "28px", lg: "28px" }}
                            wordBreak="break-word"
                            pointerEvents="none"
                            w="100px"
                        >
                            See All Of Recipes
                        </Text>
                    </Box>
                    <Text
                        fontWeight="bold"
                        fontSize="20px"
                    >Based on the type of food you like
                    </Text>
                </VStack>
                <HStack
                    h="100%"
                    w={{ base: "100%", lg: "auto" }}
                    flexDirection={{ base: 'column', lg: "column", xl: 'row' }}
                    gap={2}
                    overflowY="auto"
                    className="overwrite"
                >
                    {
                        loadingState !== 'loading' && recipeList && recipeList.length > 0 && recipeList.map((item, index) => {
                            if (index < 2) {
                                return (
                                    <ItemRecipe
                                        dishData={item}
                                    />
                                )
                            }
                        })
                    }
                    {
                        loadingState === 'loading' &&
                        <Flex flexDirection="column" alignItems="center" >
                            <Spinner size="xl" />
                            <Box fontWeight="bold">Loading ...</Box>
                        </Flex>

                    }
                </HStack>
            </VStack>
            <VStack
                w="30%"
                h="100%"
                bg="#fff"
                display={{ base: 'none', md: 'none', lg: 'block' }}
            >
                <Box
                    backgroundImage={food}
                    height="40%"
                    w="100%"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                />
                <Box
                    backgroundImage={food1}
                    height="60%"
                    w="100%"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                />
            </VStack>
        </Flex >
    )
}

export default OverViewPage