import * as React from 'react';
import { Theme } from '@material-ui/core';
import { AppBarProps } from '@material-ui/core/AppBar';
import { createStyles, getThemeProps, makeStyles } from '@material-ui/styles';
import styled, { StyledProps } from '@material-ui/styles/styled';

function testGetThemeProps(theme: Theme, props: AppBarProps): void {
  const overriddenProps: AppBarProps = getThemeProps({ name: 'MuiAppBar', props, theme });

  // AvatarProps not assignable to AppBarProps
  // $ExpectError
  const wronglyNamedProps: AppBarProps = getThemeProps({
    name: 'MuiAvatar',
    props,
    theme,
  });
}

// makeStyles
{
  interface StyleProps {
    color?: 'blue' | 'red';
  }

  const styles = (theme: Theme) =>
    createStyles({
      root: (props: StyleProps) => ({
        backgroundColor: props.color || theme.palette.primary.main,
      }),
    });
  const useMyStyles = makeStyles(styles);

  interface MyComponentProps extends StyleProps {
    message: string;
  }

  const MyComponent = (props: MyComponentProps) => {
    const { color, message } = props;
    // Expected 1 argument, but got 0
    const emptyClasses = useMyStyles(); // $ExpectError
    const classes = useMyStyles(props);
    // $ExpectError
    const invalidClasses = useMyStyles({ colourTypo: 'red' });
    // $ExpectError
    const undefinedClassName = classes.toot;

    return (
      <div className={classes.root}>
        {color}: {message}
      </div>
    );
  };

  // testing options
  makeStyles(styles, {
    flip: true,
    name: 'some-sheet',
    generateId: (_, sheet) => (sheet ? sheet.classes.root : 'no-sheet'),
  });
  makeStyles(styles, {
    // rules are added at runtime so no compile time error
    generateId: (_, sheet) => (sheet ? sheet.classes.toot : 'no-sheet'),
  });

  // optional props
  const useWithoutProps = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        background: 'none',
      },
    }),
  );
  const chartStyles = {
    chart: {
      width: '100%',
      height: 70,
      backgroundColor: '#f9f9f9',
    },
  };
  const useChartClasses = makeStyles(chartStyles);
  const NoPropsComponent = () => {
    const classes = useWithoutProps();
    const chartClasses = useChartClasses();
    const alsoClasses = useWithoutProps(5);
  };

  // unsafe any props make the param optional
  const useUnsafeProps = makeStyles(
    createStyles({
      root: (props: any) => ({
        backgroundColor: props.deep.color,
      }),
    }),
  );

  const UnsafeProps = (props: StyleProps) => {
    // would be nice to have at least a compile time error because we forgot the argument
    const classes = useUnsafeProps(); // runtime: Can't read property color of undefined
    // but this would pass anyway
    const alsoClasses = useUnsafeProps(undefined); // runtime: Can't read property color of undefined
  };
}

// styled
{
  const StyledButton = styled('button')({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  });
  const renderedStyledButton = <StyledButton classes={{ root: 'additional-root-class' }} />;
  // $ExpectError
  const nonExistingClassKey = <StyledButton classes={{ notRoot: 'additional-root-class' }} />;

  interface MyTheme {
    fontFamily: string;
  }
  // tslint:disable-next-line: no-empty-interface
  interface MyComponentProps extends StyledProps {
    defaulted: string;
  }
  class MyComponent extends React.Component<MyComponentProps> {
    static defaultProps = {
      defaulted: 'Hello, World!',
    };
    render() {
      const { className, defaulted } = this.props;
      return <div className={className}>Greeted?: {defaulted.startsWith('Hello')}</div>;
    }
  }
  const StyledMyComponent = styled<typeof MyComponent>(MyComponent)((theme: MyTheme) => ({
    fontFamily: theme.fontFamily,
  }));
  const renderedMyComponent = (
    <>
      <MyComponent className="test" />
      <StyledMyComponent />
    </>
  );
}
