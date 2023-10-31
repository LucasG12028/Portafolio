import React from 'react';
import { Box, Flex, Center, Spinner, } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';
import "./technologies.css"
import TechCards from '../TechCards/TechCards';

export default function Technologies() {

    const { t } = useTranslation();

    return (
        <Box bg='#050402' w={['100%', '100%', '100%', '100%', '100%']}>

            <Center pt='30px' color='purple.500' fontSize='30px'> </Center>
            <Box p='50px'>

                <Flex flexWrap="wrap" mb={['100px', '0', '0', '0', '0']}>

                </Flex>
                <Center p={['10px', '40px', '80px', '100px', '100px']} w={['100%', '100%', '100%', '100%', '100%']} >
                    <Flex direction='column'  >
                        <Center color='purple.500' fontSize='35px'>{t("tecnologies")}</Center>
                        <Center flexWrap="wrap">

                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/css.png?alt=media&token=424ecde8-008e-4a2e-ad1e-0d1ea9377c20"
                                altText="css"
                                labelText="css"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/redux.png?alt=media&token=a1b5dd9d-99a9-4436-9aee-f9fe6442df94"
                                altText="redux"
                                labelText="Redux"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/react.png?alt=media&token=76e566dd-b8e2-4394-bc36-10ada57c329a"
                                altText="react"
                                labelText="React"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/mongo.png?alt=media&token=0d7dfb49-bdb2-4d47-bb9e-08bf2f5a1de5"
                                altText="mongoDB"
                                labelText="MongoDB"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/nextjs.png?alt=media&token=cbd4b5fa-f056-4e4f-a9d7-9ee3967057a4"
                                altText="nextjs"
                                labelText="Next.js"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/boostrap.png?alt=media&token=12dd2cb8-3f47-4dea-bc52-adfc621b9509"
                                altText="bootstrap"
                                labelText="Bootstrap"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/chakra.png?alt=media&token=7ba5617a-49bc-4ae0-9aac-9ebe491d9c4e"
                                altText="chakraUI"
                                labelText="Chakra UI"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/html5.png?alt=media&token=26d0e53f-bc81-4b1e-876d-0ed26eb9aad9"
                                altText="html5"
                                labelText="HTML5"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/pfadmin.png?alt=media&token=23291cae-b140-4db3-ae47-2749c0900c7a"
                                altText="PostgreSQL"
                                labelText="PostgreSQL"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/jss.png?alt=media&token=b5f333bd-8a08-42d2-9067-a6ca5a834d72"
                                altText="js"
                                labelText="JavaScript"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/git.png?alt=media&token=af0504d4-c800-4989-9b7d-f666fb9ea3f5"
                                altText="git"
                                labelText="Git"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/java.webp?alt=media&token=0592422a-6f0b-4f38-bb33-f392f8e33c6a"
                                altText="java"
                                labelText="Java"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/js.png?alt=media&token=3aabf096-980b-4b56-b805-0ce3bafe10b4"
                                altText="nodeJS"
                                labelText="Node.js"
                            />
                            <TechCards
                                imageUrl="https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/arduino.png?alt=media&token=12bcd0b3-3b10-442c-9b1f-8fb3469cf1e1"
                                altText="arduino"
                                labelText="Arduino"
                            />
                        </Center>
                    </Flex>
                </Center>
            </Box>
        </Box>
    )
}