<template>
    <div class="outer-dialog add" v-if="show">
        <ul>
            <li class="pic iconfont"><input type="file" @change="selected"/></li>
            <li class="text iconfont"></li>
            <li class="page iconfont"></li>
            <li class="mult iconfont" :class="{'close':!mult}" @click="multChange"></li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import upload from '../../modules/upload/lib/upload'
    export default{
        props:{
            show:{
                type:Boolean,
                twoWay:true,
                default:false
            },
            mult:{
                type:Boolean,
                twoWay:true,
                default:false
            }
        },
        methods:{
            selected(e){
                upload(event.target.files[0]).then((data)=>{
                    this.$dispatch('add',{
                        type:'image',
                        data:data
                    });
                })
            },
            multChange(){
                this.mult=!this.mult;
            }
        }
    }
</script>