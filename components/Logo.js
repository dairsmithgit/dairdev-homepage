import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from '@chakra-ui/react';

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
    const cloudsImg = `/images/clouds${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={cloudsImg} width={30} height={20} alt="logo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={2}>
                        Dair Smith
                    </Text>
                </LogoBox>
            </a>
        </Link>
    );
}

export default Logo;