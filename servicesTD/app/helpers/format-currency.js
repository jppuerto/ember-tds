import { helper } from '@ember/component/helper';

export function formatCurrency(value/*, hash*/) {
  let dollars = Math.floor(value);
  let sign = '€';
  return `${dollars}${sign}`;
}

export default helper(formatCurrency);
