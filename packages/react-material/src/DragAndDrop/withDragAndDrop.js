import React, { Component, ComponentClass } from 'react';
import PropTypes from 'prop-types';
import { DragDropManager, IBackend, BackendFactory } from 'dnd-core';
import invariant from 'invariant';
import hoistStatics from 'hoist-non-react-statics';
import HTML5Backend from 'react-dnd-html5-backend';

function checkDecoratorArguments(
	functionName: string,
	signature: string,
	...args: any[]
) {
	if (process.env.NODE_ENV !== 'production') {
		for (const arg of args) {
			if (arg && arg.prototype && arg.prototype.render) {
				// tslint:disable-next-line no-console
				console.error(
					'You seem to be applying the arguments in the wrong order. ' +
						`It should be ${functionName}(${signature})(Component), not the other way around. ` +
						'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order',
				)
				return
			}
		}
	}
}


const CHILD_CONTEXT_TYPES = {
	dragDropManager: PropTypes.object.isRequired,
}

let defaultManager;
function createChildContext (
	backend: BackendFactory,
	context: Context,
) {
	if (!defaultManager) {
        defaultManager = new DragDropManager(HTML5Backend);
    }
	return {
		dragDropManager: defaultManager
	}
}

function DragDropContext(
	backendFactory,
	context
) {
	checkDecoratorArguments('DragDropContext', 'backend', backendFactory) // eslint-disable-line prefer-rest-params
	const childContext = createChildContext(backendFactory, context)

	return function decorateContext(
		DecoratedComponent
	) {
		const displayName =
			DecoratedComponent.displayName || DecoratedComponent.name || 'Component'

		class DragDropContextContainer extends React.Component {
			 static DecoratedComponent = DecoratedComponent
			 static displayName = `DragDropContext(${displayName})`
			 static childContextTypes = CHILD_CONTEXT_TYPES

			 child = null

			 getDecoratedComponentInstance() {
				invariant(
					this.child,
					'In order to access an instance of the decorated component it can not be a stateless component.',
				)
				return this.child
			}

			 getManager() {
				return childContext.dragDropManager
			}

			 getChildContext() {
				return childContext
			}

			 render() {
				return (
					<DecoratedComponent
						{...this.props}
						ref={(child: any) => (this.child = child)}
					/>
				)
			}
		}

		return hoistStatics(DragDropContextContainer, DecoratedComponent) 
	}
}

const withDragAndDrop = (options = {}) => Component => {
  return DragDropContext(options.backend || HTML5Backend)(Component);
}

export default withDragAndDrop;
