"use client";

import classes from "./SideBar.module.css";
import React, { useState } from "react";
import useSidebarStore from "@/store/sidebarStore";
import { ActionIcon,  Divider, Group, rem, ScrollArea, Switch, useMantineTheme } from "@mantine/core";
import {  IconLogout, IconX } from "@tabler/icons-react";
import { MenuItem } from "@/types/menu";
import { MenuGroup } from "../MenuGroup";
import { SideBarProps } from "./interface";
import { useMediaQuery } from "@mantine/hooks";

import { Logo } from "../Logo";

export default function SideBar({ menus }: SideBarProps) {
	const clickOpen = useSidebarStore((store) => store.clickOpen);
	const isOpen = useSidebarStore((store) => store.isOpen);
	const breakPoint = useSidebarStore((store) => store.breakPoint);
	const toggleSidebar = useSidebarStore((store) => store.toggleSidebar);
	const { breakpoints } = useMantineTheme();

  	const isMobile = useMediaQuery(
		`(max-width: ${breakpoints[breakPoint]})`
	);

	const [active, setActive] = useState({ main: "Dashboard", sub: "" });

	const handleOpenMenu = () =>{
		toggleSidebar(isMobile ?? false);
	}

	const renderGroups = () => {
		/** fazer filtro de permissao */
		/** fazer filtro de menu ativo */
		return menus.map((group, index) => {
			/**  */
			const lastGroup =  menus.length === (index+1)

			return (
				<div key={group.group} className={classes.groupMenu} data-last-item={lastGroup || undefined}>
					<Divider
						my="xs"
						color="var(--mantine-color-blue-7)"
						labelPosition={isOpen ? "center" : "left"}
						label={<h3 className={classes.groupTitle}>{group.group}</h3>}
					/>
					{group.items.map((item: MenuItem ) => {
						return(
							<MenuGroup
								key={item.label}
								label={item.label}
								links={item.links}
								icon={item.icon}
								active={active}
								setActive={setActive}
							/>

						)}
					)}
				</div>
			);
		});
	};

	return (
		<nav className={classes.sideBarContainer}>
			<div className={classes.sideBarInner}>
				<Group className={classes.header} data-active={!isOpen || undefined} justify="space-between">
					<div className={classes.logoWrapper}>
						<Logo style={{ width: 120 }} open={isOpen} />
					</div>

					<Switch
						checked={clickOpen}
						onChange={handleOpenMenu}
						styles={switchStyles({ isOpen, clickOpen })}
						h={24}
						radius="sm"
						visibleFrom={breakPoint}
					/>
					<ActionIcon
						variant="default"
						aria-label="toggle Menu"
						hiddenFrom={breakPoint}
						onClick={handleOpenMenu}
					>
						<IconX  style={{ width: '70%', height: '70%' }} stroke={1.5} />
					</ActionIcon>

				</Group>

				<ScrollArea type="never" scrollbars="y" className={classes.scrollbarsNav}>
					{renderGroups()}
				</ScrollArea>

				<Group className={classes.footer}>
					<FooterLink
						href="#"
						icon={<IconLogout className={classes.linkIcon} stroke={1.5} />}
						label="Logout"
						isOpen={isOpen}
					/>
				</Group>
			</div>
		</nav>
	);
}

function FooterLink({ href, icon, label, isOpen }: { href: string; icon: React.ReactNode; label: string; isOpen: boolean }) {
  return (
    <a href={href} className={classes.link} data-active={!isOpen || undefined} onClick={(e) => e.preventDefault()}>
      {icon}
      <span>{isOpen ? label : ""}</span>
    </a>
  );
}

const switchStyles = ({ isOpen, clickOpen }: { isOpen: boolean; clickOpen: boolean }) => ({
  root: {
    height: "100%",
  },
  body: {
    height: "100%",
  },
  track: {
    cursor: "pointer",
    height: "100%",
    minWidth: rem(30),
    width: rem(38),
    borderColor: "transparent",
    backgroundColor: isOpen && clickOpen
      ? "var(--mantine-color-hinodeBlue-1)"
      : "var(--mantine-color-hinodeBlue-3)",
  },
  thumb: {
    height: "90%",
    width: rem(11),
    borderRadius: rem(3),
    borderColor: "transparent",
    backgroundColor: "var(--mantine-color-hinodeBlue-6)",
  },
});
