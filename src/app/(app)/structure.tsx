'use client';
import classes from './app.module.css';
import { AppShell, Group } from '@mantine/core';
import { ReactNode } from 'react';

interface StructureProps {
  children: ReactNode;
  headerContent?: ReactNode;
  sidebarContent?: ReactNode;
}

export default function Structure({ children, headerContent, sidebarContent }: StructureProps) {

  return (
    <AppShell
		header={{ height: 60 }}
		layout="alt"
		navbar={{
			width: 300,
			breakpoint: 'md',
			collapsed: { mobile: true, desktop: false },
		}}
    >
		<AppShell.Header>
			<Group h="100%" px="md">
			{headerContent || 'Default Header Content'}

			</Group>
		</AppShell.Header>
		<AppShell.Navbar p="md" className={classes.navbar}>
			{sidebarContent}
		</AppShell.Navbar>

		<AppShell.Main>
			{children}
		</AppShell.Main>
    </AppShell>
  );
}
