import { useEffect, useState, useRef } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Box, Collapse, Group, ScrollArea, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import classes from './MenuGroup.module.css';
import { IconName } from '@/types/globalTypes';
import IconMapper from '../IconMapper';

interface LinksGroupProps {
  icon: IconName;
  label: string;
  active: {
    main: string;
    sub: string;
  };
  initiallyOpened?: boolean;
  setActive: (state: { main: string; sub: string }) => void;
  links?: { label: string; link: string }[];
}

export function MenuGroup({ icon, label, initiallyOpened, links, active, setActive }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const [prevPosition, setPrevPosition] = useState('50%'); // Novo estado para a posição anterior
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({}); // Referências dos elementos

  const items = (hasLinks ? links : []).map((link) => (
    <Text<'a'>
      component="a"
      ref={(el) => (linkRefs.current[link.label] = el)} // Atribui a referência
      data-active={active.sub === link.label || undefined}
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        const linkElement = linkRefs.current[link.label];
        if (linkElement) {
          const topPosition = linkElement.getBoundingClientRect().top;
          setPrevPosition(`${topPosition}px`); // Atualiza a posição anterior
        }
        setActive({ main: label, sub: link.label });
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o);
          setActive({
            main: label,
            sub: '',
          });
        }}
        className={classes.control}
        data-active={label === active.main || undefined}
      >
        <Group justify="space-between" gap={0}>
          <a
            className={classes.linkSingle}
            href="#"
            key={label}
            data-active={label === active.main || undefined}
            onClick={(event) => {
              event.preventDefault();
              setActive({
                main: label,
                sub: '',
              });
            }}
          >
            <IconMapper iconName={icon} className={classes.linkIcon} stroke={1.5} />
            <span>{label}</span>
          </a>
          {hasLinks && (
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
