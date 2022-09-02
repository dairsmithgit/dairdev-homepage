import Layout from '../components/layouts/main';
import Fonts from "../components/Fonts";
import Chakra from '../components/Chakra';
import { AnimatePresence } from "framer-motion";

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
}

const Website = ({ Component, pageProps, router }) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </Chakra>
    )
}

export default Website;