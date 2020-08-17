import React, { ReactElement } from 'react';
import { Button, Theme } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.grey[800],
      backgroundColor: theme.palette.grey[100],
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      position: 'relative',
      justifyContent: 'flex-start',
      '& .MuiButton-startIcon': {
        marginLeft: 16,
        marginRight: theme.spacing(2),
        left: 0
      },
      '& .MuiButton-endIcon': {
        marginLeft: 16,
        marginRight: theme.spacing(2),
        right: 0
      },
      width: '100%',
      minWidth: 230
    }
  });

type FButtonProps = {
  id?: string;
  startIcon?: any;
  classes: CSSProperties;
  children: ReactElement | string | Array<ReactElement | string>;
  className?: string;
  disabled?: boolean | undefined;
  onClick?: Function;
  component?: any;
  endIcon?: any;
  variant?: 'text' | 'outlined' | 'contained';
};

const FButton = ({
  id,
  classes,
  children,
  startIcon,
  className,
  disabled,
  onClick,
  component,
  endIcon,
  variant
}: FButtonProps) => {
  const classList = className
    ? `${className} ${classes.button}`
    : `${classes.button}`;
  return (
    <Button
      id={id}
      data-testid={id}
      className={classList}
      disabled={!!disabled}
      size={'medium'}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick ? () => onClick() : () => {}}
      component={component}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default withStyles(styles, { withTheme: true })(FButton);
