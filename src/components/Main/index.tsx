'use client'

import { AppShell } from "@mantine/core"

export default function Main({ children }: { children: React.ReactNode }){
	return(
		<AppShell.Main>
			{children}
		</AppShell.Main>
	)
}
