import * as React from 'react';
import { StandardProps } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { TransitionProps } from 'react-transition-group/Transition';
import { TransitionHandlerProps } from '@material-ui/core/transitions/transition';

export interface SpeedDialProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement> & Partial<TransitionHandlerProps>,
      SpeedDialClassKey
    > {
  ariaLabel: string;
  ButtonProps?: Partial<ButtonProps>;
  hidden?: boolean;
  icon: React.ReactNode;
  onClose?: React.ReactEventHandler<{}>;
  open: boolean;
  openIcon?: React.ReactNode;
  TransitionComponent?: React.ReactType;
  transitionDuration?: TransitionProps['timeout'];
  TransitionProps?: TransitionProps;
}

export type SpeedDialClassKey = 'root' | 'actions' | 'actionsClosed';

declare const SpeedDial: React.ComponentType<SpeedDialProps>;

export default SpeedDial;
