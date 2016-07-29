<style lang="less" src="./style.less"></style>
<template>
    <div class="canvas" @click="canvasClick">
        <svg width="100%" height="100%">
            <template v-for="item in add.page.itemList">
                <image v-if="item.type=='image'" xlink:href="{{item.data}}" :x="item.x" :y="item.y" :height="item.height" :width="item.height" @click.stop="editor(item)"/>
            </template>
        </svg>
        <div class="editor">
            <div class="editor-item" v-for="item in add.page.itemList" v-if="item.editor" :style="{'left':item.x+'px','top':item.y+'px','width':item.width+'px','height':item.height+'px'}"
                 @click.stop="editor(item)" @touchstart="touchStart(item,$event)" @touchmove="touchMove(item,$event)" @touchcancel="touchEnd(item,$event)" @touchend="touchEnd(item,$event)"></div>
        </div>
    </div>
    <dialog></dialog>
    <win></win>
</template>
<script type="text/ecmascript-6">
    import {stateChangeInit,stateChangeAdd,stateChangeAttr,itemEditor} from '../../vuex/actions/add'
    import dialog from './dialog'
    import win from './win'
    export default {
        vuex:{
            getters:{
                add:state=>state.add
            },
            actions:{
                stateChangeInit,stateChangeAdd,itemEditor
            }
        },
        components:{
            dialog,win
        },
        methods:{
            rightMenu(){
                this.stateChangeAdd();
            },
            canvasClick(){
                this.stateChangeInit();
            },
            editor(item){
                this.itemEditor(item);
            },
            touchStart(item,e){
                item.touchStart(e);
            },
            touchMove(item,e){
                item.touchMove(e);
            },
            touchEnd(item,e){
                item.touchEnd(e);
            }
        }
    }
</script>