import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/Project';
import P from '../../components/Paragraph';
import Layout from '../../components/layouts/article';

const Project = () => {
    return (
        <Layout title="Img to Ascii">
            <Container>
                <Title>
                    Img to Ascii <Badge>2022-</Badge>
                </Title>
                <P>
                    Img to Ascii is my first step towards exploring the world of creative coding. I am very interested in the power code can provide to create dynamic, unique and captivating art. I have always appreciated early-internet aesthetics so doing a project with Ascii art is very fun for me.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript, Node.js, Express</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/dairsmithgit/img-ascii'>
                            github.com/dairsmithgit/img-ascii <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src='/images/works/ascii_eyecatch.png' alt='ascii eye-catching image' />
                <WorkImage src='/images/works/ascii_01.jpeg' alt='ascii image' />
                <WorkImage src='/images/works/ascii_02.jpeg' alt='ascii image' />
                <WorkImage src='/images/works/ascii_03.jpeg' alt='ascii image' />
            </Container>
        </Layout>
    )
}

export default Project;
export { getServerSideProps } from '../../components/Chakra';