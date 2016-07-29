<template>
    <div class="window-outer animation-list">
        <svg viewBox="-1 810 200 200">
            <g :style="{transform:`translateX(${(1+n)*30}px)`}" v-for="n in 34">
                <line x1="0" y1="0" x2="0" y2="1000" class="refer"/>
                <text x="0" y="1000" class="referLabel">{{(1+n)*60|timeFormat}}</text>
            </g>
            <g :style="{transform:`translateY(-${(1+n)*20}px)`}" v-for="n in 49">
                <line x1="0" y1="1000" x2="1000" y2="1000" class="refer"/>
            </g>
            <g class="animate-item" style="transform: translateY(1000px)">
                <time-line :item="item" v-for="item in animation.timeLine" :style="{transform:`translateY(-${($index+1)*20}px)`}"></time-line>
            </g>
            <g>
                <line x1="0" y1="0" x2="0" y2="1000" class="axes"/>
                <text x="0" y="1000" class="referLabel" style="transform: translate(0,10px)">0ms</text>
            </g>
            <line x1="0" y1="1000" x2="1000" y2="1000" class="axes"/>
        </svg>
    </div>
</template>
<script type="text/ecmascript-6">
    import TimeLine from './TimeLine.vue'
    export default {
        vuex:{
            getters: {
                add: state=>state.add
            }
        },
        filters:{
            timeFormat(n){
                if(n>1000){
                    return n/1000+'s'
                }
                return n+'ms'
            }
        },
        computed:{
            animation(){
                return this.add.page.getFirstEditorItem().animations;
            }
        },
        data(){
            return {
                x:0,
                y:0,
                scale:1
            };
        },
        components:{
            TimeLine
        }
    }
</script>