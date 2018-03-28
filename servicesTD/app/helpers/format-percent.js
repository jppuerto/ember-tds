import { helper } from '@ember/component/helper';

export function formatPercent(value/*, hash*/) {

  return value*100+"%";
}

export default helper(formatPercent);
