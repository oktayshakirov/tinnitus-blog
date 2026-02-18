import React from 'react';
import type { IconBaseProps, IconType } from 'react-icons';

export type IconProps = IconBaseProps & {
  icon: IconType;
};

const Icon = ({ icon: IconComponent, ...props }: IconProps): JSX.Element =>
  React.createElement(
    IconComponent as unknown as React.ComponentType<IconBaseProps>,
    props
  );

export default Icon;

