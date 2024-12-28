import { useState, useEffect } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Collapse, Group, Text, UnstyledButton } from '@mantine/core';
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
    if (opened && hasLinks && !active.sub) {
      setActive({ main: label, sub: links[0].label });
    }
  }, [opened, links, active.sub, label, setActive]);

  const handleGroupClick = () => {
    // Se o grupo estiver fechado, abre e seleciona o primeiro item
    if (!opened && hasLinks) {
      setActive({ main: label, sub: links[0].label });
    }
    setOpened((prev) => !prev);
  };


  return (
    <>
      <UnstyledButton
        onClick={handleGroupClick}
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
              const subActive = hasLinks && opened ? links[0].label : '';
              setActive({
                main: label,
                sub: subActive,
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
