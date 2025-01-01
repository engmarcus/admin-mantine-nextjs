'use client'

import useSidebarStore from '@/store/sidebarStore';
import classes from './app.module.css';
import { AppShell, Group } from "@mantine/core"
import SideBar from '@/components/SideBar';
import { LayoutClientInterface } from './Interfaces/app';


export default function LayoutClient ({children, menus} : LayoutClientInterface){

	const isOpen = useSidebarStore( store => store.isOpen);
	const handleMouseLeave = useSidebarStore(store =>store.handleMouseLeave);
	const handleMouseEnter = useSidebarStore(store =>store.handleMouseEnter);

	return (
		<AppShell
			header={{ height: 60 }}
			layout="alt"
			navbar={{
				width: isOpen ? 300 : 90,
				breakpoint: 'xs',
				collapsed: { mobile: false, desktop: false },
			}}
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					Default Header Content
				</Group>
			</AppShell.Header>

			<AppShell.Navbar className={classes.navbar}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}

			>
				<SideBar menus={menus} />
			</AppShell.Navbar>

			<AppShell.Main>
				{children}
			</AppShell.Main>
		</AppShell>
	)
}
