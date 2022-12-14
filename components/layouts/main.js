import { Box, Container } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import VoxelLoader from '../VoxelLoader';

const LazyVoxelDesk = dynamic(() => import('../Voxel'), {
    ssr: false,
    loading: () => <VoxelLoader />
});

const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Dair Smith - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelDesk />
                {children}
            </Container>
        </Box>
    )
}

export default Main;