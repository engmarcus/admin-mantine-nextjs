'use client';

import { MenuStructure } from '@/types/menu';
import classes from './app.module.css';
import { AppShell, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';
import { SideBar } from '@/components/SideBar';

interface StructureProps {
  children: ReactNode;
  headerContent?: ReactNode;
  sidebarContent?: ReactNode;
  menu:  MenuStructure
}

export default function Structure({ children, headerContent, menu }: StructureProps) {
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

	return (
		<AppShell
			header={{ height: 60 }}
			layout="alt"
			navbar={{
				width: desktopOpened ? 300 : 91,
				breakpoint: 'xs',
				collapsed: { mobile: false, desktop: false },
			}}
		>
			<AppShell.Header>
				<Group h="100%" px="md">
				{headerContent || 'Default Header Content'}
				</Group>
			</AppShell.Header>

			<AppShell.Navbar className={classes.navbar}>
				<SideBar menu={menu} toggle={toggleDesktop} stateOpen={desktopOpened} />
			</AppShell.Navbar>

			<AppShell.Main>
				{children}
			</AppShell.Main>
		</AppShell>
	);
}
