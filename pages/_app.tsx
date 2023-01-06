import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion";
import theme from "../src/theme/index"
import '../src/theme/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp