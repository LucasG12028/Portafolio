import React, { Suspense } from 'react';
import { Box, Flex, Center, Divider, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Spinner } from '@chakra-ui/react';

function AboutMe() {
    const { t } = useTranslation();

    return (
        <Suspense fallback={
            <Center height="100vh">
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='purple.500'
                    size='xl'
                />
            </Center>}>

            <Box bg='#050402' h={['100%', '100%', '100%', '100vh', '100vh', '100vh']} w='100%' color='white' >
                <Center color='purple.500' fontSize='30px'> </Center>
                <Box p='5%'>
                    <Flex flexWrap="wrap" mt='100px'>
                        <Center pb='75px' w={['90%', '80%', '40%', '40%', '40%']} mr={['20px', '40px', '20px', '0px', '0px']} >

                                <Image borderRadius='20px' h='380px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/cv%20foto.jpeg?alt=media&token=fb8a21d5-4eae-4d16-9f60-4996e3a15fd9' alt='Lucas' />
                            
                        </Center>
                        <Box w={['80%', '80%', '60%', '60%', '60%', '50%']}>
                            <Text fontSize='30px'> {t("Grettings")} </Text>
                            <Flex direction='column' ml='10px'>
                                <Text>{t('age')}: 25</Text>
                                <Text>{t('adress')}: Neuquén, Argentina</Text>
                                <Text>Email: gimenezlucasivan98@gmail.com</Text>
                            </Flex>
                            <Divider mt='10px' mb='10px' />
                            <Text mt='5px' color='purple.500'>Full Stack Developer</Text>
                            <Divider mt='10px' mb='10px' />
                            <Text ml='10px'> {t('description')}</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Suspense>
    );
}

export default AboutMe;
{/* 
                <Center height="100vh">
                    <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                        color='purple.500'
                        size='xl'
                    />
                </Center> 
            */}