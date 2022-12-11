import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, Container, Stack, Box } from "@chakra-ui/react";
import theme from "../app/theme";
import Header from "../app/components/header";
import React from "react";
import Footer from "../app/components/footer";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Convenient pvp client for Minecraft with 30+ mods, FPS Boost, Optifine and cosmetics."
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/favicon-16x16.png"
				/>
				<link rel="manifest" href="/assets/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/assets/safari-pinned-tab.svg"
					color="#000000"
				/>
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta name="theme-color" content="#000000" />
			</Head>

			<Stack w="full" h="full" minHeight="100vh" direction="column" spacing={0}>
				<Header />
				<Container
					maxW={"full"}
					paddingTop={[5, 10]}
					paddingInlineStart={[
						"15px",
						"15px",
						"15px",
						"2rem",
						"2rem",
						"3rem",
						"4rem",
					]}
					paddingInlineEnd={[
						"15px",
						"15px",
						"15px",
						"2rem",
						"2rem",
						"3rem",
						"4rem",
					]}
				>
					<Component {...pageProps} />
				</Container>

				<Box flex="1" />
				<Footer />
			</Stack>
		</ChakraProvider>
	);
}
