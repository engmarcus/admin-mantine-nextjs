'use client'

import useSidebarStore from "@/store/sidebarStore";
import { ActionIcon, rem, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react"

export default function MobileMenuButton(){
	const toggleSidebar = useSidebarStore((store) => store.toggleSidebar);
	const breakPoint = useSidebarStore((store) => store.breakPoint);

	const { breakpoints } = useMantineTheme();
  	const isMobile = useMediaQuery(
		`(max-width: ${breakpoints[breakPoint] || breakpoints.xs})`
	);
	const handleOpenMenu = () =>{
		toggleSidebar(isMobile ?? false);
	}
	return <ActionIcon
		variant="transparent"
		aria-label="toggle Menu"
		hiddenFrom={breakPoint}
		onClick={handleOpenMenu}
	>
		<IconMenu2   color="#000" style={{ width: rem(25), height: rem(25) }} stroke={1.5} />
	</ActionIcon>
}
