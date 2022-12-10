import { Container, Badge, Link, List, ListItem, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { HiOutlineSparkles } from 'react-icons/hi';
import { Title, WorkImage, Meta } from '../../components/Project';
import P from '../../components/Paragraph';
import Layout from '../../components/layouts/article';

const Project = () => {
    return (
        <Layout title="Inspo">
            <Container>
                <Title>
                    Inspo <Badge>2022-</Badge>
                </Title>
                <P>
                    Inspo is a personal image board and blog site to keep an easily accessible place for images that inspire my design and development; as well as blogs about my developer journey.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://inspo-ab622.web.app/'>
                            https://inspo-ab622.web.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Firebase, Framer-motion, CSS Modules</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/dairsmithgit/inspo-app'>
                            github.com/dairsmithgit/inspo-app<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src='/images/works/inspo_eyecatch.png' alt='inspo eye-catching image' />
                <WorkImage src='/images/works/inspo_01.jpeg' alt='inspo image' />
                <WorkImage src='/images/works/inspo_02.jpeg' alt='inspo image' />
                <WorkImage src='/images/works/inspo_03.jpeg' alt='inspo image' />
            </Container>
        </Layout>
    )
}

export default Project;
export { getServerSideProps } from '../../components/Chakra';