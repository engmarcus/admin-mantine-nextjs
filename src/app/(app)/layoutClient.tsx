'use client'

import useSidebarStore from '@/store/sidebarStore';
import classes from './app.module.css';
import { AppShell, Group } from "@mantine/core"
import SideBar from '@/components/SideBar';
import { LayoutClientInterface } from './Interfaces/app';
import MobileMenuButton from '@/components/MobileMenuButton';


export default function LayoutClient ({children, menus} : LayoutClientInterface){

	const isOpen = useSidebarStore( store => store.isOpen);
	const isOpenMobile = useSidebarStore( store => store.mobileOpen);
	const breakPoint = useSidebarStore( store => store.breakPoint);

	const handleMouseLeave = useSidebarStore(store =>store.handleMouseLeave);
	const handleMouseEnter = useSidebarStore(store =>store.handleMouseEnter);
	const mouseEvents = !isOpenMobile
		? { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }
		: {};
	return (
		<AppShell
			header={{ height: 66 }}
			layout="alt"
			navbar={{
				width: isOpen ? 300 : 90,
				breakpoint: breakPoint,
				collapsed: { mobile: !isOpenMobile, desktop: false },
			}}
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<MobileMenuButton />
					Default Header Content
				</Group>
			</AppShell.Header>

			<AppShell.Navbar className={classes.navbar}
				{...mouseEvents}
			>
				<SideBar menus={menus} />
			</AppShell.Navbar>

			<AppShell.Main>
				{children}
			</AppShell.Main>
		</AppShell>
	)
}
