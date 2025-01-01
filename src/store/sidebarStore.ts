import { MenuStructure } from '@/types/menu';
import { create } from 'zustand';

interface SidebarState {
  menus: MenuStructure | null;
  clickOpen: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
  setOpen: (value: boolean) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  setMenus: (menus: MenuStructure) => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  menus: null,
  clickOpen: true,
  isOpen: true,
  toggleSidebar: () =>
    set((state) => ({
      clickOpen: !state.clickOpen,
      isOpen: !state.clickOpen,
    })),
  setOpen: (value) =>
    set((state) => ({
      isOpen: value,
      clickOpen: state.clickOpen ? state.clickOpen : value,
    })),
  handleMouseEnter: () =>
    set((state) => {
      if (!state.clickOpen && !state.isOpen) {
        return { isOpen: true };
      }
      return {};
    }),
  handleMouseLeave: () =>
    set((state) => {
      if (!state.clickOpen && state.isOpen) {
        return { isOpen: false };
      }
      return {};
    }),
  setMenus: (menus) => set({ menus }),
}));

export default useSidebarStore;
