import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import useSidebarStore from "@/store/sidebarStore";

export const useIsMobile = () => {
  const { breakpoints } = useMantineTheme();
  const breakPoint = useSidebarStore((store) => store.breakPoint);

  const isMobile = useMediaQuery(`(max-width: ${breakpoints[breakPoint]})`);
  return isMobile ?? false;
};
