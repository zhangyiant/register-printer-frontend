import {
  TopSys,
  BlockInstance,
  BlockTemplate,
  RegisterTemplate,
  FieldTemplate
} from '@antee/register-printer';

export interface SelectEvent {
  nodeType: string;
  nodeValue: TopSys | BlockInstance | BlockInstance[] | BlockTemplate | RegisterTemplate | FieldTemplate;
}
