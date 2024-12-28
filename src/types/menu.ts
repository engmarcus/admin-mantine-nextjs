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

export type SidebarState =  'mini' | 'full';
