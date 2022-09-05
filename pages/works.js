import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/Section";
import { WorkGridItem } from "../components/GridItem";
import Layout from "../components/layouts/article";

import thumbInspo from '../public/images/works/inspo_eyecatch.png';
import thumbInoue from '../public/images/works/inoue_eyecatch.png';

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="inspo" title="Inspo" thumbnail={thumbInspo}>
                            A social-media-like feed for images that inspire and inform my work.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="inouestation" title="Inoue Station" thumbnail={thumbInoue}>
                            Google Chrome extension to view a dashboard for the fictional "Toro Inoue Train Station".
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works;
export { getServerSideProps } from '../components/Chakra';