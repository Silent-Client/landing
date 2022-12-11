import {
	Box,
	Center,
	Heading,
	Stack,
	Text,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

function Download() {
	const [selectedVersion, setSelectedVersion] =
		React.useState<"launcher" | "folder" | null>(null);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box w="full">
			<Head>
				<title>Download | Silent Client</title>
			</Head>
			<Stack direction="column" spacing={3}>
				<Center>
					<Heading size="2xl">Download</Heading>
				</Center>
				<Center>
					<Text fontSize="xl">Select a version to get started</Text>
				</Center>
			</Stack>
			<Center mt={10}>
				<Stack direction={["column", "row"]} spacing={3}>
					<a href="https://api.silentclient.ml/releases/launcher.exe">
						<Button
							onClick={() => {
								setSelectedVersion("launcher");
								onOpen();
							}}
							w={["full", "auto"]}
						>
							Launcher for Windows
						</Button>
					</a>
					<a href="https://api.silentclient.ml/releases/SilentClient.zip">
						<Button
							onClick={() => {
								setSelectedVersion("folder");
								onOpen();
							}}
							w={["full", "auto"]}
						>
							Version folder
						</Button>
					</a>
				</Stack>
			</Center>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay backdropFilter="blur(10px)" />
				<ModalContent bgColor="black">
					<ModalHeader>Installation instructions</ModalHeader>
					<ModalCloseButton />
					<ModalBody padding={5}>
						{(selectedVersion === "launcher" && (
							<Text fontSize="xl">
								1) Wait for your download to finish
								<br />
								2) Run the Silent Client Launcher installer
								<br />
								3) Open the client and hit launch!
							</Text>
						)) ||
							(selectedVersion === "folder" && (
								<Text fontSize="xl">
									1) Wait for your download to finish
									<br />
									2) Unzip the archive to the folder with Minecraft versions
									<br />
									3) Open your minecraft launcher and select "SilentClient"
									version!
								</Text>
							))}
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
}

export default Download;
