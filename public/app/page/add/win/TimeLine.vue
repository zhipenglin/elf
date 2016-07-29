<template>
    <g>
        <rect x="0" y="0" width="5" height="20" ry="10" style="fill: #66cc99;"></rect>
        <rect x="5" y="0" width="10" height="20" ry="10" style="fill: #ff99cc;"></rect>
        <rect x="15" y="0" width="15" height="20" ry="10" style="fill: #99cc33;"></rect>
        <rect x="30" y="0" width="20" height="20" ry="10" style="fill: #ccccff;"></rect>
        <rect x="50" y="0" width="60" height="20" ry="10" style="fill: #99ccff;"></rect>
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
        ready(){
            this.$log('item');
        }
    }
</script>