import React from "react";
import {
	Container,
	Box,
	Stack,
	Link,
	Image,
	Center,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import axios from "axios";

export const MenuItems: {
	name: string;
	to: string;
	isExternal?: boolean;
}[] = [
	{
		name: "Download",
		to: "/download",
	},
	{
		name: "FAQ",
		to: "/faq",
	},
	{
		name: "Store",
		to: "https://store.silentclient.net",
		isExternal: true,
	},
];

function Header() {
	const Router = useRouter();
	const [online, setOnline] = React.useState<number>(0);

	React.useEffect(() => {
		const getData = async () => {
			try {
				const { data: res } = await axios.get(
					"https://api.silentclient.net/stats"
				);

				setOnline(res.stats.players_online);
			} catch (e) {
				console.error(e);
			}
		};

		getData();
	}, []);

	return (
		<Box bgColor="black" position="relative" w="full" zIndex={2} as="header">
			<Container
				maxW={["full", "full", "full", "full", "full", "90%"]}
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
				minW="full"
				ml="auto"
				mr="auto"
			>
				<Stack direction="row" h="77px" justifyContent="space-between">
					<Link
						display={["block", "block"]}
						w="auto"
						userSelect={"none"}
						as={NextLink}
						href={"/"}
					>
						<Center h="full">
							<Image h="39px" w="auto" src={"/assets/images/full_logo.svg"} />
						</Center>
					</Link>

					<Center w="auto" h="full" display={["none", "flex"]}>
						<Stack direction="row" spacing={5}>
							{MenuItems.map(link => (
								<Link
									color={
										Router.pathname === link.to ? "white" : "rgb(114, 114, 114)"
									}
									fontSize="18px"
									fontWeight={600}
									_hover={{
										color: "white",
										textDecoration: "none",
									}}
									as={NextLink}
									href={link.to}
								>
									<Center h="full">{link.name}</Center>
								</Link>
							))}
							<Box
								bgColor="rgb(19, 19, 19)"
								borderRadius="5px"
								border="solid 0.8px #3a3a3a"
								p="5px 10px"
							>
								Players Online: {online}
							</Box>
						</Stack>
					</Center>
					<Center w="auto" h="full" display={["flex", "none"]}>
						<Menu>
							<MenuButton
								as={IconButton}
								aria-label="menu"
								icon={<HamburgerIcon />}
							/>
							<MenuList bgColor="black">
								{MenuItems.map(link => (
									<MenuItem
										bgColor={"black"}
										_hover={{
											bgColor: "#131313",
										}}
										as={NextLink}
										href={link.to}
									>
										{link.name}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</Center>
				</Stack>
			</Container>
		</Box>
	);
}

export default Header;
