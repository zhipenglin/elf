<style lang="less" src="./style.less"></style>
<template>
    <component :is="componentName"></component>
</template>
<script type="text/ecmascript-6">
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
                    'anim-list':'AnimationList',
                    'anim-add':'AddAnimation'
                };
                return map[this.add.stateType];
            }
        },
        components:{
            AnimationList,AddAnimation
        }
    }
</script>