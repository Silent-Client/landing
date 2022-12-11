import {
	Box,
	Heading,
	Center,
	Stack,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Link,
} from "@chakra-ui/react";
import React from "react";
import Head from "next/head";

function Faq() {
	return (
		<Box w="full">
			<Head>
				<title>FAQ | Silent Client</title>
			</Head>
			<Stack direction="column" spacing={3}>
				<Center>
					<Heading size="2xl">FAQ</Heading>
				</Center>
				<Center>
					<Text fontSize="xl" textAlign="center">
						Got questions? We&quot;ve got <b>answers</b>! If you don&quot;t see
						your question below, you can reach us on any of the platforms{" "}
						<b>listed below</b>.
					</Text>
				</Center>
			</Stack>
			<Stack direction="column" spacing={5} mt={20}>
				<Accordion allowToggle={true}>
					<AccordionItem
						mb={5}
						borderTop="none"
						borderBottom="none"
						paddingTop={"2rem"}
						paddingBottom={"2rem"}
						paddingRight="1.5rem"
						paddingLeft="1.5rem"
						borderRadius="1.15rem"
						bgColor="rgb(19, 19, 19)"
					>
						<AccordionButton h="full" padding={0}>
							<Center h="full" w="full">
								<Stack w="full" direction="row" justifyContent="space-between">
									<Heading textAlign="left" size="sm">
										What is Silent Client?
									</Heading>
									<AccordionIcon />
								</Stack>
							</Center>
						</AccordionButton>

						<AccordionPanel
							color="#c9c9c9"
							fontSize="md"
							lineHeight="1.5"
							mt={5}
							mb={0}
							pb={0}
							pr={0}
							pl={0}
						>
							Silent Client is a Minecraft client with built-in FPS boost, mods
							and more.
							<br /> We are actively working to improve the client and add
							innovations that our players have asked us for.
						</AccordionPanel>
					</AccordionItem>

					<AccordionItem
						mb={5}
						borderTop="none"
						borderBottom="none"
						paddingTop={"2rem"}
						paddingBottom={"2rem"}
						paddingRight="1.5rem"
						paddingLeft="1.5rem"
						borderRadius="1.15rem"
						bgColor="rgb(19, 19, 19)"
					>
						<AccordionButton h="full" padding={0}>
							<Center h="full" w="full">
								<Stack w="full" direction="row" justifyContent="space-between">
									<Heading textAlign="left" size="sm">
										Can I use Silent Client on any server?
									</Heading>
									<AccordionIcon />
								</Stack>
							</Center>
						</AccordionButton>

						<AccordionPanel
							color="#c9c9c9"
							fontSize="md"
							lineHeight="1.5"
							mt={5}
							mb={0}
							pb={0}
							pr={0}
							pl={0}
						>
							Silent Client supports all servers supported by Minecraft version
							1.8.9.
						</AccordionPanel>
					</AccordionItem>

					<AccordionItem
						mb={5}
						borderTop="none"
						borderBottom="none"
						paddingTop={"2rem"}
						paddingBottom={"2rem"}
						paddingRight="1.5rem"
						paddingLeft="1.5rem"
						borderRadius="1.15rem"
						bgColor="rgb(19, 19, 19)"
					>
						<AccordionButton h="full" padding={0}>
							<Center h="full" w="full">
								<Stack w="full" direction="row" justifyContent="space-between">
									<Heading textAlign="left" size="sm">
										Is Silent Client really free?
									</Heading>
									<AccordionIcon />
								</Stack>
							</Center>
						</AccordionButton>

						<AccordionPanel
							color="#c9c9c9"
							fontSize="md"
							lineHeight="1.5"
							mt={5}
							mb={0}
							pb={0}
							pr={0}
							pl={0}
						>
							Silent Client is completely free to use, and you miss out on zero
							features! However, if you would like you can support us by
							purchasing cosmetics in-game to improve your look, show off to
							your friends and improve the way your character looks at{" "}
							<Link
								textDecoration="underline"
								color="white"
								href={"https://store.silentclient.ml"}
							>
								store.silentclient.ml
							</Link>
							.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Stack>
		</Box>
	);
}

export default Faq;
