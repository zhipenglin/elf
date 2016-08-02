<template>
    <div class="window-outer add-animation">
        <div class="group title">
            <button-group :active="animation.type" :list="animationTypeList" v-on:value="setType"></button-group>
        </div>
        <div class="group">
            <div class="label">延迟</div>
            <slider :value="animation.delay" v-on:value="setDelay"></slider>
        </div>
        <div class="group">
            <div class="label">时长</div>
            <slider :value="animation.last" v-on:value="setLast"></slider>
        </div>
        <div class="group">
            <div class="label">重复次数</div>
            <slider :value="animation.repeat" v-on:value="setRepeat"></slider>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {animationChange} from '../../../vuex/actions/add'
    import ButtonGroup from '../../../modules/buttonGroup'
    import slider from '../../../modules/slider'
    export default{
        vuex:{
            actions:{
                animationChange
            },
            getters: {
                animation: state=>state.add.animation
            }
        },
        typeMap:[{
            type:'opacity',
            text:'透明度'
        },{
            type:'translate',
            text:'位移'
        },{
            type:'scale',
            text:'缩放'
        },{
            type:'rotate',
            text:'旋转'
        },{
            type:'skew',
            text:'倾斜'
        }],
        data(){
            return {
                animationType:0,
                animationTypeList:this.$options.typeMap.map(n=>n.text),
                data:{
                    type:'opacity',
                    delay:0,
                    last:0,
                    repeat:0
                }
            }
        },
        methods:{
            setType(value){
                this.animationChange({
                    key:'type',value
                });
                console.log(this.animation);
            },
            setDelay(value){
                this.animationChange({
                    key:'delay',value
                });
            },
            setLast(value){
                this.animationChange({
                    key:'last',value
                });
            },
            setRepeat(value){
                this.animationChange({
                    key:'repeat',value
                });
            },
        },
        components:{
            slider,ButtonGroup
        }
    }
</script>