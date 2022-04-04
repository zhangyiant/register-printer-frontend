import {
  TopSys,
  BlockInstance,
  BlockTemplate,
  Register,
  Field
} from '@antee/register-printer';

export interface SelectEvent {
  nodeType: string;
  nodeValue: TopSys | BlockInstance | BlockInstance[] | BlockTemplate | Register | Field;
}
