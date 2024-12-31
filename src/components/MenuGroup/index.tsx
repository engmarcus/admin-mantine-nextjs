import { useState, useEffect, useCallback } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { Collapse, Group, Text, UnstyledButton } from "@mantine/core";
import classes from "./MenuGroup.module.css";
import IconMapper from "../IconMapper";
import { MenuGroupProps } from "./interfaceMenu";

export function MenuGroup({
  icon,
  label,
  initiallyOpened,
  links,
  active,
  open,
  setActive,
}: MenuGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  // Itens de menu
  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
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
      {open.isOpen ? link.label : ""}
    </Text>
  ));

  // Configuração para definir o item ativo na primeira abertura
  useEffect(() => {
    if (opened && hasLinks && active.main === label && !active.sub) {
      setActive({ main: label, sub: links[0].label });
    }
  }, [opened, links, active.sub, label, active.main, setActive]);

  // Função para lidar com a abertura e fechamento do grupo de links
  const handleGroupClick = useCallback(() => {
    if (!hasLinks) {
      setActive({ main: label, sub: "" });
    } else {
      setOpened((prevOpened) => !prevOpened);
    }
  }, [hasLinks, label, setActive]);

  return (
    <>
      <UnstyledButton
        onClick={handleGroupClick}
        className={classes.control}
		data-open={!open.isOpen||undefined}
        data-active={label === active.main || undefined}
        aria-expanded={opened}
      >
        <Group justify="space-between" gap={0}>
          <a
            className={classes.linkSingle}
            href="#"
            key={label}
            data-active={label === active.main || undefined}
			data-open={!open.isOpen||undefined}
            onClick={(event) => {
              event.preventDefault();
              const subActive = hasLinks && opened ? links[0].label : "";
              setActive({
                main: label,
                sub: subActive,
              });
            }}
          >
            <IconMapper
              iconName={icon}
              className={classes.linkIcon}
              stroke={1.5}
            />
            <span>{open.isOpen && label}</span>
          </a>
          {hasLinks && open.isOpen && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: opened ? "rotate(-90deg)" : "none" }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks && <Collapse in={opened && open.isOpen}>{items}</Collapse>}
    </>
  );
}
