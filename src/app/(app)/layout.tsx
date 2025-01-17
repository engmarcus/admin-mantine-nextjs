import Header from "@/components/Header";
import LayoutClient from "./layoutClient";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
	const res = await fetch('http://localhost:3000/api/menu', { cache: 'no-store' });
	const menus = await res.json();

	return (
		<LayoutClient
			header={<Header />}
			menus={menus}
		>
			{children}
		</LayoutClient>
	);
}
