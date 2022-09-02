import { Container, Badge, Link, List, ListItem, AspectRatio } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, workImage, Meta } from '../../components/Project';
import P from '../../components/Paragraph';
import Layout from '../../components/layouts/article';

const Project = () => {
    return (
        <Layout title="Toro Inoue Station">
            <Container>
                <Title>
                    Toro Inoue Station <Badge>2022</Badge>
                </Title>
                <P>
                    Google Chrome extension to view a dashboard of the fictional "Toro Inoue Train Station" featuring Toro Inoue from Doko Demo Issyo. Created with the goal of using some Javascript features/objects I was not familiar with.  Responsive desktop, mobile, and widget screen size design.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web / Chrome</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript, axios</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project;
export { getServerSideProps } from '../../components/Chakra';