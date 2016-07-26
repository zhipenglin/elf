<template>
    <div class="outer-dialog add" v-if="add.stateType=='add'">
        <ul>
            <li class="pic iconfont"><input type="file" @change="selected"/></li>
            <li class="text iconfont"></li>
            <li class="page iconfont"></li>
            <li class="mult iconfont" :class="{'close':!add.setting.multSelect}" @click="multChange"></li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import upload from '../../../modules/upload/lib/upload'
    import {itemAdd,multChange} from '../../../vuex/actions/add'
    export default{
        vuex:{
            getters:{
                add:state=>state.add
            },
            actions:{
                itemAdd,multChange
            }
        },
        methods:{
            selected(e){
                upload(event.target.files[0]).then((data)=>{
                    this.itemAdd({
                        type:'image',
                        data:data
                    });
                })
            },
            multChange(){
                this.multChange();
            }
        }
    }
</script>