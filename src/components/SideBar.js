import { Box, VStack } from '@chakra-ui/react'
import { InfoOutlineIcon, SettingsIcon, CalendarIcon, StarIcon, AtSignIcon } from '@chakra-ui/icons'
import { ItemSideBar } from '../components/index'
import BackgroundSideBar from '../img/FoodBG.jpg'

const SideBar = () => {

    return (
        <VStack
            minW="350px"
            h="100%"
            bg="#fff"
        >
            <Box h="65%" w="100%" mt={5}>
                <ItemSideBar
                    icon={<InfoOutlineIcon />}
                    content="Overview"
                />
                <ItemSideBar
                    icon={<CalendarIcon />}
                    content="Recipes"
                />
            </Box>
            <Box h="55%" w="100%" >
                <img
                    src={BackgroundSideBar}
                    alt="bgsidebar"
                    style={{ objectFit: "cover", height: "100%", width: "100%" }}
                />
            </Box>
        </VStack>
    )
}

export default SideBar