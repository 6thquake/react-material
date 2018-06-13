import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import { getLocale } from '../../LocaleProvider';
import defaultMoment from 'moment';

class ExMomentUtils extends MomentUtils {
	
	constructor({ locale, moment } = {}) {
		super({locale, moment});
	    this.moment = moment || defaultMoment
	    this.locale =  locale || this.moment.locale();
	}

	getMeridiemText(ampm) {
		let text = getLocale(this.locale ||  this.moment.locale()).MomentUtils;

    	return ampm === 'am' ? (text.am || 'AM') : (text.pm || 'PM');
  	}
}

export default ExMomentUtils;