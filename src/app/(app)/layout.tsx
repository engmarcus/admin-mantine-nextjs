import { SideBar } from "@/components/SideBar";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
	const res = await fetch('http://localhost:3000/api/menu', { cache: 'no-store' });
	const menu = await res.json();


	return (
		<SideBar menu={menu} />
	);
}
