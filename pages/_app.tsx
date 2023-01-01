import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box h="calc(100vh)" w="full">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
