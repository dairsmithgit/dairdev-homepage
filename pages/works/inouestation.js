import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/Project';
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
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/dairsmithgit/passengerapp'>
                            github.com/dairsmithgit/passengerapp <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src='/images/works/inoue_eyecatch.png' alt='inoue station eye-catching image' />
                <WorkImage src='/images/works/inoue_01.jpeg' alt='inoue station image' />
                <WorkImage src='/images/works/inoue_02.jpeg' alt='inoue station image' />
                <WorkImage src='/images/works/inoue_03.jpeg' alt='inoue station image' />
            </Container>
        </Layout>
    )
}

export default Project;
export { getServerSideProps } from '../../components/Chakra';