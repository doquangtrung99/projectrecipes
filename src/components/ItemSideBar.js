import { Box, Flex, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ItemSideBar = ({ icon, content }) => {

    const navigate = useNavigate()
    return (
        <Flex
            mt={8}
            w="100%"
            pt={2}
            pb={2}
            _hover={{ bg: "tomato" }}
            cursor="pointer"
            justify="center"
            onClick={() => navigate(`/${content.toLowerCase().replace(/ /g, '')}`, { replace: true })}
        >
            <HStack w="80%" fontFamily="cursive" >
                <Box
                    fontWeight="bold"
                >
                    {icon}
                </Box>
                <Box
                    pl={5}
                    fontWeight={window.location.pathname.slice(1) === content.toLowerCase().replace(/ /g, '') ? "bold" : ""}
                >
                    {content}
                </Box>
            </HStack>
        </Flex>
    )
}

export default ItemSideBar