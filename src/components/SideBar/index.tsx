"use client";

import classes from "./SideBar.module.css";

import React, { useState } from "react";

import { MenuItem, MenuStructure } from "@/types/menu";
import { Divider, Group, rem, ScrollArea, Switch } from "@mantine/core";
import { IconLogout, IconSwitchHorizontal } from "@tabler/icons-react";
import { MenuGroup } from "../MenuGroup";
import { Logo } from "../NavBar/Logo";

interface propSideBar {
	menu: MenuStructure;
	toggle: () => void;
	stateOpen: boolean
}


export function SideBar({ menu, toggle, stateOpen }: propSideBar) {
  const [active, setActive] = useState({
    main: "Dashboard",
    sub: "",
  });

  const groups = menu.map((group) => {
    return (
      <div key={group.group} className={classes.groupMenu}>
        <Divider
			my="xs"
			color='var(--mantine-color-blue-7)'
			labelPosition={stateOpen ? 'center' : 'left'}
			label={
				<h3 className={classes.groupTitle}>{group.group}</h3>
			}
        />
        {group.items.map((item: MenuItem, index: number) => (
          <MenuGroup
            key={index}
            label={item.label}
            links={item.links}
            icon={item.icon}
            active={active}
            setActive={setActive}
			open={stateOpen}
          />
        ))}
      </div>
    );
  });

  return (
    <nav className={classes.sideBarContainer}>
      <div className={classes.sideBarInner}>
        <Group className={classes.header} justify="space-between">
          <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <Logo style={{ width: 120 }} />
          </div>

          <Switch
            checked={stateOpen}
            onChange={  toggle }
            styles={{
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
                backgroundColor: stateOpen
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
            }}
            h={24}
            radius="sm"
          />
        </Group>

        <ScrollArea  type="never" scrollbars="y" className={classes.scrollbarsNav}>
          {groups}
        </ScrollArea>

        <Group className={classes.footer}>


          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
            <span>Change account</span>
          </a>

          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </Group>
      </div>
    </nav>
  );
}
