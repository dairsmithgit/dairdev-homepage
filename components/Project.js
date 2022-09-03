import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => {
    return (
        <Box>
            <NextLink href="/works">
                <Link>Works</Link>
            </NextLink>
            <span>
                &nbsp;
                <ChevronRightIcon />
                &nbsp;
            </span>
            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    )
}

export const WorkImage = ({ src, alt }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" mb={4}>
            <Image borderRadius="lg" w="full" src={src} alt={alt} />
        </Box>
    )
}

export const Meta = ({ children }) => {
    return (
        <Badge colorScheme="green" mr={2}>
            {children}
        </Badge>
    )
}