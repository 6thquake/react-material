import React from 'react';

const ThemeContext = React.createContext('light');

// This function takes a component...
export function withTheme(Component) {
  // ...and returns another component...
  return function ThemedComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
}
function Button({ theme, ...rest }) {
  return (
    <div>
      {theme}
      <button className={theme} {...rest} />;
    </div>
  );
}
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('props in test theme', props);
  }
  render() {
    return <div>context: {this.props.locale}</div>;
  }
}
const ThemedButton = withTheme(Test);
export default ThemedButton;
