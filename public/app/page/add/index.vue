<style lang="less" src="./style.less"></style>
<template>
    <div class="canvas" @click="canvasClick">
        <svg :width="page.width" :height="page.height">
            <template v-for="item in page.itemList">
                <image v-if="item.type=='image'" xlink:href="{{item.data}}" :x="item.x" :y="item.y" :height="item.height" :width="item.height" @click="editor(item)"/>
            </template>
        </svg>
        <div class="editor">
            <div class="editor-item" v-for="item in page.itemList" v-if="item.editor" :style="{'left':item.x+'px','top':item.y+'px','width':item.width+'px','height':item.height+'px'}"
                 @click="editor(item)" @touchstart="touchStart(item,$event)" @touchmove="touchMove(item,$event)" @touchcancel="touchEnd(item,$event)" @touchend="touchEnd(item,$event)"></div>
        </div>
    </div>
    <add-dialog :show.sync="addDialogShow" :mult.sync="page.setting.multSelect" v-on:add="addItem"></add-dialog>
    <attribute-dialog :show.sync="attributeDialogShow" v-on:copy="copyItems" v-on:del="delItems" v-on:up-index="upIndex" v-on:down-index="downIndex"></attribute-dialog>
</template>
<script>
    import AddDialog from './AddDialog.vue'
    import AttributeDialog from './AttributeDialog.vue'
    import Page from './Page'
    export default {
        data(){
            return {
                addDialogShow:false,
                page:new Page()
            }
        },
        components:{
            AddDialog,AttributeDialog
        },
        computed:{
            attributeDialogShow(){
                return this.page.hasEditorItem();
            }
        },
        methods:{
            addItem(item){
                this.page.push(item);
            },
            copyItems(){
                this.page.copyItems();
            },
            delItems(){
                this.page.delItems();
            },
            upIndex(){
                this.page.upIndex();
            },
            downIndex(){
                this.page.downIndex();
            },
            rightMenu(){
                this.page.cancelAllEditor();
                this.addDialogShow=true;
            },
            canvasClick(){
                this.addDialogShow=false;
            },
            editor(item){
                if(!item.editor&&!this.page.setting.multSelect){
                    this.page.cancelAllEditor();
                }
                item.switchEditor();
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