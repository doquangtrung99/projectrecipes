import { Box, Flex } from '@chakra-ui/react'
import { SideBar, OverViewPage } from '../components/index'

const Default = ({ component }) => {
    return (
        <Flex
            w="100vw"
            h="100vh"
            justify="center"
            alignItems="center"
            overflowX="hidden"
        >
            <Flex
                h="90%"
                w="90%"
                bg="#FFC0CB"
                justify="center"
                alignItems="center"
                borderRadius="35px"
            >
                <Flex
                    w="100%"
                    h="100%"
                    maxH="80vh"
                    maxW="1200px"
                >
                    <SideBar />
                    <Box
                        flexGrow={1}
                        h="100%"
                        overflowY="auto"
                        overflowX="hidden"
                    >
                        {component}
                    </Box>
                </Flex>
            </Flex>

        </Flex>
    )
}

export default Default