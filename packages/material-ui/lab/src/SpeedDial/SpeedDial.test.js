import { codes as keycodes } from 'keycode';
import React from 'react';
import { assert } from 'chai';
import { spy } from 'sinon';
import { createMount, createShallow, getClasses } from '@material-ui/core/test-utils';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import SpeedDial from './SpeedDial';
import SpeedDialAction from '../SpeedDialAction';

describe('<SpeedDial />', () => {
  let mount;
  let shallow;
  let classes;
  const icon = <Icon>font_icon</Icon>;
  const defaultProps = {
    open: true,
    ariaLabel: 'mySpeedDial',
  };

  before(() => {
    mount = createMount();
    shallow = createShallow({ dive: true });
    classes = getClasses(
      <SpeedDial {...defaultProps} icon={icon}>
        <div />
      </SpeedDial>,
    );
  });

  it('should render with a minimal setup', () => {
    const wrapper = mount(
      <SpeedDial {...defaultProps} icon={icon}>
        <SpeedDialAction icon={<Icon>save_icon</Icon>} tooltipTitle="Save" />
      </SpeedDial>,
    );

    wrapper.unmount();
  });

  it('should render a Fade transition', () => {
    const wrapper = shallow(
      <SpeedDial {...defaultProps} icon={icon}>
        <div />
      </SpeedDial>,
    );
    assert.strictEqual(wrapper.type(), 'div');
  });

  it('should render a Fab', () => {
    const wrapper = shallow(
      <SpeedDial {...defaultProps} icon={icon}>
        <div />
      </SpeedDial>,
    );
    const buttonWrapper = wrapper.childAt(0).childAt(0);
    assert.strictEqual(buttonWrapper.type(), Fab);
  });

  it('should render with a null child', () => {
    const wrapper = shallow(
      <SpeedDial {...defaultProps} icon={icon}>
        <SpeedDialAction tooltipTitle="One" />
        {null}
        <SpeedDialAction tooltipTitle="Three" />
      </SpeedDial>,
    );
    assert.strictEqual(wrapper.find(SpeedDialAction).length, 2);
  });

  it('should render with the root class', () => {
    const wrapper = shallow(
      <SpeedDial {...defaultProps} icon={icon}>
        <div />
      </SpeedDial>,
    );
    assert.strictEqual(wrapper.hasClass(classes.root), true);
  });

  it('should render with the user and root classes', () => {
    const wrapper = shallow(
      <SpeedDial {...defaultProps} className="mySpeedDialClass" icon={icon}>
        <div />
      </SpeedDial>,
    );
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass('mySpeedDialClass'), true);
  });

  it('should render the actions with the actions class', () => {
    const wrapper = shallow(
      <SpeedDial {...defaultProps} className="mySpeedDial" icon={icon}>
        <SpeedDialAction icon={icon} tooltipTitle="SpeedDialAction" />
      </SpeedDial>,
    );
    const actionsWrapper = wrapper.childAt(1);
    assert.strictEqual(actionsWrapper.hasClass(classes.actions), true);
    assert.strictEqual(actionsWrapper.hasClass(classes.actionsClosed), false);
  });

  it('should render the actions with the actions and actionsClosed classes', () => {
    const wrapper = shallow(
      <SpeedDial {...defaultProps} open={false} className="mySpeedDial" icon={icon}>
        <SpeedDialAction icon={icon} tooltipTitle="SpeedDialAction" />
      </SpeedDial>,
    );
    const actionsWrapper = wrapper.childAt(1);
    assert.strictEqual(actionsWrapper.hasClass(classes.actions), true);
    assert.strictEqual(actionsWrapper.hasClass(classes.actionsClosed), true);
  });

  it('should pass the open prop to its children', () => {
    const wrapper = shallow(
      <SpeedDial {...defaultProps} icon={icon}>
        <SpeedDialAction icon={icon} tooltipTitle="SpeedDialAction1" />
        <SpeedDialAction icon={icon} tooltipTitle="SpeedDialAction2" />
      </SpeedDial>,
    );
    const actionsWrapper = wrapper.childAt(1);
    assert.strictEqual(actionsWrapper.childAt(0).props().open, true);
    assert.strictEqual(actionsWrapper.childAt(1).props().open, true);
  });

  describe('prop: onClick', () => {
    it('should be set as the onClick prop of the Fab', () => {
      const onClick = spy();
      const wrapper = shallow(
        <SpeedDial {...defaultProps} icon={icon} onClick={onClick}>
          <div />
        </SpeedDial>,
      );
      const buttonWrapper = wrapper.find(Fab);
      assert.strictEqual(buttonWrapper.props().onClick, onClick);
    });

    describe('for touch devices', () => {
      before(() => {
        document.documentElement.ontouchstart = () => {};
      });

      it('should be set as the onTouchEnd prop of the button if touch device', () => {
        const onClick = spy();

        const wrapper = shallow(
          <SpeedDial {...defaultProps} icon={icon} onClick={onClick}>
            <div />
          </SpeedDial>,
        );
        const buttonWrapper = wrapper.find(Fab);
        assert.strictEqual(buttonWrapper.props().onTouchEnd, onClick);
      });

      after(() => {
        delete document.documentElement.ontouchstart;
      });
    });
  });

  describe('prop: onKeyDown', () => {
    it('should be called when a key is pressed', () => {
      const handleKeyDown = spy();
      const wrapper = shallow(
        <SpeedDial {...defaultProps} icon={icon} onKeyDown={handleKeyDown}>
          <div />
        </SpeedDial>,
      );
      const buttonWrapper = wrapper.childAt(0).childAt(0);
      const event = {};
      buttonWrapper.simulate('keyDown', event);
      assert.strictEqual(handleKeyDown.callCount, 1);
      assert.strictEqual(handleKeyDown.args[0][0], event);
    });
  });

  describe('prop: direction', () => {
    const testDirection = direction => {
      const className = `direction${direction}`;
      const wrapper = shallow(
        <SpeedDial {...defaultProps} direction={direction.toLowerCase()} icon={icon}>
          <SpeedDialAction icon={icon} />
          <SpeedDialAction icon={icon} />
        </SpeedDial>,
      );
      const actionsWrapper = wrapper.childAt(1);
      assert.strictEqual(wrapper.hasClass(classes[className]), true);
      assert.strictEqual(actionsWrapper.hasClass(classes[className]), true);
    };

    it('should place actions in correct position', () => {
      testDirection('Up');
      testDirection('Down');
      testDirection('Left');
      testDirection('Right');
    });
  });

  describe('dial focus', () => {
    let actionRefs;
    let dialButtonRef;
    let onkeydown;
    let wrapper;

    const mountSpeedDial = (direction = 'up', actionCount = 6) => {
      actionRefs = [];
      dialButtonRef = undefined;
      onkeydown = spy();

      wrapper = mount(
        <SpeedDial
          {...defaultProps}
          ButtonProps={{
            buttonRef: ref => {
              dialButtonRef = ref;
            },
          }}
          direction={direction}
          icon={icon}
          onKeyDown={onkeydown}
        >
          {Array.from({ length: actionCount }, (_, i) => (
            <SpeedDialAction
              key={i}
              ButtonProps={{
                buttonRef: ref => {
                  actionRefs[i] = ref;
                },
              }}
              icon={icon}
              tooltipTitle={`action${i}`}
            />
          ))}
        </SpeedDial>,
      );
    };

    /**
     * @returns the button of SpeedDial
     */
    const getDialButton = () => wrapper.find('Fab').first();
    /**
     *
     * @param actionIndex
     * @returns the button of the nth SpeedDialAction or the Fab if -1
     */
    const getActionButton = actionIndex => {
      if (actionIndex === -1) {
        return getDialButton();
      }
      return wrapper.find(SpeedDialAction).at(actionIndex);
    };
    /**
     * @returns true if the button of the nth action is focused
     */
    const isActionFocused = index => {
      const expectedFocusedElement = index === -1 ? dialButtonRef : actionRefs[index];
      return expectedFocusedElement === window.document.activeElement;
    };
    /**
     * promisified setImmediate
     */
    const immediate = () => new Promise(resolve => setImmediate(resolve));

    const resetDialToOpen = direction => {
      if (wrapper && wrapper.exists()) {
        wrapper.unmount();
      }

      mountSpeedDial(direction);
      dialButtonRef.focus();
    };

    after(() => {
      wrapper.unmount();
    });

    it('displays the actions on focus gain', () => {
      resetDialToOpen();
      assert.strictEqual(wrapper.props().open, true);
    });

    describe('first item selection', () => {
      const createShouldAssertFirst = assertFn => (dialDirection, arrowKey) => {
        resetDialToOpen(dialDirection);
        getDialButton().simulate('keydown', { keyCode: keycodes[arrowKey] });
        assertFn(isActionFocused(0));
      };

      const shouldFocusFirst = createShouldAssertFirst(assert.isTrue);
      const shouldNotFocusFirst = createShouldAssertFirst(assert.isFalse);

      it('considers arrow keys with the same orientation', () => {
        shouldFocusFirst('up', 'up');
        shouldFocusFirst('up', 'down');

        shouldFocusFirst('down', 'up');
        shouldFocusFirst('down', 'down');

        shouldFocusFirst('right', 'right');
        shouldFocusFirst('right', 'left');

        shouldFocusFirst('left', 'right');
        shouldFocusFirst('left', 'left');
      });

      it('ignores arrow keys orthogonal to the direction', () => {
        shouldNotFocusFirst('up', 'left');
        shouldNotFocusFirst('up', 'right');

        shouldNotFocusFirst('down', 'left');
        shouldNotFocusFirst('down', 'right');

        shouldNotFocusFirst('right', 'up');
        shouldNotFocusFirst('right', 'up');

        shouldNotFocusFirst('left', 'down');
        shouldNotFocusFirst('left', 'down');
      });
    });

    describe('actions navigation', () => {
      /**
       * tests a combination of arrow keys on a focused SpeedDial
       */
      const testCombination = async (
        dialDirection,
        [firstKey, ...combination],
        [firstFocusedAction, ...foci],
      ) => {
        resetDialToOpen(dialDirection);

        getDialButton().simulate('keydown', { keyCode: keycodes[firstKey] });
        assert.isTrue(
          isActionFocused(firstFocusedAction),
          `focused action initial ${firstKey} should be ${firstFocusedAction}`,
        );

        combination.forEach((arrowKey, i) => {
          const previousFocusedAction = foci[i - 1] || firstFocusedAction;
          const expectedFocusedAction = foci[i];
          const combinationUntilNot = [firstKey, ...combination.slice(0, i + 1)];

          getActionButton(previousFocusedAction).simulate('keydown', {
            keyCode: keycodes[arrowKey],
          });
          assert.isTrue(
            isActionFocused(expectedFocusedAction),
            `focused action after ${combinationUntilNot.join(
              ',',
            )} should be ${expectedFocusedAction}`,
          );
        });

        /**
         * Tooltip still fires onFocus after unmount ("Warning: setState unmounted").
         * Could not fix this issue so we are using this workaround
         */
        await immediate();
      };

      it('considers the first arrow key press as forward navigation', async () => {
        await testCombination('up', ['up', 'up', 'up', 'down'], [0, 1, 2, 1]);
        await testCombination('up', ['down', 'down', 'down', 'up'], [0, 1, 2, 1]);

        await testCombination('right', ['right', 'right', 'right', 'left'], [0, 1, 2, 1]);
        await testCombination('right', ['left', 'left', 'left', 'right'], [0, 1, 2, 1]);

        await testCombination('down', ['down', 'down', 'down', 'up'], [0, 1, 2, 1]);
        await testCombination('down', ['up', 'up', 'up', 'down'], [0, 1, 2, 1]);

        await testCombination('left', ['left', 'left', 'left', 'right'], [0, 1, 2, 1]);
        await testCombination('left', ['right', 'right', 'right', 'left'], [0, 1, 2, 1]);
      });

      it('ignores array keys orthogonal to the direction', async () => {
        await testCombination('up', ['up', 'left', 'right', 'up'], [0, 0, 0, 1]);
        await testCombination('right', ['right', 'up', 'down', 'right'], [0, 0, 0, 1]);
        await testCombination('down', ['down', 'left', 'right', 'down'], [0, 0, 0, 1]);
        await testCombination('left', ['left', 'up', 'down', 'left'], [0, 0, 0, 1]);
      });

      it('does not wrap around', async () => {
        await testCombination('up', ['up', 'down', 'down', 'up'], [0, -1, -1, 0]);
        await testCombination('right', ['right', 'left', 'left', 'right'], [0, -1, -1, 0]);
        await testCombination('down', ['down', 'up', 'up', 'down'], [0, -1, -1, 0]);
        await testCombination('left', ['left', 'right', 'right', 'left'], [0, -1, -1, 0]);
      });
    });
  });
});
