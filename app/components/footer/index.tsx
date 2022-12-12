import { Center, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaDiscord, FaTelegram, FaVk } from "react-icons/fa";
import { MenuItems } from "../header";
import NextLink from "next/link";

function Footer() {
	return (
		<Center w="full" padding="45px 0px" as="footer">
			<Stack
				w={["auto", "full"]}
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
				direction={["column", "row"]}
				justifyContent="space-between"
			>
				<Center h="42px">
					<Text fontWeight={600}>
						© {new Date().getFullYear()} Silent Client
					</Text>
				</Center>

				<Center h="42px">
					<Stack direction="row" spacing={5}>
						<Link
							transition="opacity 0.2s ease-in-out"
							href="https://t.me/silent_client"
							color="#c9c9c9"
							isExternal
							_hover={{
								opacity: "0.5",
							}}
						>
							<FaTelegram size={25} />
						</Link>
						<Link
							transition="opacity 0.2s ease-in-out"
							href="https://vk.com/silentclient"
							color="#c9c9c9"
							isExternal
							_hover={{
								opacity: "0.5",
							}}
						>
							<FaVk size={25} />
						</Link>

						<Link
							transition="opacity 0.2s ease-in-out"
							href="https://t.me/silent_client"
							color="#c9c9c9"
							isExternal
							_hover={{
								opacity: "0.5",
							}}
						>
							<FaDiscord size={25} />
						</Link>
					</Stack>
				</Center>
				<Center h="42px">
					<Stack direction="row" spacing={5}>
						{MenuItems.map(link => (
							<Link
								color="rgb(114, 114, 114)"
								fontWeight={600}
								_hover={{
									color: "white",
									textDecoration: "none",
								}}
								as={NextLink}
								href={link.to}
							>
								{link.name}
							</Link>
						))}
					</Stack>
				</Center>
			</Stack>
		</Center>
	);
}

export default Footer;
