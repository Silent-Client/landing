import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
	fonts: {
		heading: `'Onest Bold', sans-serif`,
		body: `'Onest Regular', sans-serif`,
	},
	styles: {
		global: {
			body: {
				backgroundColor: "black",
			},
		},
	},
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
		cssVarPrefix: "silentclient",
	},
});
