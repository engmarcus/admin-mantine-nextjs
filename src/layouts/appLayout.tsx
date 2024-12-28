'use client'

import { MenuItem } from "@/types/menu";
import Header from "@/components/Header";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import { AppShell, em } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";



export default function AppLayoutClient({ children, dataMenu }: { children: React.ReactNode, dataMenu: MenuItem[] }){
	const [toggleMenu, { toggle: toggleMenuOpen }] = useDisclosure(true);
	const [toggleMenuMobile, { toggle: toggleMenuMobileOpen }] = useDisclosure(false);
	console.log('AppLayoutClient')
	const isMobile = useMediaQuery(`(max-width: ${em(992)})`);
	return(
		<AppShell
			layout="alt"
			header={{ height: 65 }}
			navbar={{
				width: !toggleMenu ? 85 : 220, // Ajusta a largura do navbar com base no estado de colapso
				breakpoint: "md",
				collapsed: { desktop : false, mobile: toggleMenuMobile },
			}}
			padding="sm"
		>
			<Header toggle={isMobile? toggleMenuMobileOpen : toggleMenuOpen}/>
			<NavBar menus={dataMenu} collapsed={!isMobile ? !toggleMenu : false}  toggle={toggleMenuMobileOpen} />
			<Main>
				{children}
			</Main>
		</AppShell>
	);
}
