import axios from "axios";
import Head from "next/head";
import { Box, Center, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

export default function User({
	account,
}: {
	account: {
		id: number;
		username: string;
		email: string;
		original_username: string;
		is_admin: number;
		is_online: number;
		last_online: string;
		created_at: string;
		is_plus: number;
		plus_expiration: string;
	};
}) {
	return (
		<Box>
			<Head>
				<title>{`${account.original_username} | Silent Client`}</title>
				<meta
					http-equiv="refresh"
					content={`0;URL=https://store.silentclient.net/account/${account.original_username}`}
				/>
			</Head>
			<Center>
				<Heading>Redirecting...</Heading>
			</Center>
		</Box>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: res } = await axios.get(
		"https://api.silentclient.net/_next/get_users"
	);
	const paths = res.users.map((user: { original_username: string }) => ({
		params: { username: user.original_username },
	}));
	return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const { data: user } = await axios.get(
		`https://api.silentclient.net/account/${params.username}`
	);

	if (user.error) {
		return { notFound: true };
	}

	return {
		props: {
			account: user.account,
		},
	};
};
