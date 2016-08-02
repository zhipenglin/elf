<template>
    <g>
        <rect
                @touchstart.prevent='touchStart($index,$event)'
                @touchmove='touchMove($index,$event)'
                @touchend='touchEnd($index,$event)'
                @touchcancel='touchEnd($index,$event)'
              :x="getX($index)" y="0" :width="getWidth($index)" height="20" ry="10"
                :style="getStyle($index)" v-for="point in item"></rect>
    </g>
</template>
<script type="text/ecmascript-6">
    export default{
        props:{
            item:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            getX(index){
                var x=0;
                for(let start=0;start<index;start++){
                    x+=parseInt(this.item[start].delay);
                    x+=parseInt(this.item[start].last);
                }
                x+=parseInt(this.item[index].delay);
                return x;
            },
            getWidth(index){
                return parseInt(this.item[index].last);
            },
            getStyle(index){
                var colors=['#66cc99','#ff99cc','#99cc33','#ccccff','#99ccff'];
                return {
                    fill:colors[this.item[index].type],
                    transform:`translate(${this.item[index].x}px,${this.item[index].y}px)`
                }
            },
            touchStart(index,e){
                this.item[index].touchStart(e);
            },
            touchMove(index,e){
                this.item[index].touchMove(e);
            },
            touchEnd(index,e){
                this.item[index].touchEnd(e);
            }
        }
    }
</script>