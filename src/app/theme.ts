import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
	styles: {
		global: (props: any) => ({
			body: {
				bg: mode("#8ecae6", "#023047")(props),
				color: mode("#1A202C", "#EDF2F7")(props),
			},
		}),
	},
});

export default theme;
