import React from 'react';
import { Box, Center, Flex, Text, Button, Image, Spinner } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

export default function Init() {
    const { t } = useTranslation();

    return (
        <Box bg={'#1c1c24'} w='100%' h={['100vh', '100vh', '100vh', '100vh', '100vh', '100vh']}>
                <Flex alignItems='center' color='white' pt={['100px', '10%', '10%', '10%', '10%']} flexDirection={['column', 'row', 'row', 'row', 'row']}>
                    <Box w={['60%', '50%', '40%', '40%', '40%']} ml={['5%', '10%', '10%', '10%', '10%']}>
                        <Box textAlign='left'>
                            <Text fontSize='20px' color='purple.500'>{t("Hi")}</Text>
                            <Text fontSize={[null, null, '50px', '70px', '70px']}>{t("developer")}</Text>
                            <Text color='#7a818c'>{t("initText")}</Text>
                        </Box>
                    </Box>
                    <Center boxSize='sm' ml='100px' w={['50%', '30%', '30%', '30%', '30%']}>
                        <Image src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/imgHero.a904b4f8ece836bb3df1.png?alt=media&token=59543543-d2ab-4360-bde4-49382ee8c31f' alt='Dan Abramov' />
                    </Center>
                </Flex>
        </Box>
    )
}
