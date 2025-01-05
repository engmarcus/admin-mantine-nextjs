'use client'

import useSidebarStore from '@/store/sidebarStore';
import classes from './app.module.css';
import { AppShell, Box, rem, useMantineTheme } from "@mantine/core"
import SideBar from '@/components/SideBar';
import { LayoutClientInterface } from './Interfaces/app';
import AppMain from '@/components/AppMain';


export default function LayoutClient ({children, header, menus} : LayoutClientInterface){

	const isOpen = useSidebarStore( store => store.isOpen);
	const isOpenMobile = useSidebarStore( store => store.mobileOpen);
	const breakPoint = useSidebarStore( store => store.breakPoint);
	const theme = useMantineTheme();

	const handleMouseLeave = useSidebarStore(store =>store.handleMouseLeave);
	const handleMouseEnter = useSidebarStore(store =>store.handleMouseEnter);
	const mouseEvents = !isOpenMobile
		? { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }
		: {};

	return (
		<AppShell
			header={{ height: 60 }}
			layout="alt"
			navbar={{
				width: isOpen ? 300 : 90,
				breakpoint: breakPoint,
				collapsed: { mobile: !isOpenMobile, desktop: false },
			}}
		>
			<AppShell.Header  style={{
				height: rem(60),
				boxShadow: isOpenMobile ? theme.shadows.md : theme.shadows.sm,
			}}>
				{header}
			</AppShell.Header>

			<AppShell.Navbar className={classes.navbar} {...mouseEvents}  >
				<SideBar menus={menus} />
			</AppShell.Navbar>

			<AppShell.Main >
				<AppMain>
					{children}
				</AppMain>
			</AppShell.Main>
		</AppShell>
	)
}
