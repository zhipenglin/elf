<template>
    <div class="outer-dialog animation-add">
        <ul>
            <li class="back iconfont" @click="back"></li>
            <li class="confirm iconfont"></li>
            <li class="preview iconfont"></li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import {stateChangeAnimList} from '../../../vuex/actions/add'
    export default {
        vuex:{
            actions:{
                stateChangeAnimList
            }
        },
        methods:{
            back(){
                this.stateChangeAnimList();
            }
        }
    }
</script>