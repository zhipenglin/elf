<style lang="less" src="./style.less"></style>
<template>
    <component :is="componentName"></component>
</template>
<script type="text/ecmascript-6">
    import Add from './Add.vue'
    import Attribute from './Attribute.vue'
    export default {
        vuex:{
            getters:{
                add:state=>state.add
            }
        },
        computed:{
            componentName(){
                var map={
                    'add':'Add',
                    'attr':'Attribute'
                };
                return map[this.add.stateType];
            }
        },
        components:{
            Add,Attribute
        }
    }
</script>