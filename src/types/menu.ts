import { IconName } from "./globalTypes";

export type MenuLink = {
	label: string;
	link: string;
};

 export type MenuItem = {
	label: string;
	icon: IconName;
	initiallyOpened?: boolean;
	links?: MenuLink[];
	permissions?: string[];
};

export interface LinksGroupProps {
  icon: IconName;
  label: string;
  active: {
	main: string;
	sub: string;
  };
  initiallyOpened?: boolean;
  setActive: (state: { main: string; sub: string }) => void;
  links?: { label: string; link: string }[];
}

export type SidebarState =  'mini' | 'full';
