import { useState, useEffect} from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Collapse, Group, Text, UnstyledButton } from '@mantine/core';
import classes from './MenuGroup.module.css';
import IconMapper from '../IconMapper';
import { MenuGroupProps } from './interfaceMenu';

export function MenuGroup({ icon, label, initiallyOpened, links, active, open, setActive }: MenuGroupProps) {
	const hasLinks = Array.isArray(links);
	const [opened, setOpened] = useState(initiallyOpened || false);

	const items = (hasLinks ? links : []).map((link) => (
		<Text<'a'>
			component="a"
			data-active={active.sub === link.label || undefined}
			className={classes.link}
			href={link.link}
			key={link.label}
			onClick={(event) => {
				event.preventDefault();
				setActive({ main: label, sub: link.label });
			}}
		>
			{link.label}
		</Text>
	));

	useEffect(() => {
		if (opened && hasLinks && active.main === label && !active.sub) {
		setActive({ main: label, sub: links[0].label });
		}
	}, [opened, links, active.sub, label, active.main, setActive]);

	const handleGroupClick = () => {
		if(!hasLinks){
			setActive({ main: label, sub: ''});
		}else{
			setOpened(!opened);
		}
	};

	return (
		<>
		<UnstyledButton
			onClick={handleGroupClick}
			className={classes.control}
			data-active={label === active.main || undefined}
			data-open={open === false || undefined}

		>
			<Group justify="space-between" gap={0}>
				<a
					className={classes.linkSingle}
					href="#"
					key={label}
					data-active={label === active.main || undefined}
					data-open={open === false || undefined}
					onClick={(event) => {
					event.preventDefault();
					const subActive = hasLinks && opened ? links[0].label : '';
					setActive({
						main: label,
						sub: subActive,
					});
					}}
				>
					<IconMapper iconName={icon} className={classes.linkIcon} stroke={1.5} />
					<span>{open &&label}</span>
				</a>
			{hasLinks && open && (
				<IconChevronRight
				className={classes.chevron}
				stroke={1.5}
				size={16}
				style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
				/>
			)}
			</Group>
		</UnstyledButton>
		{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
		</>
	);
	}
