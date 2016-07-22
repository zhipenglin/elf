<template>
    <animation-window :show.sync="animationShow"></animation-window>
    <div class="outer-dialog attribute" v-if="show">
        <ul>
            <li class="copy iconfont" @click="copy"></li>
            <li class="del iconfont" @click="del"></li>
            <li class="up-index iconfont" @click="upIndex"></li>
            <li class="down-index iconfont" @click="downIndex"></li>
            <li class="animation iconfont" @click="addAnimation"></li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import AnimationWindow from './AnimationWindow.vue'
    export default{
        props:{
            show:{
                type:Boolean,
                twoWay:true,
                default:false
            }
        },
        components:{
            AnimationWindow
        },
        data(){
            return {
                animationShow:false
            }
        },
        ready(){
            this.$watch('show',()=>{
                if(!this.show){
                    this.animationShow=false;
                }
            });
        },
        methods:{
            copy(){
                this.$dispatch('copy');
            },
            del(){
                this.$dispatch('del');
            },
            upIndex(){
                this.$dispatch('up-index');
            },
            downIndex(){
                this.$dispatch('down-index');
            },
            addAnimation(){
                this.animationShow=true;
            }
        }
    }
</script>