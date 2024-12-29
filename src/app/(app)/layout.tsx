

import Structure from "./structure";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
	const res = await fetch('http://localhost:3000/api/menu', { cache: 'no-store' });
	const menu = await res.json();

	return (
		<Structure
			headerContent={<>teste</>}
			menu={menu}
		>
			{ children}
		</Structure>
	);
}
