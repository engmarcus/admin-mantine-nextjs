import { MenuItem } from "@/types/menu";
import AppLayoutClient from "@/layouts/appLayout";

const data: MenuItem[] = [
	{ label: 'Dashboard', icon: 'IconGauge' },
	{
	  label: 'Market news',
	  icon: 'IconNotes',
	  initiallyOpened: true,
	  links: [
		{ label: 'Overview', link: '/' },
		{ label: 'Forecasts', link: '/' },
		{ label: 'Outlook', link: '/' },
		{ label: 'Real time', link: '/' },
	  ],
	  permissions: ['view_dashboard', 'view_market_news'], // Exemplo de permissões
	},
	{
	  label: 'Releases',
	  icon: 'IconCalendarStats',
	  links: [
		{ label: 'Upcoming releases', link: '/' },
		{ label: 'Previous releases', link: '/' },
		{ label: 'Releases schedule', link: '/' },
	  ],
	  permissions: ['view_releases'], // Exemplo de permissões
	},
	{ label: 'Analytics', icon: 'IconPresentationAnalytics', permissions: ['view_analytics'] },
	{ label: 'Contracts', icon: 'IconFileAnalytics', permissions: ['view_contracts'] },
	{ label: 'Settings', icon: 'IconAdjustments', permissions: ['view_settings'] },
	{
	  label: 'Security',
	  icon: 'IconLock',
	  links: [
		{ label: 'Enable 2FA', link: '/' },
		{ label: 'Change password', link: '/' },
		{ label: 'Recovery codes', link: '/' },
	  ],
	  permissions: ['manage_security'], // Exemplo de permissões
	},
  ];



export default function AppLayout({ children }: { children: React.ReactNode }) {
	console.log('appLayout')
	return (
		<AppLayoutClient dataMenu={data}>
			{children}
		</AppLayoutClient>
	);
}
