import {
	Box,
	Button,
	Center,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

export default function Home() {
	return (
		<Box w="full">
			<Head>
				<title>Silent Client</title>
			</Head>
			<Center w="full">
				<Stack direction="column" spacing="20px">
					<Center>
						<Image w="180px" src="/assets/images/logo.svg" />
					</Center>
					<Center mt={"30px!important"}>
						<Heading size="2xl">SILENT CLIENT</Heading>
					</Center>
					<Center>
						<Text fontSize="lg" maxWidth="400px" textAlign="center">
							Convenient pvp client for Minecraft with 30+ mods, FPS Boost,
							Optifine and cosmetics.
						</Text>
					</Center>
					<Center>
						<Stack w="full" direction="row" spacing={3}>
							<NextLink
								href="/download"
								style={{
									width: "100%",
								}}
							>
								<Button w="full">Download</Button>
							</NextLink>
							<NextLink
								href="https://store.silentclient.ml"
								style={{
									width: "100%",
								}}
							>
								<Button w="full">Store</Button>
							</NextLink>
						</Stack>
					</Center>
				</Stack>
			</Center>
		</Box>
	);
}
