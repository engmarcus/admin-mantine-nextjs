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
	links?: LinkItem[];
	active: {
	  main: string;
	  sub: string;
	};
	open: boolean;
	setActive: Dispatch<SetStateAction<{ main: string; sub: string }>>;
}
