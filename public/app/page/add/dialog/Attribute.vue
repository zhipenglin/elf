<template>
    <div class="outer-dialog attribute">
        <ul>
            <li class="copy iconfont" @click="copy"></li>
            <li class="del iconfont" @click="del"></li>
            <li class="up-index iconfont" @click="upIndex"></li>
            <li class="down-index iconfont" @click="downIndex"></li>
            <li class="animation iconfont" @click="animation"></li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import {itemCopy,itemDel,itemUpIndex,itemDownIndex,stateChangeAnimList,stateChangeInit} from '../../../vuex/actions/add'
    export default{
        vuex:{
            getters:{
                add:state=>state.add
            },
            actions:{
                itemCopy,itemDel,itemUpIndex,itemDownIndex,stateChangeInit,stateChangeAnimList
            }
        },
        methods:{
            copy(){
                this.itemCopy();
            },
            del(){
                this.itemDel();
            },
            upIndex(){
                this.itemUpIndex();
            },
            downIndex(){
                this.itemDownIndex();
            },
            animation(){
                this.stateChangeAnimList();
            }
        }
    }
</script>