import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/Section';
import { GridItem } from '../components/GridItem';

import img1 from '../public/images/dair1.png';

// FUTURE: thumbnails

const Posts = () => {
    return (
        <Layout title="Posts">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Dair on the web
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        <GridItem title="STOP">UNDER CONSTRUCTION</GridItem>
                        <GridItem title="STOP">IF YOU'RE READING THIS YOU'VE BEEN A NAUGHTY BOY</GridItem>
                        <GridItem title="my post" thumbnail={img1} href="" />
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Posts;
export { getServerSideProps } from '../components/Chakra';