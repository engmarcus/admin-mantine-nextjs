import { AppShell, Button, Group, ScrollArea } from "@mantine/core";
import {
	IconAdjustments,
	IconCalendarStats,
	IconFileAnalytics,
	IconGauge,
  IconLock,
  IconLogout,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons-react';
import classes from './NavbarSimpleColored.module.css';
import { MenuItem } from "@/types/menu";
import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup";
import { Logo } from "./Logo";



interface NavBarProps {
  menus: MenuItem[];
  collapsed: boolean;
  toggle: () => void;
}

const iconMap: Record<string, React.FC<any>> = {
  IconGauge,
  IconNotes,
  IconCalendarStats,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
};

const NavBar: React.FC<NavBarProps> = ({ menus, collapsed, toggle }) => {
	const links = menus.map((item) => {
		const Icon = iconMap[item.icon]; // Resolve o ícone pelo nome
		return <LinksGroup {...item} icon={Icon} key={item.label} />;
	  });


  return (
    <AppShell.Navbar>
     <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: 120 }} />
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        sair
      </div>
    </nav>
    </AppShell.Navbar>
  );
};

export default NavBar;
