import { IconName } from "./globalTypes";

export type MenuLink = {
  label: string;
  link: string;
};

export interface LinkItem {
  label: string;
  link: string;
}

export type MenuItem = {
  label: string;
  icon: IconName;
  initiallyOpened?: boolean;
  links?: LinkItem[];
  permissions?: string[];
};

export interface MenuGroup {
  group: string;
  items: MenuItem[];
}

export type MenuStructure = MenuGroup[];

export type SidebarState = "mini" | "full";
