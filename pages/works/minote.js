import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/Project';
import P from '../../components/Paragraph';
import Layout from '../../components/layouts/article';

const Project = () => {
    return (
        <Layout title="Minote">
            <Container>
                <Title>
                    Minote <Badge>In Development</Badge>
                </Title>
                <P>
                    Minote is a cross-platform note-taking application for programmers that allows you to develop and maintain your ideas. Create folders dedicated to projects or related ideas, use markdown to structure the note, and include code snippets for psuedo-code or reference.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>macOS / Windows / Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Typescript, Electron, SQLite</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/dairsmithgit/minote'>
                            github.com/dairsmithgit/minote <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src='/images/works/minote_eyecatch.png' alt='minote eye-catching image' />
            </Container>
        </Layout>
    )
}

export default Project;
export { getServerSideProps } from '../../components/Chakra';