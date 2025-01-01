import { useState, useEffect, useCallback, useMemo } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { Collapse, Group, UnstyledButton } from "@mantine/core";
import classes from "./MenuGroup.module.css";
import IconMapper from "../IconMapper";
import { MenuGroupProps } from "./interfaceMenu";
import useSidebarStore from "@/store/sidebarStore";
import Link from "next/link";

export function MenuGroup({
  icon,
  label,
  initiallyOpened,
  links,
  active,
  setActive,
}: MenuGroupProps) {
  	const hasLinks = Array.isArray(links);
  	const [opened, setOpened] = useState(initiallyOpened || false);
	const isOpen = useSidebarStore(store => store.isOpen);
  // Itens de menu
  const items = useMemo(() => {
	return (hasLinks ? links : []).map((link) => {
	 	return (
			<Link
			href={link.link}
			key={link.label}
			data-active={active.sub === link.label || undefined}
			className={classes.link}
			passHref
			onClick={() => {
				setActive({ main: label, sub: link.label });
			}}

			>
				{isOpen ? link.label : ""}
			</Link>
	  	);
	});
  }, [hasLinks, links, active.sub, label, isOpen, setActive]);

  useEffect(() => {
    if (opened && hasLinks && active.main === label && !active.sub) {
      setActive({ main: label, sub: links[0].label });
    }
  }, [opened, links, active.sub, label, active.main, setActive]);

  const handleGroupClick = useCallback(() => {
    if (!hasLinks) {

      setActive({ main: label, sub: "" });
    } else {
      setOpened((prevOpened) => !prevOpened);
    }
  }, [hasLinks, label, setActive]);

  const handleClickMenu = useCallback(() => {
	setActive((prevState) => {
	  const labelMain = hasLinks ? prevState.main : label;
	  const subActive = hasLinks && opened ? prevState.sub : "";

	  return {
		main: labelMain !== prevState.main ? labelMain : prevState.main,
		sub: subActive !== prevState.sub ? subActive : prevState.sub,
	  };
	});
  }, [hasLinks, label, opened, setActive]);

  return (
    <>
      <UnstyledButton
        onClick={handleGroupClick}
        className={classes.control}
		data-open={!isOpen||undefined}
        data-active={label === active.main || undefined}
        aria-expanded={opened}

      >
        <Group justify="space-between" gap={0}>
			<Link
				className={classes.linkSingle}
				href={!hasLinks ?  links : ''}
				key={label}
				data-active={label === active.main || undefined}
				data-open={!isOpen||undefined}
				onClick={(e) =>{
					if(hasLinks){
						e.preventDefault();
					}
					handleClickMenu}}
				passHref
			>
				<IconMapper
				iconName={icon}
				className={classes.linkIcon}
				stroke={1.5}
				/>
				<span>
					{isOpen && label}
				</span>
			</Link>
			{hasLinks && isOpen && (
				<IconChevronRight
				className={classes.chevron}
				stroke={1.5}
				size={16}
				style={{ transform: opened ? "rotate(-90deg)" : "none" }}
				/>
          )}
        </Group>
      </UnstyledButton>
      {hasLinks && <Collapse in={opened && isOpen}>{items}</Collapse>}
    </>
  );
}
