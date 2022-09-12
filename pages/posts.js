import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/Section';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// FUTURE: thumbnails

const Posts = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000)
    }, [router])

    return (
        <Layout title="Posts">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Dair on the web
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        <span>come back another time ^.^</span>
                        {/* <GridItem title=""></GridItem>
                        <GridItem title=""></GridItem>
                        <GridItem title="my post" thumbnail={img1} href="" /> */}
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Posts;
export { getServerSideProps } from '../components/Chakra';