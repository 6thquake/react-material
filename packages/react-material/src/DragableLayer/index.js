import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';
import CustomDragLayer from './CustomDragLayer';

class DragAroundCustomDragLayer extends Component {
  constructor(props) {
    super(props);

    this.handleSnapToGridAfterDropChange = this.handleSnapToGridAfterDropChange.bind(this);
    this.handleSnapToGridWhileDraggingChange = this.handleSnapToGridWhileDraggingChange.bind(this);

    this.state = {
      snapToGridAfterDrop: false,
      snapToGridWhileDragging: false,
    };
  }

  handleSnapToGridAfterDropChange() {
    const { snapToGridAfterDrop } = this.state;
    this.setState({
      snapToGridAfterDrop: !snapToGridAfterDrop,
    });
  }

  handleSnapToGridWhileDraggingChange() {
    const { snapToGridWhileDragging } = this.state;
    this.setState({
      snapToGridWhileDragging: !snapToGridWhileDragging,
    });
  }

  render() {
    const { snapToGridAfterDrop, snapToGridWhileDragging } = this.state;

    return (
      <div>
        <p>
          <b>
            <a href="https://github.com/react-dnd/react-dnd/tree/master/packages/documentation/examples/02%20Drag%20Around/Custom%20Drag%20Layer">
              Browse the Source
            </a>
          </b>
        </p>
        <p>
          The browser APIs provide no way to change the drag preview or its behavior once drag has
          started. Libraries such as jQuery UI implement the drag and drop from scratch to work
          around this, but react-dnd only supports browser drag and drop “backend” for now, so we
          have to accept its limitations.
        </p>
        <p>
          We can, however, customize behavior a great deal if we feed the browser an empty image as
          drag preview. This library provides a <code>DragLayer</code> that you can use to implement
          a fixed layer on top of your app where you&apos;d draw a custom drag preview component.
        </p>
        <p>
          Note that we can draw a completely different component on our drag layer if we wish so.
          It&apos;s not just a screenshot.
        </p>
        <p>
          With this approach, we miss out on default “return” animation when dropping outside the
          container. However, we get great flexibility in customizing drag feedback and zero
          flicker.
        </p>
        <Container snapToGrid={snapToGridAfterDrop} />
        <CustomDragLayer snapToGrid={snapToGridWhileDragging} />
        <p>
          <label htmlFor="snapToGridWhileDragging">
            <input
              id="snapToGridWhileDragging"
              type="checkbox"
              checked={snapToGridWhileDragging}
              onChange={this.handleSnapToGridWhileDraggingChange}
            />
            <small>Snap to grid while dragging</small>
          </label>
          <br />
          <label htmlFor="snapToGridAfterDrop">
            <input
              id="snapToGridAfterDrop"
              type="checkbox"
              checked={snapToGridAfterDrop}
              onChange={this.handleSnapToGridAfterDropChange}
            />
            <small>Snap to grid after drop</small>
          </label>
        </p>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(DragAroundCustomDragLayer);
