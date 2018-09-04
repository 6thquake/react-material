import { addValidationRule } from 'formsy-react';

const hasValue = (value) => {
  return !(value === undefined || value === null || value === '');
};
// required
addValidationRule('isRequired', (values, value) => {
  return hasValue(value);
});

// 最小值
addValidationRule('min', (values, value, v) => {
  return !hasValue(value) || value >= v;
});

// 最大值
addValidationRule('max', (values, value, v) => {
  return !hasValue(value) || value <= v;
});
