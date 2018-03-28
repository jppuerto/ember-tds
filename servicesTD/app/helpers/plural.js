import { helper } from '@ember/component/helper';

export function plural(count/*, hash*/) {
if(count == 0){
  return "aucun séléctionné";
}
if (count == 1){
  return "1 séléctionné";
}
return count+" séléctionnés";
}

export default helper(plural);
