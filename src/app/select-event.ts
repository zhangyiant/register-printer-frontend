import {
  TopSys,
  BlockInstance,
  BlockTemplate,
  Register,
  Field
} from '../register-printer';

export interface SelectEvent {
  nodeType: string;
  nodeValue: TopSys | BlockInstance | BlockInstance[] | BlockTemplate | Register | Field;
}
