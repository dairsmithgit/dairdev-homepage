import NextLink from "next/link";
import { Button, Container, Box, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import { BioSection, BioYear } from "../components/Bio";

const Page = () => {
    return <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p="3" mb="6" align="center">
            Hello, I&apos;m a full-stack developer based in Texas!
        </Box>

        <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Dair Smith
                </Heading>
                <p>Living Digitally ( Developer / Designer / Artist )</p>
            </Box>
            <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/dair1.png" alt="Profile Image" />
            </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>Dair is a full-stack web developer based in Austin, TX with a passion for building fun, modern web apps that inspire others. He has a keen eye for good design and enjoys learning new technology to ceaselessly improve his skills in the web world. When not online, he takes inspiration from music, photography, and the natural world to inspire his work. Dair is currently looking for full-time work as a web developer in front-end, back-end, or full-stack teams.</Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My Portfolio
                    </Button>
                </NextLink>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title" >
                Bio
            </Heading>
            <BioSection>
                <BioYear>1997</BioYear>
                Born in Portland, Oregon.
            </BioSection>
            <BioSection>
                <BioYear>2019</BioYear>
                hello world! Wrote first line of code.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Completed full-stack web developer bootcamp at Grand Circus in Detroit, MI. Learning MERN stack, git, and more.
            </BioSection>
            <BioSection>
                <BioYear>2022</BioYear>
                Moved to Austin, TX.
            </BioSection>
            <BioSection>
                <BioYear>Present</BioYear>
                Learning everyday.
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I ♥
            </Heading>
            <Paragraph>
                Art, Music, Gaming, Making Beats, Photography, Creative Coding
            </Paragraph>
        </Section>
    </Container>
}

export default Page;