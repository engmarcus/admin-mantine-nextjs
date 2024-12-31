"use client";

import React, { useState } from "react";
import { Divider, Group, rem, ScrollArea, Switch } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import classes from "./SideBar.module.css";
import { MenuItem, MenuStructure } from "@/types/menu";
import { MenuGroup } from "../MenuGroup";
import { Logo } from "../Logo";

interface DesktopState {
  clickOpen: boolean;
  isOpen: boolean;
}

interface SideBarProps {
  menu: MenuStructure;
  toggle: React.Dispatch<React.SetStateAction<DesktopState>>;
  stateOpen: DesktopState;
}

export const SideBar: React.FC<SideBarProps> = ({
  menu,
  toggle,
  stateOpen,
}) => {
  const [active, setActive] = useState({ main: "Dashboard", sub: "" });

  const handleToggleMenu = () => {
    toggle((prev) => ({
      clickOpen: !prev.clickOpen,
      isOpen: !prev.clickOpen,
    }));
  };

  const handleMouseEnter = () => {
    if (!stateOpen.clickOpen && !stateOpen.isOpen) {
      toggle((prev) => ({ ...prev, isOpen: true }));
    }
  };

  const handleMouseLeave = () => {
    if (!stateOpen.clickOpen && stateOpen.isOpen) {
      toggle((prev) => ({ ...prev, isOpen: false }));
    }
  };

  const renderGroups = () =>
    menu.map((group) => (
      <div key={group.group} className={classes.groupMenu}>
        <Divider
          my="xs"
          color="var(--mantine-color-blue-7)"
          labelPosition={stateOpen.isOpen ? "center" : "left"}
          label={<h3 className={classes.groupTitle}>{group.group}</h3>}
        />
        {group.items.map((item: MenuItem) => (
          <MenuGroup
            key={item.label}
            label={item.label}
            links={item.links}
            icon={item.icon}
            active={active}
            setActive={setActive}
            open={stateOpen}
          />
        ))}
      </div>
    ));

  return (
    <nav
      className={classes.sideBarContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={classes.sideBarInner}>
        <Group
          className={classes.header}
          data-active={!stateOpen.isOpen || undefined}
          justify="space-between"
        >
          <div className={classes.logoWrapper}>
            <Logo style={{ width: 120 }} open={stateOpen.isOpen} />
          </div>

          <Switch
            checked={stateOpen.clickOpen}
            onChange={handleToggleMenu}
            styles={switchStyles(stateOpen)}
            h={24}
            radius="sm"
          />
        </Group>

        <ScrollArea
          type="never"
          scrollbars="y"
          className={classes.scrollbarsNav}
        >
          {renderGroups()}
        </ScrollArea>

        <Group className={classes.footer}>
          <FooterLink
            href="#"
            icon={<IconLogout className={classes.linkIcon} stroke={1.5} />}
            label="Logout"
            isOpen={stateOpen.isOpen}
          />
        </Group>
      </div>
    </nav>
  );
};

const FooterLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
}> = ({ href, icon, label, isOpen }) => (
  <a
    href={href}
    className={classes.link}
    data-active={!isOpen || undefined}
    onClick={(e) => e.preventDefault()}
  >
    {icon}
    <span>{isOpen ? label : ""}</span>
  </a>
);

const switchStyles = (stateOpen: DesktopState) => ({
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
    backgroundColor:
      stateOpen.isOpen && stateOpen.clickOpen
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
