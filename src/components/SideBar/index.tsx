"use client";

import classes from "./SideBar.module.css";

import React, { useState } from "react";

import { MenuItem } from "@/types/menu";
import { Group, Menu, rem, ScrollArea, Switch } from "@mantine/core";
import { IconLogout, IconSwitchHorizontal } from "@tabler/icons-react";
import { MenuGroup } from "../MenuGroup";

export function SideBar({ menu }: { menu: MenuItem[] }) {
  const [active, setActive] = useState({
    main: "Dashboard",
    sub: "",
  });
  const [activeMenu, setActiveMenu] = useState(true);

  const links = menu.map((item: MenuItem, index) => {
    return (
      <MenuGroup
        key={index}
        label={item.label}
        links={item.links}
        icon={item.icon}
        active={active}
        setActive={setActive}
      />
    );
  });

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          LOGO
          <Switch
            checked={activeMenu}
            onChange={() => setActiveMenu(!activeMenu)}
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
                backgroundColor: activeMenu
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
        <ScrollArea.Autosize type="never">{links}</ScrollArea.Autosize>
      </div>

      <div className={classes.footer}>
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
      </div>
    </nav>
  );
}
