'use client'

import useSidebarStore from "@/store/sidebarStore";
import { ActionIcon, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react"

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
		variant="default"
		aria-label="toggle Menu"
		hiddenFrom={breakPoint}
		onClick={handleOpenMenu}
	>
		<IconX  style={{ width: '70%', height: '70%' }} stroke={1.5} />
	</ActionIcon>
}
