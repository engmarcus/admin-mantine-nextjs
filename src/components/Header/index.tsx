

import { AppShell, Button, Container, rem } from "@mantine/core"

export default function Header({toggle}:{toggle: ()=>void}){
	return(
		<AppShell.Header
			style={{
				height: rem(60),
			}}
		>
			<Container fluid py="sm" px="lg">
				<Button onClick={toggle}>abrir/fechar</Button>
			</Container>
		</AppShell.Header>
	)
}
