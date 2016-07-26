/**
 * Created by ifchangetoclzp on 2016/7/25.
 */

import makeAction from './makeAction'

//STATE
export const stateChangeAdd=makeAction('STATE_CHANGE_ADD');
export const stateChangeAttr=makeAction('STATE_CHANGE_ATTR');
export const stateChangeAnim=makeAction('STATE_CHANGE_ANIM');
export const stateChangeInit=makeAction('STATE_CHANGE_INIT');

//ITEM
export const itemAdd=makeAction('ITEM_ADD');
export const itemCopy=makeAction('ITEM_COPY');
export const itemDel=makeAction('ITEM_DEL');
export const itemUpIndex=makeAction('ITEM_UP_INDEX');
export const itemDownIndex=makeAction('ITEM_DOWN_INDEX');
export const itemEditor=makeAction('ITEM_EDITOR');

//MULT

export const multChange=makeAction('MULT_CHANGE');

