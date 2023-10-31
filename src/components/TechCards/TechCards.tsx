import React, { useState } from 'react';
import { Box, Image, Text } from "@chakra-ui/react";

interface TechCardsProps {
  imageUrl: string;
  altText: string;
  labelText: string;
}

function TechCards({ imageUrl, altText, labelText }: TechCardsProps) {
  const [showText, setShowText] = useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <Image
        className="grow"
        m="30px"
        h={["80px", "90px", "90px", "90px", "90px"]}
        src={imageUrl}
        alt={altText}
        mb="45px"
      />
      <Text
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        textAlign="center"
        color="white"
        fontSize="18px"
        padding="5px"
        opacity={showText ? 2 : 0}
        transition="opacity 0.4s"
        pointerEvents={showText ? 'auto' : 'none'}
      >
        {labelText}
      </Text>
    </Box>
  );
}

export default TechCards;
