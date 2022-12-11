import {
	Container,
	Center,
	Heading,
	Stack,
	Text,
	Button,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import Head from "next/head";

function NotFound() {
	return (
		<Center h="full" w="full">
			<Head>
				<title>Not Found | Silent Client</title>
			</Head>
			<Center h="full">
				<Stack spacing={16}>
					<Stack spacing={2}>
						<Center>
							<Heading size="4xl">404</Heading>
						</Center>
						<Center>
							<Text fontSize={["sm", "xl"]}>
								Sorry, this page could not be found.
							</Text>
						</Center>
					</Stack>
					<Center>
						<NextLink href="/">
							<Button>Back to home</Button>
						</NextLink>
					</Center>
				</Stack>
			</Center>
		</Center>
	);
}

export default NotFound;
