import { InfoOutlineIcon, CalendarIcon, HamburgerIcon } from '@chakra-ui/icons'
import { ItemSideBar } from '../components/index'
import BackgroundSideBar from '../img/FoodBG.jpg'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    VStack
} from '@chakra-ui/react'
const SideBar = () => {

    return (
        <VStack
            minW={{ 'md': "250px", 'lg': '350px' }}
            maxW={{ 'md': "250px", 'lg': '350px' }}
            alignItems={{ base: 'flex-start' }}
            ml={{ 'md': '15px' }}
            h={{ lg: "100%" }}
            bg="#fff"
        >
            <Box
                display={{ lg: 'none', md: 'none' }}
                w={{ base: '100%' }}
            >
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <HamburgerIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <ItemSideBar
                                icon={<InfoOutlineIcon />}
                                content="Overview"
                            />
                            <ItemSideBar
                                icon={<CalendarIcon />}
                                content="Recipes"
                            />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>

            <Box h="65%" w="100%" mt={5} display={{ base: 'none', md: 'block' }}>
                <ItemSideBar
                    icon={<InfoOutlineIcon />}
                    content="Overview"
                />
                <ItemSideBar
                    icon={<CalendarIcon />}
                    content="Recipes"
                />
            </Box>
            <Box h="55%" w="100%" display={{ base: 'none', md: 'block', lg: 'block' }} >
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