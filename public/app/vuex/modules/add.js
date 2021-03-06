/**
 * Created by ifchangetoclzp on 2016/7/25.
 */
import Page from '../model/Page'
const state={
    stateType:'init',
    setting:{
        multSelect:false,//暂时去掉多选功能
    },
    animation:{},
    page:new Page()
};

const mutations={
    //STATE
    STATE_CHANGE_ADD(state){
        state.stateType='add';
        state.page.cancelAllEditor();
    },
    STATE_CHANGE_ATTR(state){
        state.stateType='attr';
    },
    STATE_CHANGE_ANIM_LIST(state){
        state.stateType='anim-list';
    },
    STATE_CHANGE_ANIM_ADD(state){
        state.stateType='anim-add';
    },
    STATE_CHANGE_INIT(state){
        state.stateType='init';
        state.page.cancelAllEditor();
    },
    //ITEM
    ITEM_ADD(state,item){
        state.page.push(item);
    },
    ITEM_COPY(state){
        state.page.copyItems();
    },
    ITEM_DEL(state){
        state.page.delItems();
    },
    ITEM_UP_INDEX(state){
        state.page.upIndex();
    },
    ITEM_DOWN_INDEX(state){
        state.page.downIndex();
    },
    ITEM_EDITOR(state,item){
        if(!item.editor&&!state.setting.multSelect){
            state.page.cancelAllEditor();
        }
        item.switchEditor();
    },
    //ANIMATION
    ANIMATION_CHANGE(state,item){
        state.animation[item.key]=item.value;
    },
    ANIMATION_ADD(state){
        var item=state.page.getFirstEditorItem();
        item.addAnimation(state.animation);
        state.animation={};
    },
    //MULT
    MULT_CHANGE(state){
        state.setting.multSelect=!state.setting.multSelect;
    }
};

export default{
    state,mutations
}