import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { SiLinkedin } from "react-icons/si";
import {
    Box, Link, Select, Flex, HStack, Text, Tabs, TabList, Tab,
    Menu, MenuList, MenuButton, MenuItem, IconButton, Button
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { Show, Hide } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function NavBar() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    console.log(t('home'));

    useEffect(() => {
        console.log('Language changed:', i18n.language);
    }, [i18n.language]);

    function changeLang(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value)
        i18n.changeLanguage(e.target.value);
    }

    return (
        <HStack position='fixed' w='100%' zIndex='20' color='white' bg='#131419'>
            <Hide above='md'>
                <Box w={'12%'}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<GiHamburgerMenu />}
                            variant='outline'
                            colorScheme='purple'
                        />
                        <MenuList >
                            <MenuItem color={'black'} onClick={() => navigate('/init')}>
                                Init
                            </MenuItem>
                            <MenuItem color={'black'} onClick={() => navigate('/about')}>
                                About Me
                            </MenuItem>
                            <MenuItem color={'black'} onClick={() => navigate('/technologies')}>
                                Technologies
                            </MenuItem>
                            <MenuItem color={'black'} onClick={() => navigate('/contact')}>
                                Contact Me
                            </MenuItem>
                            <MenuItem color={'black'} onClick={() => navigate('/portfolio')}>
                                Portfolio
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Hide>

            <Flex alignItems='center' w={[null, null, '25%', '25%', '30%', '33%']} >
                <Text as='u' w='70%' pl={['10px', '10px', '10px', '10px', '10px']} fontSize={[null, null, '20px']}>Lucas Iván Giménez</Text>
                <Box ml='10px' mr='10px'>
                    <Link href='https://www.linkedin.com/in/lucas-gim%C3%A9nez-226b3122b/' isExternal>
                        <SiLinkedin size='30px' />
                    </Link>
                </Box>
                <Box>
                    <Link href='https://github.com/LucasG12028' isExternal>
                        <DiGithubBadge size='42px' />
                    </Link>
                </Box>
            </Flex>
            <Show above='md'>
                <Tabs w={[null, null, '70%', '50%', '40%', '40%']} display='flex' justifyContent='center' >
                    <TabList w='100%'>
                        <Tab w={'20%'} _selected={{ color: 'white', bg: 'purple.500' }} onClick={() => navigate('/init')} >{t('home')}</Tab>
                        <Tab w={'20%'} _selected={{ color: 'white', bg: 'purple.500' }} onClick={() => navigate('/about')}>{t('aboutMe')}</Tab>
                        <Tab w={'20%'} _selected={{ color: 'white', bg: 'purple.500' }} onClick={() => navigate('/technologies')} >{t('tecnologies')}</Tab>
                        <Tab w={'20%'} _selected={{ color: 'white', bg: 'purple.500' }} onClick={() => navigate('/portfolio')} >{t('portafolio')}</Tab>
                        <Tab w={'20%'} _selected={{ color: 'white', bg: 'purple.500' }} onClick={() => navigate('/contact')} >{t('contactMe')}</Tab>
                    </TabList>
                </Tabs>
            </Show>
            <Flex justifyContent="flex-end" w={[null, null, '15%', '25%', '30%', '30%']}>
                <Box>
                    <Select onChange={(e) => changeLang(e)} value={i18n.language} color="black" bg="white" height="30px" width="70px" marginRight="20px">
                        <option value="en">en</option>
                        <option value="es">es</option>
                    </Select>
                </Box>
            </Flex>
        </HStack >
    );
}

export default NavBar;