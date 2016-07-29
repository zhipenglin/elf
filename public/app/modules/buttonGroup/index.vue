<style lang="less" src="./style.less"></style>
<template>
    <div class="button-group">
        <a class="group-item" v-for="item in list" :class="{'on':active==$index}" @click="change($index)">{{item}}</a>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        props:{
            active:{
                type:Number,
                twoWay:true,
                default:0
            },
            list:{
                type:Array,
                default:()=>[]
            }
        },
        methods:{
            change(index){
                this.active=index;
            }
        }
    }
</script>