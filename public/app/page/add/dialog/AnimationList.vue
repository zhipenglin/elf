<template>
    <div class="outer-dialog animation-list">
        <ul>
            <li class="back iconfont" @click="back"></li>
            <li class="add iconfont" @click="addAnimation"></li>
            <li class="del iconfont"></li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import {stateChangeAttr,stateChangeAnimAdd} from '../../../vuex/actions/add'
    export default {
        vuex: {
            getters: {
                add: state=>state.add
            },
            actions:{
                stateChangeAttr,stateChangeAnimAdd
            }
        },
        methods:{
            back(){
                this.stateChangeAttr();
            },
            addAnimation(){
                this.stateChangeAnimAdd();
            }
        }
    }
</script>