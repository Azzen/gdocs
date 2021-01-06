import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
	colors: {
		main: "#3498db",
		background: (level: number) => level > 0 ? "#FFF" : "#f5f5f5"
	},
	text: {
		background: {
			high: "rgba(0, 0, 0, 0.83)",
			medium: "rgba(0, 0, 0, 0.6)",
			disabled: "rgba(0, 0, 0, 0.38)",
			hover: "rgba(0, 0, 0, 0.04)"
		}
	},
	realms: {
		client: "#2ecc71",
		server: "#3498db"
	},
	arguments: {
		background: "#3498db",
		color: "rgb(255, 255, 255)"
	},
	sideMenu: {
		background: "#263238",
		active: "#37474F",
		text: "rgba(255, 255, 255, 0.83)",
		hover: "rgba(255, 255, 255, 0.04)",
		divider: "rgba(255, 255, 255, 0.3)"
	},
	codeBlocks: {
		background: "#f5f5f5",
		color: "rgba(0, 0, 0, 0.83)",
		comment: "#7f8c8d",
		punctuation: "#7f8c8d",
		number: "#e67e22",
		string: "#27ae60",
		operator: "#9b59b6",
		keyword: "#8e44ad",
		function: "#2980b9"
	},
	table: {
		background: "rgba(0, 0, 0, 0.3)",
		alternative: "rgba(0, 0, 0, 0.5)"
	},
	badges: {
		internal: "#919191",
		stub: "#03a1fc",
		deprecated: "#fc6b03",
	}
};
