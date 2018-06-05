import React, { PureComponent } from 'react';
import DateTimePickersProvider from './DateTimePickersProvider';
import MomentUtils from './utils/moment-utils';

const withDateTimePicker = (options = {}) => Component => {
  	class withDateTimePicker extends React.Component {

		render() {
			const props = this.props;
		  	return (
				<DateTimePickersProvider utils={ options.utils || MomentUtils }>
			  		<Component {...props} />
				</DateTimePickersProvider>
			  	);
		  }
	}

	return withDateTimePicker;
}

export default withDateTimePicker;