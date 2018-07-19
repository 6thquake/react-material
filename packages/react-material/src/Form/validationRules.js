import { addValidationRule } from 'formsy-react';

// required
addValidationRule('isRequired', (values, value) => {
  return !(value === undefined || value === null || value === '');
});

// 最小值
addValidationRule('min', (values, value, v) => {
  return value >= v;
});

// 最大值
addValidationRule('max', (values, value, v) => {
  return value <= v;
});
