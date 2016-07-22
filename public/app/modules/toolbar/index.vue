<style lang="less">
    @import "style.less";
</style>
<template>
    <div class="toolbar">
        <div class="toolbar-inner">
            <a :class="[item.name]" v-for="item in list" v-link="{name:item.name,exact:true}">
                <i class="iconfont"></i>
                <span>{{item.text}}</span>
            </a>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import routeConfig from '../../router'
    var toolbarList=[];
    for(let key in routeConfig){
        if(routeConfig[key].text){
            toolbarList.push({
                text:routeConfig[key].text,
                name:routeConfig[key].name,
                path:key,
            });
        }
    }
    export default {
        computed:{
            list(){
                return toolbarList;
            }
        }
    }
</script>