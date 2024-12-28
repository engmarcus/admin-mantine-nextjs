'use client';

import classes from './SideBar.module.css';
import { MenuItem } from '@/types/menu';
import { Group, ScrollArea } from '@mantine/core';
import { IconLogout, IconSwitchHorizontal } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { MenuGroup } from '../MenuGroup';

export function SideBar({ menu }: { menu: MenuItem[] }) {

  const [active, setActive] = useState({
	main: 'Dashboard',
	sub: ''
  });

  useEffect(() => {
	console.log(active);
  }, [active]);


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
	)
  });

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}  justify="space-between">logo</Group>
			<ScrollArea.Autosize type="never"  >
        		{links}
			</ScrollArea.Autosize>
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon}  stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#"  className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon}  stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
