import { IconName } from "@/types/globalTypes";
import { Dispatch, SetStateAction } from "react";

export interface LinkItem {
	label: string;
	link: string;
}

export interface MenuGroupProps {
	icon: IconName;
	label: string;
	initiallyOpened?: boolean;
	links: LinkItem[] | string;
	active: {
	  main: string;
	  sub: string;
	}
	setActive: Dispatch<SetStateAction<{ main: string; sub: string }>>;
}
