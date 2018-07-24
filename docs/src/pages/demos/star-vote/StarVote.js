import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import StarVote from '@6thquake/react-material/StarVote';

class App extends React.Component {
  doSomething = key => {
    console.log(key);
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <span>basic</span>
          </div>
          <StarVote count={5} value={4} onChange={this.doSomething.bind(this)}>
            {' '}
          </StarVote>
        </div>
        <div>
          <div>
            <span>half-star</span>
          </div>
          <StarVote count={5} value={2.5} onChange={this.doSomething.bind(this)} allowHalf={true}>
            {' '}
          </StarVote>
        </div>
        <div>
          <div>
            <span>read only</span>
          </div>
          <StarVote count={5} value={3} onChange={this.doSomething.bind(this)} disabled={true}>
            {' '}
          </StarVote>
        </div>
      </div>
    );
  }
}
export default App;
