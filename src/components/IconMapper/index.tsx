import { IconName } from '@/types/globalTypes';
import { IconAdjustments, IconAlertSquareRounded, IconCalendarStats, IconFileAnalytics, IconGauge, IconLock, IconNotes, IconPresentationAnalytics } from '@tabler/icons-react';
import React from 'react';


const iconMap: Record<IconName, React.ComponentType<any>> = {
  IconGauge,
  IconNotes,
  IconCalendarStats,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
};

interface IconMapperProps {
  iconName: IconName;
  [key: string]: any;
}

const IconMapper: React.FC<IconMapperProps> = ({ iconName, ...props }) => {
  const IconComponent = iconMap[iconName];

  return IconComponent ? <IconComponent {...props} /> : <IconAlertSquareRounded stroke={2} />;
};

export default IconMapper;
