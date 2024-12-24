'use client';

import { Button, createTheme } from '@mantine/core';

export const theme = createTheme({
	colors:{
		hinodeBlue : [
			"#f6ebff",
			"#e5d3ff",
			"#c7a3f8",
			"#a870f3",
			"#8e46ee",
			"#7d2bec",
			"#751cec",
			"#6410d2",
			"#580cbd",
			"#4b05a6"
		],
		hinodeYellow: [
			"#fffbe0",
			"#fff6ca",
			"#ffec99",
			"#fee264",
			"#fed937",
			"#fed319",
			"#fed002",
			"#e2b800",
			"#c9a300",
			"#ae8c00"
		]
	},
	defaultRadius: 'sm',
	primaryColor: 'hinodeBlue',
	components :{
		Button: Button.extend({
			defaultProps:{
			  variant: 'filled'
			}
		}),
	}
});
