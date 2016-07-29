<template>
    <div class="window-outer add-animation">
        <div class="group title">
            <button-group :active.sync="animationType" :list="animationTypeList"></button-group>
        </div>
        <div class="group">
            <div class="label">延迟</div>
            <slider :value.sync="data.delay"></slider>
        </div>
        <div class="group">
            <div class="label">时长</div>
            <slider :value.sync="data.last"></slider>
        </div>
        <div class="group">
            <div class="label">重复次数</div>
            <slider :value.sync="data.repeat"></slider>
        </div>
        <div class="option-area" v-if="animationType==0">
            <div class="group">
                <div class="label">开始值(透明度)</div>
                <slider></slider>
            </div>
            <div class="group">
                <div class="label">结束值(透明度)</div>
                <slider></slider>
            </div>
        </div>
        <div class="option-area" v-if="animationType==1">
            <div class="group">
                <div class="label">开始值(X轴)</div>
                <slider></slider>
            </div>
            <div class="group">
                <div class="label">结束值(X轴)</div>
                <slider></slider>
            </div>
            <div class="group">
                <div class="label">开始值(Y轴)</div>
                <slider></slider>
            </div>
            <div class="group">
                <div class="label">结束值(Y轴)</div>
                <slider></slider>
            </div>
            <div class="group">
                <div class="label">开始值(Z轴)</div>
                <slider></slider>
            </div>
            <div class="group">
                <div class="label">结束值(Z轴)</div>
                <slider></slider>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import ButtonGroup from '../../../modules/buttonGroup'
    import slider from '../../../modules/slider'
    export default{
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
        components:{
            slider,ButtonGroup
        }
    }
</script>