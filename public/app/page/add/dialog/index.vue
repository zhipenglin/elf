<style lang="less" src="./style.less"></style>
<template>
    <component :is="componentName"></component>
</template>
<script type="text/ecmascript-6">
    import Add from './Add.vue'
    import Attribute from './Attribute.vue'
    import AnimationList from './AnimationList.vue'
    import AddAnimation from './AddAnimation.vue'
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
                    'attr':'Attribute',
                    'anim-list':'AnimationList',
                    'anim-add':'AddAnimation'
                };
                return map[this.add.stateType];
            }
        },
        components:{
            Add,Attribute,AnimationList,AddAnimation
        }
    }
</script>