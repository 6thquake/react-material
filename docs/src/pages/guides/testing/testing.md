# Testing

## Internal

We take tests seriously. We have written and maintain **a wide range** of tests so we can
iterate with confidence on the components, for instance, the visual regression tests provided by [Argos-CI](https://www.argos-ci.com/mui-org/material-ui) have proven to be really helpful.
To learn more about our internal tests, you can have a look at the [README](https://github.com/mui-org/material-ui/blob/v1-beta/test/README.md).

[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/v1-beta.svg)](https://codecov.io/gh/mui-org/material-ui/branch/v1-beta)

## Userspace

What about writing tests in userspace? The Material-UI styling infrastructure uses some helper functions on top of enzyme to make the process easier.
You can take advantage of those helpers if you so choose.

### Shallow rendering

Shallow rendering is useful to constrain your testing to a component as a unit. This also ensures that your tests aren't indirectly asserting behavior of child components.
We expose a `createShallow()` function for this situation. However, you will most likely not need it most of the time. Shallow rendering was created to test components in isolation. This means without leaking child implementation details such as the context.

### Full DOM rendering

Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs or may require the full lifecycle in order to fully test the component (i.e., `componentDidMount` etc.).
We expose a `createMount()` function for this situation.

### Render to string

Rendering to a string is useful to test the behavior of the components that are used on the server.
You can take advantage of it to assert the generated HTML string.
We expose a `createRender()` function for this situation.

## API

### `createShallow([options]) => shallow`

Generate an enhanced shallow function with the needed context.
Please refer to the [API documentation of enzyme](http://airbnb.io/enzyme/docs/api/shallow.html) for further details of the `shallow` function.


#### Arguments

1. `options` (*Object* [optional])
  - `options.shallow` (*Function* [optional]): The shallow function to enhance, it uses **enzyme by default**.
  - `options.untilSelector` (*String* [optional]): Recursively shallow renders the children until it can find the provided selector. It's useful to drill down higher-order components.
  - `options.dive` (*Boolean* [optional]): Shallow render the one non-DOM child of the current wrapper, and return a wrapper around the result.
  - The other keys are forwarded to the options argument of `enzyme.shallow()`.

#### Returns

`shallow` (*shallow*): A shallow function.

#### Examples

```jsx
import { createShallow } from 'material-ui/test-utils';

describe('<MyComponent />', () => {
  let shallow;

  before(() => {
    shallow = createShallow();
  });

  it('should work', () => {
    const wrapper = shallow(<MyComponent />);
  });
});
```

### `createMount([options]) => mount`

Generate an enhanced mount function with the needed context.
Please refer to the [enzyme API documentation](http://airbnb.io/enzyme/docs/api/mount.html) for further details of the `mount` function.

#### Arguments

1. `options` (*Object* [optional])
  - `options.mount` (*Function* [optional]): The mount function to enhance, it uses **enzyme by default**.
  - The other keys are forwarded to the options argument of `enzyme.mount()`.

#### Returns

`mount` (*mount*): A mount function.

#### Examples

```jsx
import { createMount } from 'material-ui/test-utils';

describe('<MyComponent />', () => {
  let mount;

  before(() => {
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  it('should work', () => {
    const wrapper = mount(<MyComponent />);
  });
});
```

### `createRender([options]) => render`

Generate a render to string function with the needed context.
Please refer to the [enzyme API documentation](http://airbnb.io/enzyme/docs/api/render.html) for further details of the `render` function.

#### Arguments

1. `options` (*Object* [optional])
  - `options.render` (*Function* [optional]): The render function to enhance, it uses **enzyme by default**.
  - The other keys are forwarded to the options argument of `enzyme.render()`.

#### Returns

`render` (*Function*): A render to string function.

#### Examples

```jsx
import { createRender } from 'material-ui/test-utils';

describe('<MyComponent />', () => {
  let render;

  before(() => {
    render = createRender();
  });

  it('should work', () => {
    const wrapper = render(<MyComponent />);
  });
});
```
