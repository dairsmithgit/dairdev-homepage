import Link from "next/link";
import { Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { GiBonsaiTree } from 'react-icons/gi';

import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

& img {
    transition: transform 1s ease-in-out;
}

&:hover img {
    transform: scaleX(2);
    transition: transform 1s ease-in-out;
}
`

const Logo = () => {
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Icon as={GiBonsaiTree} />
                    {/* <Image src={cloudsImg} width={30} height={20} alt="logo" /> */}
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='Montserrat'
                        fontWeight="bold"
                        ml={2}
                        letterSpacing="normal">
                        Dair Smith
                    </Text>
                </LogoBox>
            </a>
        </Link>
    );
}

export default Logo;