import { MenuStructure } from "@/types/menu";
import { ReactNode } from "react";

export interface LayoutClientInterface {
	children: ReactNode,
	menus: MenuStructure
}
