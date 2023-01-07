import axios from "axios";
import Head from "next/head";

export default function User({ account }: any) {
	return (
		<Head>
			<title>{account.original_username} | Silent Client</title>
			<meta
				http-equiv="refresh"
				content={`0;URL=https://store.silentclient.net/account/${account.original_username}`}
			/>
		</Head>
	);
}

export async function getStaticPaths() {
	const { data: res } = await axios.get(
		"https://api.silentclient.net/_next/get_users"
	);
	const paths = res.users.map((user: { original_username: string }) => ({
		params: { username: user.original_username },
	}));
	return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
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
}
