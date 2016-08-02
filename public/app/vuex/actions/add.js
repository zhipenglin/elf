/**
 * Created by ifchangetoclzp on 2016/7/25.
 */

import makeAction from './makeAction'

//STATE
export const stateChangeAdd=makeAction('STATE_CHANGE_ADD');
export const stateChangeAttr=makeAction('STATE_CHANGE_ATTR');
export const stateChangeAnimList=makeAction('STATE_CHANGE_ANIM_LIST');
export const stateChangeAnimAdd=makeAction('STATE_CHANGE_ANIM_ADD');
export const stateChangeInit=makeAction('STATE_CHANGE_INIT');

//ITEM
export const itemAdd=makeAction('ITEM_ADD');
export const itemCopy=makeAction('ITEM_COPY');
export const itemDel=({ dispatch, state },...args)=>{
    dispatch('ITEM_DEL');
    if(!state.add.page.getLength()){
        dispatch('STATE_CHANGE_INIT');
    }
};
export const itemUpIndex=makeAction('ITEM_UP_INDEX');
export const itemDownIndex=makeAction('ITEM_DOWN_INDEX');
export const itemEditor=({ dispatch, state },...args)=>{

    dispatch('ITEM_EDITOR',...args);
    if(state.add.page.hasEditorItem()){
        dispatch('STATE_CHANGE_ATTR');
    }else{
        dispatch('STATE_CHANGE_INIT');
    }
};

//ANIMATION
export const animationChange=makeAction('ANIMATION_CHANGE');
export const animationAdd=({ dispatch, state },...args)=>{
    dispatch('ANIMATION_ADD');
    dispatch('STATE_CHANGE_ANIM_LIST');
};

//MULT

export const multChange=makeAction('MULT_CHANGE');

