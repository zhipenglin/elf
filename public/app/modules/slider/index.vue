<style lang="less" src="./style.less"></style>
<template>
    <div class="slider" @click="clickHandler">
        <div class="slider-background"></div>
        <div class="slider-line" :style="{'width':value+'%'}" :class="{'on':active}"></div>
        <div class="slider-item" :style="{'left':value+'%'}" :class="{'on':active}"></div>
        <div class="slider-event" :style="{'left':value+'%'}" @touchstart.prevent="touchStart" @touchmove.prevent="touchMove" @touchcancel="cancel" @touchend="cancel" @click.stop=""></div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            value:{
                type:Number,
                twoWay:true,
                default:0
            }
        },
        eventStart:0,
        valueStart:0,
        data(){
            return {
                active:false
            }
        },
        methods:{
            touchStart(e){
                this.$options.eventStart=e.touches[0].clientX;
                this.$options.valueStart=this.value;
                this.active=true;
            },
            touchMove(e){
                var offset=100*(e.touches[0].clientX-this.$options.eventStart)/this.$el.offsetWidth+this.$options.valueStart;
                if(offset<0){
                    offset=0;
                }else if(offset>100){
                    offset=100;
                }
                this.value=offset;
            },
            cancel(){
                this.active=false;
            },
            clickHandler(e){
                this.value=100*e.offsetX/this.$el.offsetWidth
            }
        }
    }
</script>