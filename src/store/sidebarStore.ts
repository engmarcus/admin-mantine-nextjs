import { create } from 'zustand';

interface SidebarState {
	clickOpen: boolean;
	isOpen: boolean;
	mobileOpen: boolean;
	breakPoint: string;
	toggleSidebar: (isMobile: boolean) => void;
	setOpen: (value: boolean) => void;
	handleMouseEnter: () => void;
	handleMouseLeave: () => void;
}


const useSidebarStore = create<SidebarState>((set) => ({
	mobileOpen: false,
	clickOpen: true,
	isOpen: true,
	breakPoint: "xs",
	toggleSidebar: (isMobile: boolean) =>
	  set((state) => {
		if (isMobile) {
		  return {
			mobileOpen: !state.mobileOpen,
			isOpen: true,
		  };
		}
		return {
		  clickOpen: !state.clickOpen,
		  isOpen: !state.clickOpen,
		};
	}),
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
}));

export default useSidebarStore;
