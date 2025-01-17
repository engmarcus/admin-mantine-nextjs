import { NextResponse } from 'next/server';

export async function GET() {
	const mockMenu = [
		{
			group: "General",
			items: [
				{ label: "Dashboard", icon: "IconGauge", links: "/" },
				{
					label: "Market news",
					icon: "IconNotes",
					initiallyOpened: true,
					links: [
						{ label: "Overview", link: "/" },
						{ label: "Forecasts", link: "/" },
						{ label: "Outlook", link: "/" },
						{ label: "Real time", link: "/" }
					],
					permissions: ["view_dashboard", "view_market_news"]
				},
				{ label: "Analytics", icon: "IconPresentationAnalytics", permissions: ["view_analytics"] , links: "/" }
			]
		},
		{
			group: "Admin",
			items: [
				{
					label: "Releases",
					icon: "IconCalendarStats",
					links: [
						{ label: "Upcoming releases", link: "/releases/upcoming" },
						{ label: "Previous releases", link: "/" },
						{ label: "Releases schedule", link: "/" }
					],
					permissions: ["view_releases"]
				},
				{ label: "Contracts", icon: "IconFileAnalytics", permissions: ["view_contracts"], links: "/" },
				{ label: "Settings", icon: "IconAdjustments", permissions: ["view_settings"], links: "/settings" }
			]
		},
		{
			group: "Security",
			items: [
				{
					label: "Security",
					icon: "IconLock",
					links: [
						{ label: "Enable 2FA", link: "/" },
						{ label: "Change password", link: "/" },
						{ label: "Recovery codes", link: "/" }
					],
					permissions: ["manage_security"]
				}
			]
		}
	];


	return NextResponse.json(mockMenu);
}
